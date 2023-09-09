import mercadopago from "mercadopago"
import {  getPedidosTransf } from "./pedidos.controller";
import app from '../app'
import { getConnection, queries } from '../database'; // Importa la función de conexión
import config from "../config";

export const receiveWebHook = async (req, res) => {
  let items;
  let fecha, id_pago, id_usuario, direccion, nota, total, id_tipo_pago, id_estado, id_tipo_entrega;
  const pool = await getConnection()

  try {
    const payment = req.query;
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      const fullData = data.body;
      console.log(data);
          // Pedido
          fecha = fullData.date_approved;
          id_pago = fullData.id;
          id_usuario = fullData.metadata.user_id;
          direccion =
            fullData.metadata.tipo_entrega == 1
              ? fullData.additional_info.payer.address.street_name
              : ' ';
          nota = fullData.metadata.nota_pedido || '';
          total = fullData.transaction_amount;
          id_tipo_pago = fullData.metadata.tipo_pago;
          id_tipo_entrega = fullData.metadata.tipo_entrega;
          id_estado = fullData.status === 'approved' ? 1 : null;

      if (fullData.status !== 'approved') {
        // Si el estado del pago no es 'aprobado', envía una respuesta de error
        return res.status(400).json({ message: 'El pago no está en estado aprobado' });
      }
      // Inicia una transacción
      await pool.query('BEGIN');

      // Agregar el pedido
      const orderResult = await pool.query(queries.Pedidos.addOrder,
        [
          fecha,
          parseInt(id_pago),
          id_usuario,
          direccion,
          nota,
          parseFloat(total),
          parseInt(id_tipo_entrega),
          parseInt(id_tipo_pago),
          parseInt(id_estado),
          0
        ]
      );
      console.log(orderResult);
      const pedidoID = orderResult.rows[0].id;

      // Desc Pedido
      items = fullData.additional_info.items;
      for (const item of items) {
        const { id, quantity, unit_price } = item;

        // Inserta un registro en la tabla "desc_pedidos"
        await pool.query(queries.DescPedidos.addDescOrder,
          [parseInt(id), parseInt(quantity), parseFloat(quantity) * parseFloat(unit_price), pedidoID]
        );
      }

      // Confirma la transacción
      await pool.query('COMMIT');

      const today = new Date();

      const newOrder = await getPedidosTransf(today);
      console.log(newOrder[0]);
      const io = app.get('socketio');
      io.emit('adminOrder', newOrder[0]);

      // Enviar una respuesta de éxito
      res.status(200).json({ message: 'Pago recibido y procesado correctamente' });
    } else {
      // Enviar una respuesta si el tipo no es 'payment'
      res.status(400).json({ message: 'Tipo de pago no válido' });
    }
  } catch (error) {
    console.error(error);
    // Manejar errores adecuadamente y enviar una respuesta de error
    await pool.query('ROLLBACK'); // En caso de error, revierte la transacción
    res.status(500).json({ error: 'Hubo un error al procesar el pago' });
  }finally{
    pool.release()
}
};



export const create_preference =(req, res) => {
    let preference = {
      items: req.body.items,
      metadata: req.body.extra,
      payer: {
        name: '',
        address: {
            street_name: req.body.address || ''}
        },
      back_urls: {
        success: `https://${config.server_host}/delivery/`,
        failure: `https://${config.server_host}/carta/`,
        pending: "",
      },
      notification_url:`https://${config.server_host}/webhook/`,
      auto_return: "approved"};
    
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          response: response.body 
        });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({msg: error})
      });
}
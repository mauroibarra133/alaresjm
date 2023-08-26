import mercadopago from "mercadopago"
import { addOrder, getPedidosTransf } from "./pedidos.controller";
import { addDescOrderTransf } from "./desc_pedidos";
import app from '../app'

export const receiveWebHook = async (req, res) => {
  let items;
  let fecha, id_pago, id_usuario, direccion, nota, total, id_tipo_pago, id_estado, id_tipo_entrega;

  try {
    const payment = req.query;
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      const fullData = data.body;
      console.log(data);
      // Pedido
      fecha = fullData.date_approved;
      id_pago = fullData.id;
      id_usuario = fullData.metadata.user_id
      direccion = fullData.metadata.tipo_entrega == 1 ? fullData.additional_info.payer.address.street_name : ' ';
      nota = fullData.metadata.nota_pedido || '';
      total = fullData.transaction_amount;
      id_tipo_pago = fullData.metadata.tipo_pago;
      id_tipo_entrega = fullData.metadata.tipo_entrega;
      id_estado = fullData.status === 'approved' ? 1 : null;

      // Agregar el pedido
      const result = await addOrder(
        fecha,
        parseInt(id_pago),
        id_usuario, 
        direccion,
        nota,
        parseInt(total),
        parseInt(id_tipo_pago),
        parseInt(id_tipo_entrega)
      );
      const pedidoID = result.recordset[0].newId

      // Desc Pedido
      items = fullData.additional_info.items;
      await addDescOrderTransf(items, pedidoID);

      const today = new Date()

      const newOrder = await getPedidosTransf(today)
      console.log(newOrder[0]);
      const io = app.get('socketio')
      io.emit('adminOrder',newOrder[0]);
      // Enviar una respuesta de éxito
      res.status(200).json({ message: 'Pago recibido y procesado correctamente' });
    } else {
      // Enviar una respuesta si el tipo no es 'payment'
      res.status(400).json({ message: 'Tipo de pago no válido' });
    }
  } catch (error) {
    console.error(error);
    // Manejar errores adecuadamente y enviar una respuesta de error
    res.status(500).json({ error: 'Hubo un error al procesar el pago' });
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
        success: "http://localhost:5173/delivery",
        failure: "http://localhost:5173",
        pending: "",
      },
      notification_url:"https://96e5-190-122-76-4.ngrok.io/webhook",
      auto_return: "approved"};
    
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          response: response.body 
        });
      })
      .catch(function (error) {
        res.status(500).json({msg: error})
      });
}
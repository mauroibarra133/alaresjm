import config from "../config";
import { queries, getConnection } from "../database"
import generatePaymentID from '../utils/functions';
import { addDescOrderTransf } from "./desc_pedidos";

export async function addOrder(fecha,id_pago,id_usuario,direccion,nota,total,id_tipo_pago,id_tipo_entrega,monto_cambio) {
  const pool = await getConnection()

    try {
      const result = await pool.query(
        queries.Pedidos.addOrder,
        [fecha,parseInt(id_pago),id_usuario,direccion,nota,parseFloat(total),parseInt(id_tipo_entrega),
            parseInt(id_tipo_pago),1,id_tipo_pago === 2 ? 0 : parseFloat(monto_cambio),
        ]
      );
      return result;
    } catch (error) {
      console.error(error);
      throw error; // Lanza el error para manejarlo en un nivel superior
    }finally{
      pool.release()
  }
  }


  export async function addOrderEft(req, res) {
    let { fecha, id_usuario, direccion, nota, total, id_tipo_pago, id_tipo_entrega, id_estado, items, monto_cambio } = req.body;
  const pool = await getConnection()
    try {
      const paymentID = generatePaymentID();
  
      // Guardar el pedido en la base de datos
      const result = await pool.query(
        queries.Pedidos.addOrder,
        [
          fecha,
          paymentID,
          parseInt(id_usuario),
          direccion,
          nota,
          parseFloat(total),
          parseInt(id_tipo_entrega),
          parseInt(id_tipo_pago),
          1,
          id_tipo_pago === 2 ? 0 : parseFloat(monto_cambio),
        ]
      );
      const id_pedido = result.rows[0].id;
  
      // Llama a la función para agregar los detalles del pedido
      await addDescOrderTransf(items, id_pedido);
  
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }finally{
      pool.release()
  }
  }
  
  export async function getPedidos(req, res) {
    const date = req.query.date;
    const user_id = req.query.user_id;
    console.log(user_id,date);
    res.header('Access-Control-Allow-Origin', config.server_host);

    const client = await getConnection()
    try {

        if (user_id || user_id !== undefined) {
            const result = await client.query(queries.Pedidos.getPedidosByUserId, [parseInt(user_id)]);
            res.status(200).json({ msg: "Datos obtenidos correctamente", data: result.rows });
        } else if (date || date !== undefined) {
            const result = await client.query(queries.Pedidos.getPedidosByDate, [date]);
            res.status(200).json({ msg: "Datos obtenidos correctamente", data: result.rows });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al obtener los datos" });
    }finally{
      client.release()
  }
}

export async function getPedidosTransf(date, user_id) {
  const client = await getConnection()
    try {

        if (user_id || user_id !== undefined) {
            const result = await client.query(queries.Pedidos.getPedidosByUserId, [parseInt(user_id)]);
            return result.rows;
        } else if (date || date !== undefined) {
            const result = await client.query(queries.Pedidos.getPedidosByDate, [date]);
            return result.rows;
        }

        return [];
    } catch (error) {
        console.log(error);
        return [];
    }finally{
      client.release()
  }
}

export async function updatePedidoOnServer(req, res) {
    const state = req.query.state;
    const id = req.query.id;

    const client = await getConnection()
    try {
        const result = await client.query(queries.Pedidos.updatePedido, [state, parseInt(id)]);
        res.status(200).json({ msg: "Estado cambiado correctamente", data: result.rows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al cambiar el estado" });
    }finally{
      client.release()
  }
}

export async function obtenerPedidoParaAdmin(pedido) {
    const date = pedido.fecha;

    const client = await getConnection()
    try {
        const result = await client.query(queries.Pedidos.getPedidosByDate, [date]);
        return result.rows;
    } catch (error) {
        console.log(error);
        return [];
    }finally{
      client.release()
  }
}
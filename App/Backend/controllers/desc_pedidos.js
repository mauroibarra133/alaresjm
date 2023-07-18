import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries


export async function addDescOrderTransf(items,id_pedido) {
    try {
      const pool = await getConnection(); // Obtiene la conexión a la base de datos
      for (const item of items) {
        const { id, quantity, unit_price} = item;
  
        await pool
          .request()
          .input('id_producto', sql.Int, parseInt(id))
          .input('cantidad', sql.Int, parseInt(quantity))
          .input('subtotal', sql.Int, parseInt(quantity)* parseInt(unit_price))
          .input('id_pedido', sql.Int, id_pedido)
          .query(queries.DescPedidos.addDescOrder);
      }
      // Envía una respuesta adecuada si es necesario
    } catch (error) {
      // Manejo de errores si ocurre alguna excepción
      throw error; // Lanza el error para manejarlo en un nivel superior
    }
  }

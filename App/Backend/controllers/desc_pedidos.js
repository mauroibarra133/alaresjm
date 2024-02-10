import { getConnection,queries } from '../database/'; // Importa la función de conexión

export async function addDescOrderTransf(items, id_pedido) {
  const client = await getConnection() // Obtén una conexión del pool
  try {
      await client.query('BEGIN'); // Inicia una transacción

      for (const item of items) {
          const { id, quantity, unit_price } = item;

          // Inserta un registro en la tabla "desc_pedidos"
          await client.query(queries.DescPedidos.addDescOrder, [parseInt(id), parseInt(quantity), parseInt(quantity) * parseInt(unit_price), id_pedido]);
      }

      await client.query('COMMIT'); // Confirma la transacción

  } catch (error) {
      await client.query('ROLLBACK'); // En caso de error, revierte la transacción
      throw error; // Lanza el error para manejarlo en un nivel superior
  }finally{
    client.release()
  }
}
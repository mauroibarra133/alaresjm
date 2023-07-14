import { queries, getConnection,sql } from "../database"

export async function addOrder(fecha,id_pago,id_usuario,direccion,nota,total,id_tipo_pago,id_tipo_entrega){
    
    try {
        const pool = await getConnection()
        await pool.request()
        .input('fecha',sql.DateTime,fecha)
        .input('id_usuario',sql.Int,id_usuario)
        .input('direccion',sql.Text,direccion)
        .input('nota',sql.Text,nota)
        .input('total',sql.Int,total)
        .input('id_tipo_entrega',sql.Int,id_tipo_entrega)
        .input('id_tipo_pago',sql.Int,id_tipo_pago)
        .input('id_estado',sql.Int,28)
        .input('id_pago',sql.Int,id_pago)
        .query(queries.Pedidos.addOrder)

    } catch (error) {
        console.log(error.message);
    }
    
}   

export async function searchIdPedido(id_pago){
    try {
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const result = await pool.request()
        .input('id_pago',sql.Int,id_pago)
        .query(queries.Pedidos.searchIdOrder) //Hacemos la consulta

        return result.recordset[0].id
        }catch (error) {
            console.log(error);
    }

}
import {getConnection, sql, queries} from '../database/' 

export async function addOrder(fecha,id_usuario,direccion,nota,total,id_tipo_pago,id_tipo_entrega,id_estado){
    try {
        const pool = await getConnection()
        await pool.request()
        
        .input('fecha',sql.DateTime,fecha.toISOString())
        .input('id_usuario',sql.Int,id_usuario)
        .input('direccion',sql.Text,direccion)
        .input('nota',sql.Text,nota)
        .input('total',sql.Int,total)
        .input('id_tipo_pago',sql.Text,id_tipo_pago)
        .input('id_tipo_entrega',sql.Text,id_tipo_entrega)
        .input('id_estado',sql.Text,id_estado)
        .query(queries.Pedidos.addOrder)

        console.log('Pedido Posteado!');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}   

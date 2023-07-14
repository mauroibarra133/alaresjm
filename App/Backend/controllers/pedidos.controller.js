import { queries } from "../database"

export async function addOrder(req,res){
    let {fecha,id_usuario,direccion,notaPedido,tipo_entrega,id_descripcion_pedido} = req.body
    
    try {
        const pool = await getConnection()
        await pool.request()
        .input('fecha',sql.VarChar,fecha)
        .input('id_usuario',sql.Int,id_usuario)
        .input('direccion',sql.Text,direccion)
        .input('notaPedido',sql.Text,notaPedido)
        .input('tipo_entrega',sql.Int,tipo_entrega)
        .input('id_descripcion_pedido',sql.Text,id_descripcion_pedido)
        .input('total',sql.Int,total)
        .input('id_estado',sql.Int,'Pagado')
        .query(queries.Pedidos.addOrder)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}   
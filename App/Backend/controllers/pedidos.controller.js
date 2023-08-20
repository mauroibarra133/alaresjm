import { queries, getConnection,sql } from "../database"
import generatePaymentID from '../utils/functions';
import { addDescOrderTransf } from "./desc_pedidos";
export async function addOrder(fecha,id_pago,id_usuario,direccion,nota,total,id_tipo_pago,id_tipo_entrega,monto_cambio){
    
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('fecha',sql.DateTime,fecha)
        .input('id_usuario',sql.Int,id_usuario)
        .input('direccion',sql.Text,direccion)
        .input('nota',sql.Text,nota)
        .input('total',sql.Int,total)
        .input('id_tipo_entrega',sql.Int,id_tipo_entrega)
        .input('id_tipo_pago',sql.Int,id_tipo_pago)
        .input('id_estado',sql.Int,28)
        .input('id_pago',sql.Int,id_pago)
        .input('monto_cambio',sql.Int, id_tipo_pago == 2 ? 0 : monto_cambio)
        .query(queries.Pedidos.addOrder)
        return result
    } catch (error) {

        console.log(error.message);
    }
    
}   


export async function addOrderEft(req,res){
    let {fecha,id_usuario,direccion,nota,total,id_tipo_pago,id_tipo_entrega,id_estado, items, monto_cambio} = req.body

    try {
        const paymentID = generatePaymentID();


                // Guardar el pedido en la base de datos
                const pool = await getConnection()
                const result = await pool.request()
                
                
                .input('fecha',sql.DateTime,fecha)
                .input('id_usuario',sql.Int,id_usuario)
                .input('direccion',sql.Text,direccion)
                .input('nota',sql.Text,nota)
                .input('total',sql.Int,total)
                .input('id_tipo_pago',sql.Int,id_tipo_pago)
                .input('id_tipo_entrega',sql.Int,id_tipo_entrega)
                .input('id_estado',sql.Int,id_estado)
                .input('id_pago',sql.Int,paymentID)
                .input('monto_cambio',sql.Int,monto_cambio)
                .query(queries.Pedidos.addOrder)
                const id_pedido = result.recordset[0].newId
        
                await addDescOrderTransf(items,id_pedido)

        res.sendStatus(200)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}   

export async function getPedidos(req, res) {
    const  date = req.query.date
    const  user_id = req.query.user_id
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173')

    //Filtrar por usuario
    if (user_id || user_id !== undefined) {
        try {
            const pool = await getConnection();
            const result = await pool
                .request()
                .input('user_id', sql.Int, user_id)
                .query(queries.Pedidos.getPedidosByUserId);
            res.status(200).json({ msg: "Datos obtenidos correctamente", data: result.recordset });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Error al obtener los datos" });
        }
    }
    if(date || date !== undefined){
        try {
            const pool = await getConnection();
            const result = await pool
                .request()
                .input('date', sql.Date, date)
                .query(queries.Pedidos.getPedidosByDate);
            res.status(200).json({ msg: "Datos obtenidos correctamente", data: result.recordset });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Error al obtener los datos" });
        }
    }
    
}

export async function getPedidosTransf(date, user_id) {

    //Filtrar por usuario
    if (user_id || user_id !== undefined) {
        try {
            const pool = await getConnection();
            const result = await pool
                .request()
                .input('user_id', sql.Int, user_id)
                .query(queries.Pedidos.getPedidosByUserId);
            return  result.recordset 
        } catch (error) {
            console.log(error);
        }
    }
    if(date || date !== undefined){
        try {
            const pool = await getConnection();
            const result = await pool
                .request()
                .input('date', sql.Date, date)
                .query(queries.Pedidos.getPedidosByDate);
            return  result.recordset 
        } catch (error) {
            console.log(error);
        }
    }
    
}

export async function updatePedidoOnServer(req,res){
    const state = req.query.state
    const id = req.query.id
    console.log(state,id);
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('state', sql.VarChar, state)
            .input('id', sql.Int, id)
            .query(queries.Pedidos.updatePedido);
        res.status(200).json({ msg: "Estado cambiado correctamente", data: result.recordset });
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerPedidoParaAdmin(pedido){
    const date = pedido.fecha
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('date', sql.Date, date)
        .query(queries.Pedidos.getPedidosByDate);
        return result.recordset
}
import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries


export async function addReserva(req,res){
    let {fecha, hora, id_usuario, cantidad_personas, lugar, cliente_reserva} = req.body

    try {
        const pool = await getConnection()
        await pool.request()

        .input('fecha',sql.Date,fecha)
        .input('hora',sql.VarChar,hora)
        .input('id_usuario',sql.Int,id_usuario)
        .input('cantidad_personas',sql.Int,cantidad_personas)
        .input('lugar',sql.VarChar,lugar)
        .input('cliente_reserva',sql.VarChar,cliente_reserva)
        .query(queries.Reservas.addReserva)

        res.status(200).json({msg: "Tu reserva se ha enviado correctamente"})        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "No se pudo agregar la reserva"})
    }
    
}   

export async function getReservas(req, res) {
    let result;
    try {
        let date = req.query.date;
        let user_id = req.query.user_id

        //Si ambos existen
        if(user_id && date){
            const pool = await getConnection();
             result = await pool
                .request()
                .input('user_id', sql.Int, user_id)
                .input('fecha', sql.Date, date)
                .query(queries.Reservas.getReservasByUserAndDate);
                res.status(200).json({msg: "Datos obtenidos correctamente", data: result.recordset}) 
        }
        //Buscar por user
        else if(user_id || user_id !== undefined){
            const pool = await getConnection();
             result = await pool
                .request()
                .input('user_id', sql.Int, user_id)
                .query(queries.Reservas.getReservasByUser);
                res.status(200).json({msg: "Datos obtenidos correctamente", data: result.recordset})  
        }
        else if(date || date !== undefined){
            const pool = await getConnection();
             result = await pool
                .request()
                .input('fecha', sql.Date, date)
                .query(queries.Reservas.getReservasByDate);
                res.status(200).json({msg: "Datos obtenidos correctamente", data: result.recordset})        
            
        }
        //Buscar por fecha
        else{
            const pool = await getConnection();
             result = await pool
            .request()
            .input('fecha', sql.Date, date)
            .query(queries.Reservas.getReservas);

            res.status(200).json({msg: "Datos obtenidos correctamente", data: result.recordset})        
        }
       



        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

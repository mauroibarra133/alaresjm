import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries


export async function addReserva(req,res){
    let {fecha, hora, id_usuario, cantidad_personas, lugar, cliente_reserva, id_estado} = req.body

    try {
        const pool = await getConnection()
        await pool.request()

        .input('fecha',sql.Date,fecha)
        .input('hora',sql.VarChar,hora)
        .input('id_usuario',sql.Int,id_usuario)
        .input('cantidad_personas',sql.Int,cantidad_personas)
        .input('lugar',sql.VarChar,lugar)
        .input('cliente_reserva',sql.VarChar,cliente_reserva)
        .input('id_estado',sql.Int,id_estado)
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
        let user_id = req.query.user_id
        let date = req.query.date
        console.log(date);
        //Buscar por user
        if(user_id || user_id !== undefined){
            const pool = await getConnection();
             result = await pool
                .request()
                .input('user_id', sql.Int, user_id)
                .query(queries.Reservas.getReservasByUser);
                res.status(200).json({msg: "Datos obtenidos correctamente", data: result.recordset})  
        }
        if(date){
            const pool = await getConnection();
            result = await pool
               .request()
               .input('date', sql.Date, date)
               .query(queries.Reservas.getReservasByDate);
               res.status(200).json({msg: "Datos obtenidos correctamente", data: result.recordset})  
        }
        console.log(result);
       
    } catch (error) {
        console.log(error);
    }
}

export async function deleteReserva(req,res){
    const id = req.params.id
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('id', sql.Int, id)
        .query(queries.Reservas.deleteReserva);
        res.status(200).json({msg: "Reserva eliminada correctamente"})  
    } catch (error) {
        console.log(error);
        
    }
      

}

export async function updateReserva(req, res) {
    const id = req.params.id;
    const updatedData = req.body; // Asumiendo que los datos actualizados están en el cuerpo de la solicitud

    try {
        console.log(updatedData);
        const pool = await getConnection();
        await pool
            .request()
            .input('id', sql.Int, id)
            // Aquí deberías usar los campos correspondientes de la tabla de reservas y sus valores actualizados
            .input('fecha', sql.Date, updatedData.fecha)
            .input('hora', sql.VarChar, updatedData.hora)
            .input('comensales', sql.Int, parseInt(updatedData.comensales) ||parseInt(updatedData.cantidad_personas))
            .input('zona', sql.VarChar, updatedData.zona || updatedData.lugar)
            .input('cliente', sql.VarChar, updatedData.cliente || updatedData.cliente_reserva)
            .input('estado', sql.VarChar, updatedData.estado)
            .query(queries.Reservas.updateReserva);

        res.status(200).json({ msg: "Reserva modificada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al modificar la reserva" });
    }
}

import {getConnection, queries} from '../database/' //Traigo la conexion de la BD y las queries



export async function addReserva(req, res) {
    let { fecha, hora, id_usuario, cantidad_personas, lugar, cliente_reserva, id_estado } = req.body;

    const client = await getConnection()
    try {
        const result = await client.query(queries.Reservas.addReserva, [
            fecha,
            hora,
            id_usuario,
            cantidad_personas,
            lugar,
            cliente_reserva,
            id_estado
        ]);
        res.status(200).json({ msg: "Tu reserva se ha enviado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "No se pudo agregar la reserva" });
    }finally{
        client.release()
    }
}

export async function getReservas(req, res) {
    const client = await getConnection()
    try {
        const user_id = req.query.user_id;
        const date = req.query.date;
        let result;


        if (user_id || user_id !== undefined) {
            result = await client.query(queries.Reservas.getReservasByUser, [user_id]);
        } else if (date) {
            result = await client.query(queries.Reservas.getReservasByDate, [date]);
        }


        if (result && result.rows) {
            res.status(200).json({ msg: "Datos obtenidos correctamente", data: result.rows });
        } else {
            res.status(404).json({ msg: "No se encontraron reservas" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al obtener los datos" });
    }finally{
        client.release()
    }
}

export async function deleteReserva(req, res) {
    const id = req.params.id;
    const client = await getConnection()
    try {
        await client.query(queries.Reservas.deleteReserva, [id]);
        res.status(200).json({ msg: "Reserva eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al eliminar la reserva" });
    }finally{
        client.release()
    }
}

export async function updateReserva(req, res) {
    const id = req.params.id;
    const updatedData = req.body; // Asumiendo que los datos actualizados están en el cuerpo de la solicitud

    const client = await getConnection()
    try {
        const result = await client.query(queries.Reservas.updateReserva, [
            updatedData.fecha,
            updatedData.hora,
            parseInt(updatedData.comensales) || parseInt(updatedData.cantidad_personas),
            updatedData.zona || updatedData.lugar,
            updatedData.cliente || updatedData.cliente_reserva,
            updatedData.estado,
            id
        ]);
        res.status(200).json({ msg: "Reserva modificada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al modificar la reserva" });
    }finally{
        client.release()
    }
}

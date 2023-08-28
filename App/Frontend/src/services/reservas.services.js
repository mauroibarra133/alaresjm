import axios from "axios";
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from "../utils/constants";

const urlSource = `${SERVER_HOST}/api/reservas`
export async function agregarReserva(fecha,hora,id_usuario, cantidad,lugar,cliente_reserva){
    try {
        const response = await axios.post(urlSource,{
            fecha: fecha,
            hora: hora,
            id_usuario: id_usuario,
            cantidad_personas: cantidad,
            lugar: lugar,
            cliente_reserva: cliente_reserva,
            id_estado: 1
        });
        return response
    } catch (error) {
        throw ConnectionError()
    }

}

export async function getBookings(params) {
    try {
    const response = await axios.get(urlSource, {params});
    return response;
        
    } catch (error) {
        throw new ConnectionError()
    }
  }

  export async function deleteReserva(id){
    try {
        const response = await axios.delete(`${urlSource}/${id}`)
        return response
    
    } catch (error) {
        return error
    }
}
export async function updateReserva(id, updatedData) {
    try {
        const response = await axios.put(`${urlSource}/${id}`, updatedData);
        return response;
    } catch (error) {
        return error;
    }
}

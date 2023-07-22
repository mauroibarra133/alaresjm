import axios from "axios";

export async function agregarReserva(fecha,hora,id_usuario, cantidad,lugar,cliente_reserva){
    const response = await axios.post("http://localhost:4000/reservas",{
        fecha: fecha,
        hora: hora,
        id_usuario: id_usuario,
        cantidad_personas: cantidad,
        lugar: lugar,
        cliente_reserva: cliente_reserva
    });
    return response
}

export async function getReservas(user_id) {
    console.log(user_id);
    const response = await axios.get("http://localhost:4000/reservas", { params: {
        user_id: user_id
    } });
    console.log(response);
    return response;
  }
  
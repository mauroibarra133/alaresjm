import axios from "axios"
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from "../utils/constants";

export async function createOrder(fecha_ISO, id_usuario,direccionCliente, notaPedido, total, id_tipo_pago,tipoEntrega, monto_cambio,items){
    try {
      const response = await axios.post(`${SERVER_HOST}/api/pedidos`,{
        fecha: fecha_ISO,
        id_usuario: id_usuario,
        direccion: direccionCliente,
        nota: notaPedido,
        total: parseInt(total),
        id_tipo_pago: parseInt(id_tipo_pago),
        id_estado: 1, //A confirmar
        id_tipo_entrega: parseInt(tipoEntrega),
        monto_cambio: parseInt(monto_cambio),
        items: items
      })
      return response
    } catch (error) {
      console.log(error);
      throw new ConnectionError()
    }

}

export async function getOrders(params) {
  try {
  const response = await axios.get(`${SERVER_HOST}/api/pedidos`, { params: params });
  return response;

  } catch (error) {
    console.log(error);
    throw new ConnectionError()
  }
}

export async function updatePedido(params) {
  const response = await axios.put(`${SERVER_HOST}/api/pedidos`,null, { params: params });
  return response;
}
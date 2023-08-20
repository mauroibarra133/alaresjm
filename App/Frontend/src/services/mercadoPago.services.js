import axios from 'axios';
import { ConnectionError } from '../utils/error';

export async function createPreferenceMP(items, direccionCliente,tipoPago, tipoEntrega, notaPedido,id_usuario){
  try {
    const response = await axios.post("http://localhost:4000/create_preference", {
      items: items,
      address: direccionCliente,
      extra: {
        tipoPago: tipoPago,
        tipoEntrega: tipoEntrega,
        notaPedido: notaPedido,
        user_id: id_usuario
      }
    });
    return response
  } catch (error) {
    console.log(error);
    throw new ConnectionError()
  }

}
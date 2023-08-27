import axios from 'axios';
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from '../utils/constants';

export async function createPreferenceMP(items, direccionCliente,tipoPago, tipoEntrega, notaPedido,id_usuario){
  try {
    const response = await axios.post(`${SERVER_HOST}/create_preference`, {
      items: items,
      address: direccionCliente,
      extra: {
        tipoPago: tipoPago,
        tipoEntrega: tipoEntrega,
        notaPedido: notaPedido,
        user_id: id_usuario
      }
    });
    console.log('response preference', response);
    return response
  } catch (error) {
    console.log(error);
    throw new ConnectionError()
  }

}
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
    },{
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response
  } catch (error) {
    console.error('Error al realizar la solicitud a Mercado Pago:', error);
    throw new ConnectionError()
  }

}
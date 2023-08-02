import axios from 'axios';
import { ConnectionError } from '../../../Backend/utils/error';

export async function createPreferenceMP(items, nombreCliente, direccionCliente,tipoPago, tipoEntrega, notaPedido){
  try {
    const response = await axios.post("http://localhost:4000/create_preference", {
      items: items,
      name: nombreCliente,
      address: direccionCliente,
      extra: {
        tipoPago: tipoPago,
        tipoEntrega: tipoEntrega,
        notaPedido: notaPedido
      }
    });
    return response
  } catch (error) {
    throw new ConnectionError()
  }

}
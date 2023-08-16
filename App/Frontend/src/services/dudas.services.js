import axios from "axios";
import { ConnectionError } from '../utils/error';
const urlResource = "http://localhost:4000/dudas";

export async function getDoubts(){
  try {
    const resp = await axios.get(urlResource)
    return resp.data
  } catch (error) {
    throw new ConnectionError(error.message)
  }
}
export  async function Buscar(estado) {
    const resp = await axios.get(urlResource, {
      params: { estado },
    });
    return resp.data;
  }

export  async function addDoubt(duda){
    if (!duda.id) {
      try {
        return await axios.post(urlResource, duda);
        
      } catch (error) {
          throw new ConnectionError(error.message)
      }
      } else {
        try {
        return await axios.put(urlResource + "/" + duda.id, duda);
          
        } catch (error) {
          return error
        }
      }
    
}


import axios from "axios";
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from "../utils/constants";

const urlResource =`${SERVER_HOST}/api/dudas`

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


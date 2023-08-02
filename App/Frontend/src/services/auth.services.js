import axios from 'axios'
import { ConnectionError, MailError, ServerError } from '../../../Backend/utils/error';
export const isAuth = async () => {
  try {
    const token = document.cookie.replace('token=', '');
    const response = await axios.post("http://localhost:4000/token", {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.log("Error al verificar la autenticación");

  }
};


export async function existsMail(email) {
  try {
    const response = await axios.post("http://localhost:4000/email", { email });
    return response;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new MailError();
    }
    throw new ConnectionError();
  }
}




export async function login(data){
  try {
    const response = await axios.post('http://localhost:4000/api/login',data)
    console.log(response);
    if(response.data){
      return response.data
    }
  } catch (error) {
      
      if(error.code == "ERR_NETWORK") return {error: "Error en el servidor, intente nuevamente mas tarde"}
    if(error.response.data){
      return error.response
    }



  }
}

export async function signup(data){
  try {
    const response = await axios.post('http://localhost:4000/signup',data)
    return response
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new ServerError();
    }
    throw new ConnectionError();
  }
}
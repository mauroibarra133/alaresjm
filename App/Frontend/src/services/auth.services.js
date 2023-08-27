import axios from 'axios'
import { AuthError, ConnectionError, FillError, LoginMailError, MailError, PasswordError, ServerError } from '../utils/error';
import { SERVER_HOST } from '../utils/constants';

export const isAuth = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/api/token`,{ withCredentials: true
    });
    return response;
  } catch (error) {
    if(error.response){
      if(error.response.data.type == 'auth'){
        throw new AuthError()
      } 
    }else{
      throw new ConnectionError()
    }
  }
};


export async function existsMail(email) {
  try {
    const response = await axios.post(`${SERVER_HOST}/api/email`, { email });
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
    const response = await axios.post(`${SERVER_HOST}/api/login`,data,{withCredentials: true})
      return response.data
  } catch (error) {
    if(error.response){
      if(error.response.data.type == 'password') throw new PasswordError()
      if(error.response.data.type == 'mail') throw new LoginMailError()
      if(error.response.data.type == 'fill') throw new FillError()
    }
    throw new ConnectionError();

    }
}

export async function signup(data){
  try {
    const response = await axios.post(`${SERVER_HOST}/api/signup`,data)
    return response
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new ServerError();
    }
    throw new ConnectionError();
  }
}
export async function sendPasswordLink(data){
  const email = data.email
  try {
        const response = await axios.post(`${SERVER_HOST}/api/send-password-link`,{email});
        return response
      } catch (error) {
        if (error.response && error.response.status === 400) {
          throw new ServerError();
        }
        throw new ConnectionError();
      }
    }

    export async function changePassword(id, token, newPassword) {
      try {
        const response = await axios.put(`${SERVER_HOST}/api/reset-password/${id}`, { token, newPassword });
        console.log(response);
        // Manejar la respuesta según tus necesidades
      } catch (error) {
        console.error(error);
        // Manejar errores aquí
      }
    }

export async function getData(id){
  try {
  const response = await axios.get(`${SERVER_HOST}/api/usuarios/:${id}`)
    return response
  } catch (error) {
    console.log(error);
  }

}
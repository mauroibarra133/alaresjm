import axios from 'axios'
import { AuthError, ConnectionError, FillError, LoginMailError, MailError, PasswordError, ServerError } from '../utils/error';
import { SERVER_HOST } from '../utils/constants';

const urlSource = `${SERVER_HOST}/api`


export const isAuth = async () => {
  try {
    const response = await axios.get(`${urlSource}/token`,{ withCredentials: true
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
    const response = await axios.post(`${urlSource}/email`, { email });
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
    const response = await axios.post(`${urlSource}/login`,data,{withCredentials: true})
      return response.data
  } catch (error) {
    console.log(error);
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
    const response = await axios.post(`${urlSource}/signup`,data)
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
        const response = await axios.post(`${urlSource}/send-password-link`,{email});
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
        await axios.put(`${urlSource}/reset-password/${id}`, { token, newPassword });
        // Manejar la respuesta según tus necesidades
      } catch (error) {
        console.error(error);
        // Manejar errores aquí
      }
    }

export async function getData(id){
  try {
  const response = await axios.get(`${urlSource}/usuarios/:${id}`)
    return response
  } catch (error) {
    console.log(error);
  }

}
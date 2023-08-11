import axios from 'axios'
import { AuthError, ConnectionError, FillError, LoginMailError, MailError, PasswordError, ServerError } from '../../../Backend/utils/error';
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
    const response = await axios.post('http://localhost:4000/signup',data)
    return response
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new ServerError();
    }
    throw new ConnectionError();
  }
}
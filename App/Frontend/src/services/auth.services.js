import axios from 'axios'

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

export async function existsMail(email){
  try {
    const response = await axios.post("http://localhost:4000/email",
      {email: email}
      )
  return response.data

  } catch (error) {
    return false
  }

}
export async function login(data){
  const response = await axios.post('http://localhost:4000/api/login',data)
  return response
}

export async function signup(data){
  const response = await axios.post('http://localhost:4000/signup',data)
  return response
}
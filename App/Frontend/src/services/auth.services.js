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
    console.log(error.response.data.msg);
    throw new Error("Error al verificar la autenticación");
  }
};

export async function existsMail(email){
  try {
    const response = await axios.post("http://localhost:4000/email",
      {email: email}
      )
  return response.data

  } catch (error) {
    console.log(error);
    return false
  }

}
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

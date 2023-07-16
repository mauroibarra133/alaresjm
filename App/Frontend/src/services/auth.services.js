import axios from 'axios'

export const getUsuarioLogueado = async () => {
    const token = document.cookie.replace('token=','')
    const response  = await axios.post("http://localhost:4000/token",{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    });
    console.log(response.data.msg);
    return response
  };

export const isAuth = async () =>{
    const token = document.cookie.replace('token=','')
    const response  = await axios.post("http://localhost:4000/token",{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
        
    });
    return response
}
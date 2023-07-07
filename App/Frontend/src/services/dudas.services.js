import axios from "axios";
const urlResource = "http://localhost:4000/dudas";


export  async function Buscar(estado) {
    const resp = await axios.get(urlResource, {
      params: { estado },
    });
    return resp.data;
  }

export  async function AgregarDuda(duda){
    console.log(duda);
    if (!duda.id) {
        await axios.post(urlResource, duda);
      } else {
        await axios.put(urlResource + "/" + duda.id, duda);
      }
    
}
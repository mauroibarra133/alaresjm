import axios from "axios";
const urlResource = "http://localhost:4000/dudas";

export async function getDudas(){
    const resp = await axios.get(urlResource)
    console.log(resp.data);
    return resp.data
}
export  async function Buscar(estado) {
    const resp = await axios.get(urlResource, {
      params: { estado },
    });
    return resp.data;
  }

export  async function AgregarDuda(duda){
    if (!duda.id) {
        return await axios.post(urlResource, duda);
      } else {
        return await axios.put(urlResource + "/" + duda.id, duda);
      }
    
}


import axios from "axios";

const urlSource = 'http://localhost:4000/productos'


export  async function getProducts(categoria) {
    const resp = await axios.get(urlSource, {
      params: { categoria },
    });
    return resp.data;
  }

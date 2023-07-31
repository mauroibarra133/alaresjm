import axios from "axios";

const urlSource = 'http://localhost:4000/productos'


export  async function getProducts(categoria) {
    const resp = await axios.get(urlSource, {
      params: { categoria },
    });
    return resp.data;
  }

  export async function updateProduct(id, updatedData) {
    try {
        const response = await axios.put(`http://localhost:4000/productos/${id}`, updatedData);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}

export async function addProduct(data) {
  try {
      const response = await axios.post(`http://localhost:4000/productos/`, data);
      console.log(response);
      return response;
  } catch (error) {
      return error;
  }
}

export async function deleteProduct(id) {
  try {
      const response = await axios.delete(`http://localhost:4000/productos/${id}`);
      return response;
  } catch (error) {
      return error;
  }
}
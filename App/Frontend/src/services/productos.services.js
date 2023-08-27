import axios from "axios";
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from "../utils/constants";

const urlSource = `${SERVER_HOST}/api/productos`


export  async function getProducts(categoria) {
  try {
    const resp = await axios.get(urlSource, {
      params: { categoria },
    });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    throw new ConnectionError()
  }

  }

  export async function updateProduct(id, updatedData) {
    try {
        const response = await axios.put(`${urlSource}/${id}`, updatedData);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}

export async function addProduct(data) {
  try {
      const response = await axios.post(urlSource, data);
      console.log(response);
      return response;
  } catch (error) {
      return error;
  }
}

export async function deleteProduct(id) {
  try {
      const response = await axios.delete(`${urlSource}/${id}`);
      return response;
  } catch (error) {
      return error;
  }
}
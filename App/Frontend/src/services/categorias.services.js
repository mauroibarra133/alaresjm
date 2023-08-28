import axios from "axios";
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from "../utils/constants";

const urlSource =`${SERVER_HOST}/api/categorias`

export async function getCategories(){
    try {
        const resp = await axios.get(urlSource);
        return resp.data
    } catch (error) {
        throw new ConnectionError()
    }

        
}

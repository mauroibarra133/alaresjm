import axios from "axios";
import { ConnectionError } from '../utils/error';

const urlSource = 'http://localhost:4000/api/categorias'

export async function getCategories(){
    try {
        const resp = await axios.get(urlSource);
        console.log(resp.data);
        return resp.data
    } catch (error) {
        throw new ConnectionError()
    }

        
}

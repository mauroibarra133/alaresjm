import axios from "axios";

const url = 'http://localhost/categorias'

export default async function getCategories(){
    const resp = await axios.get(url);
    return resp.data
        
}
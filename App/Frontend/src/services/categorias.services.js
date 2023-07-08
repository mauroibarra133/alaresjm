import axios from "axios";

const urlSource = 'http://localhost:4000/categorias'

export async function getCategories(){
    const resp = await axios.get(urlSource);
    return resp.data
        
}

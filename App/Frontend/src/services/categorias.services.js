import axios from "axios";

const urlSource = 'http://localhost:4000/categorias'

export async function getCategories(){
    try {
        const resp = await axios.get(urlSource);
        return resp.data
    } catch (error) {
        return error
    }

        
}

import axios from 'axios'
export async function getRanking(){
    try {
        const response = await axios.get("http://localhost:4000/ranking")
        console.log(response);
        return response
    } catch (error) {
        console.log(error);
    }
}
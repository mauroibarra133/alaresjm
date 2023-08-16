import axios from 'axios'
import { ConnectionError } from '../utils/error';
export async function getRanking(){
    try {
        const response = await axios.get("http://localhost:4000/ranking")
        return response
    } catch (error) {
        throw new ConnectionError()
    }
}
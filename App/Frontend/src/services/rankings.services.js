import axios from 'axios'
import { ConnectionError } from '../utils/error';
import { SERVER_HOST } from '../utils/constants';

export async function getRanking(){
    try {
        const response = await axios.get(`${SERVER_HOST}/api/ranking`)
        console.log(response);
        return response
    } catch (error) {
        throw new ConnectionError()
    }
}
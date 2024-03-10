import axios from 'axios';
const configResponse = await axios.get('/api/config');
const server_host = configResponse.data.serverHost || 'http://localhost:4000';

export default server_host;
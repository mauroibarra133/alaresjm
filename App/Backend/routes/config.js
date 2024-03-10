import {Router} from 'express'
import config from '../config';

const router = Router() //Creo el router
app.get('/api/config', (req, res) => {
  const configServer = {
    serverHost: config.server_host || 'http://localhost:4000',
  };

  res.json(configServer);
});
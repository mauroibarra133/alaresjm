// Import required modules
import express from 'express';
import app from '../app';

// Configuration
const port = app.get('port');

// Create an instance of Express
const server = express();

// Define routes
server.get('/', (req, res) => {
  res.send('Backend Iniciado');
});

// Start the server
server.listen(port, () => {
  console.log(`Sitio escuchando en el puerto ${port}`);
});

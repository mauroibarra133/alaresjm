import { Pool } from 'pg'; // Importa la biblioteca pg

import config from '../config';


const pool = new Pool({
    user: 'alares',
    host: config.dbServer,
    database: 'alares',
    password: config.dbPassword,
    port: config.dbPort,
    ssl: true,
});


async function connectWithRetry() {
    let client;
    try {
        client = await pool.connect();
        console.log('Conexión exitosa a PostgreSQL');
        return client;
    } catch (error) {
        console.error('Error en la conexión a PostgreSQL:', error);
        console.log('Reintentando conexión a PostgreSQL (intento ' + retryCount + ')...');
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return connectWithRetry(retryCount + 1); // Incrementa el número de intentos
    }
    
}

export async function getConnection() {
    return connectWithRetry();
}

import { Pool } from 'pg'; // Importa la biblioteca pg

import config from '../config';


const pool = new Pool({
    user: 'alares',
    host: config.dbServer,
    database: 'alares',
    password: config.dbPassword,
    port: config.dbPort,
    ssl: true,
    max: 10, 
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000,
});


async function connectWithRetry() {
    let client;
    try {
        client = await pool.connect();
        console.log('Conexión exitosa a PostgreSQL');
        return client;
    } catch (error) {
        console.error('Error en la conexión a PostgreSQL:', error);
        await new Promise((resolve) => setTimeout(resolve, 5000)); 
        console.log('Reintentando conexión a PostgreSQL...');
        return connectWithRetry(); 
    }
}

export async function getConnection() {
    return connectWithRetry();
}

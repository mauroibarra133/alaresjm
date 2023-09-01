import { Pool } from 'pg'; // Importa la biblioteca pg

import config from '../config';


const pool = new Pool({
    user: 'alares',
    host: config.dbServer,
    database: 'alares',
    password: config.dbPassword,
    port: config.dbPort, // Puerto predeterminado de PostgreSQL
    ssl: true // Habilita SSL/TLS
});
  

export async function getConnection() {
    try {
        const client = await pool.connect();
        return client; // Retorna el cliente para que otros archivos puedan usarlo para hacer consultas.
    } catch (error) {
        console.error(error);
        throw error;
    }
}

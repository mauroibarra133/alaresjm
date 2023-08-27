import { Pool } from 'pg'; // Importa la biblioteca pg

import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    host: config.dbServer,
    database: config.dbDataBase,
    port: config.dbPort, // Añade el puerto si es necesario
    ssl: false
};

const pool = new Pool({connectionString: 'postgres://alares:UC5hhl4jJHavq3qQWi8OrLvIs0VMNsSD@dpg-cjlb6qnv9s6c73c4hptg-a/alares'});

export async function getConnection() {
    try {
        const client = await pool.connect();
        return client; // Retorna el cliente para que otros archivos puedan usarlo para hacer consultas.
    } catch (error) {
        console.error(error);
        throw error;
    }
}

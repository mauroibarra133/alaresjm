import sql from 'mssql'
import config from '../config'


const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }

}

export async function getConnection(){ // la exporto para que otros archivos la usen
    try {
        const pool = await sql.connect(dbSettings); //Se conecta en base a los parametros pasados
        return pool // para que otros archivos usen el pool para hacer la consulta,
    } catch (error) {
        console.log(error);
    }

}

export {sql}
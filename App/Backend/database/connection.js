import sql from 'mssql'

const dbSettings = {
    user: 'mauroibarra',
    password: '12345',
    server: 'localhost',
    database: 'alares',
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
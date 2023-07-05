import { config } from "dotenv" 

config() //Nos permite leer las varaibles de entorno en nuestro computador



export default { 
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDataBase: process.env.DB_DATABASE || ''
}
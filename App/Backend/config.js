import { config } from "dotenv" 

config() //Nos permite leer las varaibles de entorno en nuestro computador



export default { 
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDataBase: process.env.DB_DATABASE || '',
    mp_public_token: process.env.PUBLIC_TOKEN_MP || '',
    mp_access_token: process.env.ACCESS_TOKEN_MP || '',
    secret_token: process.env.ACCESS_TOKEN || '',
    encrypt_code: process.env.ENCRYPT_CODE || '',
    st_changepassword: process.env.ST_CHANGEPASSWORD || '',
    email_password: process.env.EMAIL_PASSWORD || ''
}
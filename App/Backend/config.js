import { config } from "dotenv" 

config() //Nos permite leer las varaibles de entorno en nuestro computador



export default{
    port: process.env.PORT || 3000
}
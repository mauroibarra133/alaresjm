import express  from "express";
import config from "./config";
import productosRouter from './routes/productos'
import cors from 'cors'


const app = express()

//settings
let port;
port = config.port
app.set('port', port)

//Middlewares
app.use(express.json());  // Para que nuestro servidor pueda aceptar datos en json (debemos configurar eso)
app.use(express.urlencoded({extended: false}))  // Para que pueda aceptar datos desde forms HTML

app.use(productosRouter) //Uso la ruta de productos

export default app
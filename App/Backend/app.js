import express  from "express";
import config from "./config";
import cors from 'cors'
import productosRouter from './routes/productos'
import dudasRouter from './routes/dudas'
import categoriasRouter from './routes/categorias'
import mercadopagoRouter from './routes/mercadoPago'

const app = express()


//settings
let port;
port = config.port
app.set('port', port)

//Middlewares
app.use(express.json());  // Para que nuestro servidor pueda aceptar datos en json (debemos configurar eso)
app.use(express.urlencoded({extended: false}))  // Para que pueda aceptar datos desde forms HTML
app.use(cors());

app.use(productosRouter) 
app.use(dudasRouter) 
app.use(categoriasRouter)
app.use(mercadopagoRouter)

export default app
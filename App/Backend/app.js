import express  from "express";
import config from "./config";
import productosRouter from './routes/productos'
import dudasRouter from './routes/dudas'
import cors from 'cors'
import categoriasRouter from './routes/categorias'

const app = express()

app.use(cors());

//settings
let port;
port = config.port
app.set('port', port)

//Middlewares
app.use(express.json());  // Para que nuestro servidor pueda aceptar datos en json (debemos configurar eso)
app.use(express.urlencoded({extended: false}))  // Para que pueda aceptar datos desde forms HTML

app.use(productosRouter) //Uso la ruta de productos
app.use(dudasRouter) //Uso la ruta de dudas
app.use(categoriasRouter) //Uso la ruta de dudas

export default app
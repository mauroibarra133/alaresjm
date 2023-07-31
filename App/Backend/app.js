import express  from "express";
import http from 'http'
import { Server as SocketServer } from "socket.io";
import config from "./config";
import cors from 'cors'
import productosRouter from './routes/productos'
import dudasRouter from './routes/dudas'
import categoriasRouter from './routes/categorias'
import pedidosRouter from './routes/pedidos'
import loginRouter from './routes/login'
import usuariosRouter from './routes/usuarios'
import reservasRouter from './routes/reservas'
import rankingRouter from './routes/ranking'
import mercadopagoRouter from './routes/mercadoPago'

const app = express()
const httpServer = http.createServer(app)
const io = new SocketServer(httpServer)
httpServer.listen(4000)

app.set('socketio', io);// aqui asignas el socket global
//socket
io.on('connection', (socket)=>{
    console.log('conectado', socket.id);

    socket.on('newOrder',(data)=> {
        console.log(data)
        io.emit('adminOrder',data)
    })
    socket.on('orderUpdated',(data)=> {
        console.log(data)
        io.emit('orderUpdated',data)
    })
})


//Middlewares
app.use(express.json());  // Para que nuestro servidor pueda aceptar datos en json (debemos configurar eso)
app.use(express.urlencoded({extended: false}))  // Para que pueda aceptar datos desde forms HTML
app.use(cors());

app.use(productosRouter) 
app.use(dudasRouter) 
app.use(categoriasRouter)
app.use(mercadopagoRouter)
app.use(pedidosRouter)
app.use(loginRouter)
app.use(usuariosRouter)
app.use(reservasRouter)
app.use(rankingRouter)

export default app
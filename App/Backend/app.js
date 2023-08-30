import express from 'express';
import http from 'http'
import { Server as SocketServer } from "socket.io";
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
import cookieParser from "cookie-parser";
import compression from 'compression'
import path from 'path';


const app = express()
const httpServer = http.createServer(app)
const io = new SocketServer(httpServer)
httpServer.listen(4000)

//socket
io.on('connection', (socket) => {
    console.log('conectado', socket.id);

    socket.on('newOrder', (data) => {
        console.log(data)
        io.emit('adminOrder', data)
    })
    socket.on('orderUpdated', (data) => {
        console.log(data)
        io.emit('orderUpdated', data)
    })
})

app.set('socketio', io); // aquí asignas el socket global

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    origin: ['http://localhost:5173', 'https://alaresjm.onrender.com'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(compression());
app.use(cookieParser())
app.use(productosRouter)
app.use(dudasRouter)
app.use(categoriasRouter)
app.use(mercadopagoRouter)
app.use(pedidosRouter)
app.use(loginRouter)
app.use(usuariosRouter)
app.use(reservasRouter)
app.use(rankingRouter)
app.use(express.static(path.join(__dirname, './dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
  });
export default app;

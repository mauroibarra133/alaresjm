import {Router} from 'express'
import {addReserva} from '../controllers/reservas.controller'
const router = Router() //Creo el router


router.post('/reservas',addReserva); //Creo las funciones en un archivo controlador

export default router
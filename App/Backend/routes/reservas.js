import {Router} from 'express'
import {addReserva, getReservas, deleteReserva} from '../controllers/reservas.controller'
const router = Router() //Creo el router


router.post('/reservas',addReserva); 
router.get('/reservas',getReservas); 
router.delete('/reservas/:id',deleteReserva); 

export default router
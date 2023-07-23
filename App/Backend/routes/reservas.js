import {Router} from 'express'
import {addReserva, getReservas, deleteReserva, updateReserva} from '../controllers/reservas.controller'
const router = Router() //Creo el router


router.get('/reservas',getReservas); 
router.post('/reservas',addReserva); 
router.delete('/reservas/:id',deleteReserva); 
router.put('/reservas/:id',updateReserva); 

export default router
import {Router} from 'express'
import {addReserva, getReservas, deleteReserva, updateReserva} from '../controllers/reservas.controller'
const router = Router() //Creo el router


router.get('/api/reservas',getReservas); 
router.post('/api/reservas',addReserva); 
router.delete('/api/reservas/:id',deleteReserva); 
router.put('/api/reservas/:id',updateReserva); 

export default router
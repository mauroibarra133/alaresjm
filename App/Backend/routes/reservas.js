import {Router} from 'express'
import {addReserva, getReservas} from '../controllers/reservas.controller'
const router = Router() //Creo el router


router.post('/reservas',addReserva); 
router.get('/reservas',getReservas); 

export default router
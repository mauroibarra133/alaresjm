import {Router} from 'express'
const router = Router() //Creo el router
import { addOrderEft } from '../controllers/pedidos.controller';

router.post('/pedidos/',addOrderEft);

export default router;
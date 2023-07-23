import {Router} from 'express'
const router = Router() //Creo el router
import { addOrderEft,getPedidos } from '../controllers/pedidos.controller';

router.post('/pedidos/',addOrderEft);
router.get('/pedidos/',getPedidos);

export default router;
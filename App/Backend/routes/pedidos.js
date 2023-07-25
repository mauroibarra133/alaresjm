import {Router} from 'express'
const router = Router() //Creo el router
import { addOrderEft,getPedidos, updatePedidoOnServer} from '../controllers/pedidos.controller';

router.post('/pedidos/',addOrderEft);
router.get('/pedidos/',getPedidos);
router.put('/pedidos/',updatePedidoOnServer);

export default router;
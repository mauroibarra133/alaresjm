import {Router} from 'express'
const router = Router() //Creo el router
import { addOrderEft,getPedidos, updatePedidoOnServer} from '../controllers/pedidos.controller';

router.post('/api/pedidos/',addOrderEft);
router.get('/api/pedidos/',getPedidos);
router.put('/api/pedidos/',updatePedidoOnServer);

export default router;
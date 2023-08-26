import {Router} from 'express'
import {getDudas, addDuda, getDudaById, deleteDudaById, updateDudaById} from '../controllers/dudas.controller'
const router = Router() //Creo el router


router.get('/api/dudas',getDudas); //Creo las funciones en un archivo controlador
router.get('/api/dudas/:id',getDudaById);

router.post('/api/dudas/',addDuda);
router.delete('/api/dudas/:id',deleteDudaById);
router.put('/api/dudas/:id',updateDudaById)


export default router //Lo export para que la app lo use
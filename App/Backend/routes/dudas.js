import {Router} from 'express'
import {getDudas, addDuda, getDudaById, deleteDudaById, updateDudaById} from '../controllers/dudas.controller'
const router = Router() //Creo el router


router.get('/dudas',getDudas); //Creo las funciones en un archivo controlador
router.get('/dudas/:id',getDudaById);

router.post('/dudas/',addDuda);
router.delete('/dudas/:id',deleteDudaById);
router.put('/dudas/:id',updateDudaById)


export default router //Lo export para que la app lo use
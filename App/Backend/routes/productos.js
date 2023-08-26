import {Router} from 'express'
const router = Router() //Creo el router
import {getProducts, addProduct, getProductById, deleteProductById, updateProductById} from '../controllers/products.controller'


router.get('/api/productos',getProducts); //Creo las funciones en un archivo controlador
router.get('/api/productos/:id',getProductById);

router.post('/api/productos/',addProduct);
router.delete('/api/productos/:id',deleteProductById);
router.put('/api/productos/:id',updateProductById)


export default router //Lo export para que la app lo use
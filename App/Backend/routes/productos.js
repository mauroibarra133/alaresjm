import {Router} from 'express'
const router = Router() //Creo el router
import {getProducts, addProduct, getProductById, deleteProductById, updateProductById} from '../controllers/products.controller'


router.get('/productos',getProducts); //Creo las funciones en un archivo controlador
router.get('/productos/:id',getProductById);

router.post('/productos/',addProduct);
router.delete('/productos/:id',deleteProductById);
router.put('/productos/:id',updateProductById)


export default router //Lo export para que la app lo use
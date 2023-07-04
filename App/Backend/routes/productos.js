import {Router} from 'express'
import {getProducts, addProduct, getProductById, deleteProductById, getTotalProducts} from '../controllers/products.controller'
const router = Router() //Creo el router


router.get('/productos',getProducts); //Creo las funciones en un archivo controlador
router.get('/productos/:id',getProductById);
// router.get('/productos/count',getTotalProducts);

router.delete('/productos/:id',deleteProductById);
// router.put('/productos',)


export default router //Lo export para que la app lo use
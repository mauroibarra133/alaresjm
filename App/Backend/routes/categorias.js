import {Router} from 'express'
import {getCategories} from '../controllers/categorias.controller'
const router = Router() //Creo el router


router.get('/categorias',getCategories); //Creo las funciones en un archivo controlador

export default router
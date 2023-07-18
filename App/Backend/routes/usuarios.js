import {Router} from 'express'
const router = Router() //Creo el router
import {addUsuario} from '../controllers/usuarios.js'


router.post('/signup',addUsuario);


export default router //Lo export para que la app lo use
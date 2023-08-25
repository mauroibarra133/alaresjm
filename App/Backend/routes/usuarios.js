import {Router} from 'express'
const router = Router() //Creo el router
import {addUsuario,sendPasswordLink, getLink,changePassword} from '../controllers/usuarios.js'


router.post('/signup',addUsuario);
router.post('/send-password-link',sendPasswordLink);
// router.get('/reset-password/:id/:token',getLink);
// router.post('/reset-password/:id/:token',changePassword);


export default router //Lo export para que la app lo use
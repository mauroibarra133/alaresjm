import {Router} from 'express'
const router = Router() //Creo el router
import {addUsuario,sendPasswordLink, getLink,changePassword,getUserData} from '../controllers/usuarios.js'


router.post('/api/signup',addUsuario);
router.post('/api/send-password-link',sendPasswordLink);
router.get('/api/reset-password/:id/:token',getLink)
router.put('/api/reset-password/:id',changePassword)
router.get('/api/usuarios/:id',getUserData)


export default router //Lo export para que la app lo use
import {Router} from 'express'
import {getRanking} from '../controllers/ranking.controller'
const router = Router() //Creo el router

router.get('/ranking',getRanking)

export default router;
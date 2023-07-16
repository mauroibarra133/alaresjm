import {Router} from 'express'
const router = Router() //Creo el router
import { login } from '../controllers/login';
import jwt from 'jsonwebtoken'
import config from '../config';


router.post('/api/login/',login);

router.post('/prueba/',(req,res)=>{
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(403).json({ msg: "No autorizado" });
    }
  
    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token,config.secret_token, (err,data)=>{
        if (err){
            res.status(403).json({msg: "No autorizado"})
        }else{
            res.status(200).json({msg: "Exito", data})
        }
    })
})
export default router;
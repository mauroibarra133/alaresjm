import {Router} from 'express'
const router = Router() //Creo el router
import { login,existsMail } from '../controllers/login';
import jwt from 'jsonwebtoken'
import config from '../config';


router.post('/api/login/',login);

router.post('/token/',(req,res)=>{
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(403).json({ msg: "No autorizado" });
    }
  
    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token,config.secret_token, (err,data)=>{
        if (err){
            res.status(403).json({msg: "No autorizado", data: data})
        }else{
            // console.log(data);
            res.status(200).json({msg: "Exito", data})
        }
    })
})

router.post('/email',existsMail)



export default router;
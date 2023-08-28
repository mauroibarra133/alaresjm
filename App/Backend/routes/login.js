import {Router} from 'express'
const router = Router() //Creo el router
import { login,existsMail } from '../controllers/login';
import jwt from 'jsonwebtoken'
import config from '../config';


router.post('/api/login/',login);

router.get('/api/token/',(req,res)=>{
    const token = req.cookies.tokenJWT
    jwt.verify(token,config.secret_token, (err,data)=>{
        if (err){
            res.status(403).json({msg: "No autorizado",type: "auth", data: data})
        }else{
            res.status(200).json({msg: "Exito", data: data})
        }
    })
})

router.post('/api/email',existsMail)


router.get('/api/logout', (req, res) => {
    const token = req.cookies.tokenJWT;
  
    res.cookie('tokenJWT', token, {
      expires: new Date(0),
      httpOnly: true,
    });
  
    res.redirect('/');
  });
  
export default router;
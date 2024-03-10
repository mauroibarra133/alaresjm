import {queries,getConnection} from '../database'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export async function login (req,res){
    const {email,password} = req.body
    //Check if data it was send
    if(!email || !password){
        res.status(400).json({type: 'fill'})

    }else{
        //Check if mail exists
        const data = await getMail(email)
        if(!data[0]){
            res.status(400).json({type: 'mail'})
        }
        else{
            const userData = data[0]
            //Check if the info is correct
            if(password === (userData.contraseña).toString()){
                const token = jwt.sign({    
                    email: userData.email,
                    nombre: userData.nombre,
                    apellido: userData.apellido,
                    puntos: userData.puntos,
                    user_id: userData.id,
                    rol: userData.rol
                },config.secret_token, {expiresIn: "60m"})
                res.cookie('tokenJWT',token,{
                    httpOnly: true,
                    maxAge: 8*60*60*1000, // 8 horas
                    sameSite: "lax"
                })
                res.status(200).json({msg: 'Login excelent', status:200})
            }else{
                res.status(400).json({type: 'password'})
            }
        }
    }
 
}


export async function getMail(email) {
    const pool = await getConnection();

    try {
        const result = await pool.query(queries.Login.getUserData, [config.encrypt_code.toString(),email]);
        return result.rows;
    } catch (error) {
        throw error;
    }finally{
        pool.release()
    }
}


export async function existsMail(req, res) {
    const { email } = req.body;
    const pool = await getConnection();

    try {
        const result = await pool.query(queries.Login.getUserData, [config.encrypt_code,email]);

        if (result.rows.length > 0) {
            res.status(400).json({ msg: 'La cuenta ya está asociada a otra persona' });
        } else {
            res.status(200).json({ msg: 'El correo está disponible' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Error en el servidor, inténtelo más tarde' });
    }finally{
        pool.release()
    }
}
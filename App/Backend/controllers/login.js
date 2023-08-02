import {sql,queries,getConnection} from '../database'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export async function login (req,res){
    const {email,password} = req.body
    //Check if data it was send
    if(!email || !password){
         res.status(400).json( {msg:'No han sido ingresados todos los datos'})
    }else{
        //Check if mail exists
        const data = await getMail(email)
        if(!data.recordset[0]){
             res.status(400).json({msg:'El mail ingresado no existe'})
        }
        else{
            const userData = data.recordset[0]
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
                res.status(200).json({msg: 'Login excelent',token: token})
            }else{
                res.status(400).json({ msg: 'La contraseña no es correcta'})
            }
        }
    }
 
}

async function getMail(email){
    const pool = await getConnection()
    const result = await pool.request()
    .input('email',sql.Text,email)
    .query(queries.Login.getUserData)
    
    return result
}

export async function existsMail(req,res){
    const {email} = req.body

    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('email',sql.Text,email)
        .query(queries.Login.getUserData)
        if(result.recordset.length > 0){
            res.status(400).json({msg: 'La cuenta ya esta asociada a otra persona'})
        }else{
            res.status(200).json({msg: 'El mail esta disponible'})

        }

    } catch (error) {
        res.status(500).json({msg: 'Error en el servidor, intente mas tarde'})

    }


}
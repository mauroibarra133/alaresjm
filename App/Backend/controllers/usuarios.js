import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries
import config from '../config'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

//email config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alaresbar@gmail.com',
        pass: config.email_password
    }
})

export async function addUsuario(req,res){
    let {regName, regSurname,regEmail,regPassword} = req.body
    try {
        const pool = await getConnection()
        await pool.request()
        .input('nombre',sql.VarChar,regName)
        .input('apellido',sql.VarChar,regSurname)
        .input('email',sql.Text,regEmail)
        .input('password',sql.VarChar,regPassword)
        .input('rol',sql.VarChar,'User')
        .input('puntos',sql.Int,0)
        .query(queries.Usuarios.addUser)
        res.status(200).json({msg: "Usuario creado correctamente"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "El usuario no se ha creado correctamente"})
    }
    
}   


export async function getLink(req,res){
    const {id,token} = req.params
    console.log(id);
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('id',sql.Int,id)
        .query(queries.Login.getUserDataByID)
        const dataUser = result.recordset[0] || {}
        res.status(201).json({id: dataUser.id})
    } catch (error) {
        console.log(error);
        res.send('Not Verified')
    }
}

export async function changePassword(req, res) {
    const { id } = req.params;
    let { newPassword,token } = req.body;
    token = token.replaceAll('-','.')

    console.log(id,newPassword,token);


    try {
        //Verificar el id con el token que sean los mismo y no se hayan modificado por url
        const pool = await getConnection();
        const result = await pool
                .request()
                .input('id', sql.Int, id)
                .query(queries.Login.getUserDataByID);
            
            const dataUser = result.recordset[0] || {};
            const secret = config.st_changepassword + dataUser.contraseña;
    
            if (Object.keys(dataUser).length === 0) {
                return res.status(400).json({ msg: 'No se encontró el usuario' });
            }

        //Decodificar el token
        const tokenDecoded = decodeURIComponent(escape(atob(token)));
        console.log('token decoded',tokenDecoded);
        const verifyToken = jwt.verify(tokenDecoded, secret,{algorithms: ['HS256']});
        console.log(verifyToken);

        if(verifyToken.id != id){
            console.log('no son');
            return res.status(400).json({ msg: 'No se encontró el usuario' });
        }

        // //Update password
        const pool2 = await getConnection();
        const result2 = await pool2
            .request()
            .input('id', sql.Int, id)
            .input('password', sql.VarChar, newPassword)
            .query(queries.Login.updateUserByID);
        
            res.status(204).json({msg: 'Contraseña Cambiada correctamente'})
    } catch (error) {
        console.log(error);
    }


}

export async function sendPasswordLink(req,res){
    const {email} = req.body
    if(!email){
        res.status(401).json({status: 'Mail not exist'})
    }
    try {
        //Find user data
        const pool = await getConnection()
                const result = await pool.request()
                .input('email',sql.Text,email)
                .query(queries.Login.getUserData)
                
                const dataUser = result.recordset[0] || {}
                 if(dataUser == {}){
                    res.status(400).json({msg: 'No se encontró el usuario'})
                 }
                 console.log(dataUser);
        //Token generate
        const secret = config.st_changepassword + dataUser.contraseña
        const token = jwt.sign({ email: dataUser.email, id: dataUser.id }, secret, {
            expiresIn: '5m',
            algorithm: 'HS256' 
          });
        
          const tokenModified = btoa(unescape(encodeURIComponent(token)));
        const link = `http://localhost:5173/reset-password/${dataUser.id}/${tokenModified}` //No me lee la url hasta el punto

        const mailOptions = {
            from: "alaresbar@gmail.com",
            to: email,
            subject: "Reestablecimiento de tu contraseña en Alares",
            text: `
            Recientemente solicitó restablecer su contraseña en Alares.
            Para completar este proceso, haga clic en el enlace a continuación:
            Vigencia de 2 minutos: ${link}
            
            Si no solicitó este cambio o no reconoce esta actividad, por favor ignore este mensaje y su contraseña permanecerá sin cambios.
            
            Para garantizar la seguridad de su cuenta, le recomendamos crear una contraseña fuerte que contenga al menos ocho caracteres, una combinación de letras mayúsculas y minúsculas, números y caracteres especiales.
            
            ¡Gracias por utilizar Alares!
            
            Atentamente, todo el equipo de Alares!
            `
        }
        console.log(link);
        
            transporter.sendMail(mailOptions,(error, info)=>{
                if(error){
                    console.log(error);
                    res.status(401).json({msg: 'Email not Send'})
                }else{
                    res.status(201).json({msg: 'Email send Successfully'})

                }
            })
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: 'Invalid User!'})

    }
    res.status(201).json({status: 'Mail founded'})
}
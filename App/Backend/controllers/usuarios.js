import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries
import config from '../config'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

//email config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mauroibarra133@gmail.com',
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

// export async function generateToken(req,res){
//     const {email} = req.body
    
//     try {
//         const pool = await getConnection()
//         const result = await pool.request()
//         .input('email',sql.Text,email)
//         .query(queries.Login.getUserData)
        
//         const dataUser = result.recordset[0] || {}
//          if(dataUser == {}){
//             res.status(400).json({msg: 'No se encontró el usuario'})
//          }
//          const secret = config.st_changepassword + dataUser.contraseña
//          const token =  jwt.sign({email: dataUser.email, id: dataUser.id}, secret,{
//             expiresIn: '5m'
//          })
//         const link = `http://localhost:4000/reset-password/${dataUser.id}/${token}`
//         console.log(link);
//         res.json({password : dataUser.contraseña})
//     } catch (error) {
//         console.log(error);
//     }

        

// }

// export async function getLink(req,res){
//     const {id,token} = req.params
//     try {
//         const pool = await getConnection()
//         const result = await pool.request()
//         .input('id',sql.Int,id)
//         .query(queries.Login.getUserDataByID)
//         const dataUser = result.recordset[0] || {}
//         const secret = config.st_changepassword + dataUser.contraseña
//         const verifyToken = jwt.verify(token, secret)

//         res.render("../templates/index.ejs", {email: verifyToken.email})
//     } catch (error) {
//         res.send('Not Verified')
//     }
// }

// export async function changePassword(req, res) {
//     const { id, token } = req.params;
//     const { password } = req.body;

//     try {
//         const pool = await getConnection();
//         const result = await pool
//             .request()
//             .input('id', sql.Int, id)
//             .query(queries.Login.getUserDataByID);
        
//         const dataUser = result.recordset[0] || {};

//         if (Object.keys(dataUser).length === 0) {
//             return res.status(400).json({ msg: 'No se encontró el usuario' });
//         }

//         const secret = config.st_changepassword + dataUser.contraseña;

//         try {
//             // Verify the token
//             const verifyToken = jwt.verify(token, secret);
            
//             // Update password
//             const pool2 = await getConnection();
//             const result2 = await pool2
//                 .request()
//                 .input('id', sql.Int, id)
//                 .input('password', sql.VarChar, password)
//                 .query(queries.Login.updateUserByID);

//             console.log('Password updated successfully');

//             // See changes
//             const pool3 = await getConnection();
//             const result3 = await pool3
//                 .request()
//                 .input('id', sql.Int, id)
//                 .query(queries.Login.getUserDataByID);

//             // Render the template with 'Verified' status
//             return res.render("../templates/index.ejs", { email: verifyToken.email, status: 'Verified' });
//         } catch (jwtError) {
//             // JWT verification failed
//             console.error('JWT verification failed:', jwtError);
//             return res.render("../templates/index.ejs", { email: verifyToken.email, status: 'Not Verified' });
//         }
//     } catch (error) {
//         // Handle other errors
//         console.error('Error:', error);
//         return res.status(500).json({ msg: 'Internal server error' });
//     }
// }

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
            algorithm: 'HS256' // Utiliza un algoritmo más corto
          });
        
          const tokenModified = token.replaceAll('.','-')
        const link = `http://localhost:5173/reset-password/${dataUser.id}/${tokenModified}` //No me lee la url hasta el punto
        console.log(link);
    } catch (error) {
        console.log(error);
    }
    res.status(201).json({status: 'Mail founded'})
}
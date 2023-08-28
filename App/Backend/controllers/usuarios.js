import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries
import config from '../config'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'


// Configuración de correo electrónico
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alaresbar@gmail.com',
        pass: config.email_password
    }
});

export async function addUsuario(req, res) {
    let { regName, regSurname, regEmail, regPassword } = req.body;
    try {
        const client = await getConnection()
        await client.query(queries.Usuarios.addUser, [
            regName,
            regSurname,
            regEmail,
            'User', // Rol
            0, // Puntos
            regPassword,
            config.encrypt_code
        ]);
        client.release();
        res.status(200).json({ msg: "Usuario creado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "El usuario no se ha creado correctamente" });
    }
}

export async function getUserData(req,res){
    let {id} = req.params
    id = id.substr(1)
    try {
        const client = await getConnection()
        const result = await client.query(queries.Login.getUserDataByID, [config.encrypt_code,id]);
        const dataUser = result.rows[0] || {};
        client.release();
        res.status(201).json({ points: dataUser.puntos});
    } catch (error) {
        console.log(error);
        res.send('Not Found');
    }
}
export async function getLink(req, res) {
    const { id, token } = req.params;
    try {
        const client = await pool.connect();
        const result = await client.query(queries.Login.getUserDataByID, [id]);
        const dataUser = result.rows[0] || {};
        client.release();
        res.status(201).json({ id: dataUser.id });
    } catch (error) {
        console.log(error);
        res.send('Not Verified');
    }
}

export async function changePassword(req, res) {
    const { id } = req.params;
    let { newPassword, token } = req.body;


    try {
        // Verificar el id con el token que sean los mismos y no se hayan modificado por URL
        const client = await getConnection()
        const result = await client.query(queries.Login.getUserDataByID, [config.encrypt_code,id]);
        const dataUser = result.rows[0] || {};

        const secret = config.st_changepassword + dataUser.contraseña;

        if (Object.keys(dataUser).length === 0) {
            return res.status(400).json({ msg: 'No se encontró el usuario' });
        }

        // Decodificar el token
        const tokenDecoded = decodeURIComponent(escape(atob(token)));
        const verifyToken = jwt.verify(tokenDecoded, secret, { algorithms: ['HS256'] });

        if (verifyToken.id != id) {
            console.log('no son');
            return res.status(400).json({ msg: 'No se encontró el usuario' });
        }

        // Actualizar la contraseña
        await client.query(queries.Login.updateUserByID, [newPassword,config.encrypt_code, parseInt(id)]);
        client.release();
        res.status(204).json({ msg: 'Contraseña Cambiada correctamente' });
    } catch (error) {
        console.log(error);
    }
}

export async function sendPasswordLink(req, res) {
    const { email } = req.body;
    if (!email) {
        res.status(401).json({ status: 'Mail not exist' });
    }
    try {
        // Encontrar datos del usuario
        const client = await getConnection()
        const result = await client.query(queries.Login.getUserData, [config.encrypt_code,email]);
        const dataUser = result.rows[0] || {};
        client.release();
        if (Object.keys(dataUser).length === 0) {
            res.status(400).json({ msg: 'No se encontró el usuario' });
            return;
        }

        // Generar token
        const secret = config.st_changepassword + dataUser.contraseña;
        const token = jwt.sign({ email: dataUser.email, id: dataUser.id }, secret, {
            expiresIn: '2m',
            algorithm: 'HS256'
        });

        const tokenModified = btoa(unescape(encodeURIComponent(token)));
        const link = `http://localhost:5173/reset-password/${dataUser.id}/${tokenModified}`; // No me lee la URL hasta el punto

        const mailOptions = {
            from: 'alaresbar@gmail.com',
            to: email,
            subject: 'Reestablecimiento de tu contraseña en Alares',
            text: `
            Recientemente solicitó restablecer su contraseña en Alares.
            Para completar este proceso, haga clic en el enlace a continuación:
            Vigencia de 2 minutos: ${link}

            Si no solicitó este cambio o no reconoce esta actividad, por favor ignore este mensaje y su contraseña permanecerá sin cambios.

            Para garantizar la seguridad de su cuenta, le recomendamos crear una contraseña fuerte que contenga al menos ocho caracteres, una combinación de letras mayúsculas y minúsculas, números y caracteres especiales.

            ¡Gracias por utilizar Alares!

            Atentamente, todo el equipo de Alares!
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(401).json({ msg: 'Email not Send' });
            } else {
                res.status(201).json({ msg: 'Email send Successfully' });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: 'Invalid User!' });
    }
    res.status(201).json({ status: 'Mail founded' });
}

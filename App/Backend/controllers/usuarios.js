import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function addUsuario(req,res){
    let {regName, regSurname,regEmail,regPassword} = req.body
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .input('nombre',sql.VarChar,regName)
        .input('apellido',sql.VarChar,regSurname)
        .input('email',sql.Text,regEmail)
        .input('password',sql.VarChar,regPassword)
        .input('rol',sql.VarChar,'User')
        .input('puntos',sql.Int,0)
        .query(queries.Usuarios.addUser)
        res.status(200).json({msg: "Usuario Creado"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "El usuario no se ha creado correctamente"})
    }
    
}   
import {getConnection, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function getCategories(req,res){
    try {
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
            const result = await pool.request().query(queries.Categorias.getAllCategories) //Hacemos la consulta
            res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
        console.log(error);
    }

}
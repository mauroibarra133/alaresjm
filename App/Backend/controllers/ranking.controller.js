import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries


export async function getRanking(req,res){
    try {
        const pool = await getConnection()
        const result = await pool.request()
        .query(queries.Ranking.getRanking)

        res.status(200).json(result.recordset)
    } catch (error) {
        console.log(error);
    }

}
import {getConnection, queries} from '../database/' //Traigo la conexion de la BD y las queries


export async function getRanking(req, res) {
    const client = await getConnection()
    try {
        const result = await client.query(queries.Ranking.getRanking);
        client.release();
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al obtener el ranking" });
    }finally{
        client.release()
    }
}

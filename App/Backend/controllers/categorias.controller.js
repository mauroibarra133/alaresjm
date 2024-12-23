import {getConnection, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function getCategories(req, res) {
    const client = await getConnection()
    try {
        const result = await client.query(queries.Categorias.getAllCategories); // Ejecuta la consulta

        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ msg: "No se pudo obtener las categorías" });
    }finally{
        client.release(); // Libera la conexión
    }
}

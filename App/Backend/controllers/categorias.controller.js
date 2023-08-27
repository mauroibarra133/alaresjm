import {getConnection, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function getCategories(req, res) {
    try {
        const client = await getConnection()
        const result = await client.query(queries.Categorias.getAllCategories); // Ejecuta la consulta
        client.release(); // Libera la conexión

        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ msg: "No se pudo obtener las categorías" });
    }
}

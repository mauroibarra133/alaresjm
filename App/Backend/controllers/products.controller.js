import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function getProducts(req,res){
    try {
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const result = await pool.request().query(queries.getAllProducts) //Hacemos la consulta
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export async function addProduct(req,res){
    let {nombre, descripcion, precio, id_categoria} = req.body

    if (descripcion == null) descripcion= ''
    if (nombre == null || descripcion == null || precio== null || id_categoria == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try {
        const pool = await getConnection()
        await pool.request()

        .input('nombre',sql.VarChar,nombre)
        .input('descripcion',sql.Text,descripcion)
        .input('precio',sql.Int,precio)
        .input('id_categoria',sql.Int,id_categoria)
        .query(queries.addProduct)

        res.json({nombre,descripcion,precio,id_categoria}); // Porque el pool request solo retorna las filas afectadas
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}   

export async function getProductById(req,res){
    const { id } = req.params;
    const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
    const result = await pool.request()
        .input('id',id)
        .query(queries.getProductById) //Hacemos la consulta
    
    res.send(result.recordset[0])
}

export async function deleteProductById(req,res){
    try {
        const { id } = req.params;
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const result = await pool.request()
            .input('id',id)
            .query(queries.deleteProduct) //Hacemos la consulta
    
        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export async function getTotalProducts(req,res){
    try {
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const result = await pool.request()
            .query(queries.getTotalProducts) //Hacemos la consulta
        res.json(result.recordset)
            res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
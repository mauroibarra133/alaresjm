import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function getProducts(req,res){
    try {
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const filtro = req.query.categoria;

        if(!filtro){
            const result = await pool.request().query(queries.Products.getAllProducts) //Hacemos la consulta
            res.json(result.recordset)
        }else{
            const result = await pool.request()
            .input('id_categoria',sql.Int,filtro)
            .query(queries.Products.getProductsByCategory) //Hacemos la consulta
            res.json(result.recordset)

        }
           
    } catch (error) {
        res.status(500).json({msg: "No se pudo obtener los productos"})
    }

}

export async function addProduct(req,res){
    let {nombre, descripcion, id_categoria} = req.body

    if (descripcion == null) descripcion= ''
    if (nombre == null || descripcion == null || id_categoria == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try {
        const pool = await getConnection()
        await pool.request()

        .input('nombre',sql.VarChar,nombre)
        .input('descripcion',sql.Text,descripcion)
        .input('id_categoria',sql.Int,id_categoria)
        .query(queries.Products.addProduct)

        res.json({nombre,descripcion,id_categoria}); // Porque el pool request solo retorna las filas afectadas
        
    } catch (error) {
        res.status(500).json({msg: "No se pudo agregar el producto"})
    }
    
}   

export async function getProductById(req,res){
    const { id } = req.params;
    try {
            const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
    const result = await pool.request()
        .input('id',id)
        .query(queries.Products.getProductById) //Hacemos la consulta
    
    res.send(result.recordset[0])
    } catch (error) {
        res.status(500).json({msg: "No se pudo obtener el producto de esa categoria"})       
    }

}

export async function deleteProductById(req,res){
    try {
        const { id } = req.params;
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const result = await pool.request()
            .input('id',id)
            .query(queries.Products.deleteProduct) //Hacemos la consulta
    
        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
export async function updateProductById (req,res){
    let {nombre, descripcion, id_categoria} = req.body
    const { id } = req.params;

    if (nombre == null || descripcion == null || id_categoria == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
    const result = await pool.request()
        .input('nombre',sql.VarChar,nombre)
        .input('descripcion',sql.Text,descripcion)
        .input('id_categoria',sql.Int,id_categoria)
        .input('id',sql.Int,id)
        .query(queries.Products.updateProductById) //Hacemos la consulta
        res.json({id,nombre,descripcion,id_categoria})
        res.sendStatus(204)
}
import {getConnection, sql, queries} from '../database/' //Traigo la conexion de la BD y las queries

export async function getDudas(req,res){
    try {
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const filtro = req.query.estado;

        if(!filtro){
            const result = await pool.request().query(queries.Dudas.getAllDudas) //Hacemos la consulta
            res.json(result.recordset)
        }else{
            const result = await pool.request()
            .input('id_estado',sql.Int,filtro)
            .query(queries.Dudas.getDudasByStatus) //Hacemos la consulta
            res.json(result.recordset)

        }

           
    } catch (error) {
        res.status(500)
        res.send(error.message)
        console.log(error);
    }

}

export async function addDuda(req,res){
    let {nombre, apellido, telefono,mail,descripcion} = req.body

    try {
        const pool = await getConnection()
        await pool.request()

        .input('nombre',sql.VarChar,nombre)
        .input('apellido',sql.Text,apellido)
        .input('telefono',sql.VarChar,telefono.toString())
        .input('mail',sql.Text,mail)
        .input('descripcion',sql.Text,descripcion)
        .input('id_estado',sql.Int,1)
        .query(queries.Dudas.addDuda)

        res.json({nombre,apellido,telefono,mail,descripcion}); // Porque el pool request solo retorna las filas afectadas
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}   

export async function getDudaById(req,res){
    const { id } = req.params;
    const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
    const result = await pool.request()
        .input('id',id)
        .query(queries.Dudas.getDudaById) //Hacemos la consulta
    
    res.send(result.recordset[0])
}


export async function deleteDudaById(req,res){
    try {
        const { id } = req.params;
        const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
        const result = await pool.request()
            .input('id',id)
            .query(queries.Dudas.deleteDuda) //Hacemos la consulta
    
        res.sendStatus(204)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}
export async function updateDudaById (req,res){
    let {nombreCompleto,telefono,mail,duda, estado} = req.body
    const nombre = nombreCompleto.split(' ')[0]
    const apellido = nombreCompleto.split(' ')[1]
    const { id } = req.params;

    if(!estado || estado ==''){
        estado = 1
    }

    const pool = await getConnection() //Es una promesa, es el cliente para realizar consultas
    await pool.request()
        .input('nombre',sql.VarChar,nombre)
        .input('apellido',sql.VarChar,apellido)
        .input('telefono',sql.VarChar,telefono.toString())
        .input('mail',sql.VarChar,mail)
        .input('descripcion',sql.Text,duda)
        .input('estado',sql.VarChar,estado)
        .input('id',sql.Int,id)
        .query(queries.Dudas.updateDudaById) //Hacemos la consulta
        res.sendStatus(204)
}
import { getConnection,queries } from '../database/';

export async function getProducts(req, res) {
    const client = await getConnection(); 
    try {
        const result = await client.query(queries.Products.getAllProducts); 
        res.status(200).json(result.rows); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'No se pudieron obtener los productos' });
    }finally{
        client.release()
    }
}


export async function addProduct(req, res) {
    const { nombre, descripcion, id_categoria, precioChico, precioGrande } = req.body;
    if (descripcion == null) descripcion = '';
    if (nombre == null || descripcion == null || id_categoria == null) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
    }

    const client =  await getConnection(); 
    try {
        await client.query('BEGIN'); 

        // Inserta el producto
        const resultNew = await client.query(queries.Products.addProduct, [nombre, descripcion, id_categoria]);
        const id = resultNew.rows[0].id;

        // Inserta el precio chico
        await client.query(queries.Prices.addPrecioChico, [id, precioChico]);

        // Inserta el precio grande
        await client.query(queries.Prices.addPrecioGrande, [id, precioGrande]);

        await client.query('COMMIT');


        res.status(200).json(resultNew.rows, 'Precio chico agregado', 'Precio grande agregado');
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'No se pudo agregar el producto' });
    }finally{
        client.release()
    }
}

export async function getProductById(req, res) {
    const { id } = req.params;
    
    const client =  await getConnection();
    try {
        const result = await client.query(queries.Products.getProductById, [id]);
        
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ msg: "Producto no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo obtener el producto de esa categoría" });
    }finally{
        client.release()
    }
}

export async function deleteProductById(req, res) {
    const client = await getConnection();
    try {
        const { id } = req.params;
        await client.query('BEGIN');

        const result1 = await client.query(queries.Products.deleteProductPrices, [id]);
        const result2 = await client.query(queries.Products.deleteProduct, [id]);

        await client.query('COMMIT');


        if (result1.rowCount > 0 || result2.rowCount > 0) {
            res.sendStatus(204); // Producto y registros de precios eliminados
        } else {
            res.status(404).json({ msg: "Producto no encontrado" });
        }
    } catch (error) {
        console.error(error);
        await client.query('ROLLBACK');
        res.status(500).json({ msg: "No se pudo eliminar el producto" });
    }finally{
        client.release()
    }
}


export async function updateProductById(req, res) {
    const { id } = req.params;
    const { nombre, descripcion, id_categoria, precioChico, precioGrande } = req.body;
    if (nombre == null || descripcion == null || id_categoria == null) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
    }

    const client = await getConnection(); // Inicializa client aquí

    try {
        await client.query('BEGIN'); 

        // Actualiza la información del producto
        const productResult = await client.query(queries.Products.updateProductById, [nombre, descripcion, id_categoria, id]);

        // Actualiza los precios
        await client.query(queries.Prices.updatePrecioChico, [precioChico, id]);
        await client.query(queries.Prices.updatePrecioGrande, [precioGrande, id]);

        await client.query('COMMIT'); 

        res.sendStatus(204); // Producto actualizado con éxito
    } catch (error) {
        console.error(error);

        if (client) {
            await client.query('ROLLBACK'); 
        }

        res.status(500).json({ msg: "No se pudo actualizar el producto" });
    }finally{
        client.release()
    }
}

export const  queries ={
    getAllProducts: 'SELECT * FROM productos',
    getProductsByCategory: 'SELECT * FROM productos WHERE id_categoria = @id_categoria',
    addProduct: 'INSERT INTO productos (nombre, descripcion, id_categoria) VALUES (@nombre, @descripcion, @id_categoria)', 
    getProductById: 'SELECT * FROM productos WHERE id = @id',
    deleteProduct: 'DELETE FROM productos WHERE id = @id ',
    updateProductById: 'UPDATE productos SET nombre = @nombre, descripcion = @descripcion, id_categoria = @id_categoria WHERE id = @id '
}
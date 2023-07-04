export const  queries ={
    getAllProducts: 'SELECT * FROM productos',
    addProduct: 'INSERT INTO productos (nombre, descripcion, precio, id_categoria) VALUES (@nombre, @descripcion, @precio, @id_categoria)', 
    getProductById: 'SELECT * FROM productos WHERE id = @id',
    deleteProduct: 'DELETE FROM productos WHERE id = @id ',
    getTotalProducts: 'SELECT COUNT(*) FROM productos'
}
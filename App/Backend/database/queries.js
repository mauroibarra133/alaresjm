export const  queries ={
    Products: {
        getAllProducts: 'SELECT p.id,p.nombre,p.descripcion,pre.precio FROM productos p JOIN precios pre ON pre.id_producto=p.id',
        getProductsByCategory: `SELECT p.id,p.nombre,p.descripcion,
                                (SELECT precio from precios WHERE id_producto=p.id AND id_tamaño=1) as precioChico,
                                (SELECT precio from precios WHERE id_producto=p.id AND id_tamaño=3) as precioGrande
                                FROM productos p
                                WHERE p.id_categoria = @id_categoria
                                `,
        addProduct: 'INSERT INTO productos (nombre, descripcion, id_categoria) VALUES (@nombre, @descripcion, @id_categoria)', 
        getProductById: 'SELECT * FROM productos WHERE id = @id',
        deleteProduct: 'DELETE FROM productos WHERE id = @id ',
        updateProductById: 'UPDATE productos SET nombre = @nombre, descripcion = @descripcion, id_categoria = @id_categoria WHERE id = @id '
    },
    Dudas:{
        getAllDudas: 'SELECT * FROM dudas',
        getDudasByStatus: 'SELECT * FROM dudas WHERE id_estado = @id_estado',
        addDuda: 'INSERT INTO dudas (nombre,apellido,telefono,mail,descripcion,id_estado) VALUES (@nombre, @apellido, @telefono,@mail,@descripcion,@id_estado)', 
        getDudaById: 'SELECT * FROM dudas WHERE id = @id',
        deleteDuda: 'DELETE FROM dudas WHERE id = @id ',
        updateDudaById: 'UPDATE dudas SET nombre = @nombre, apellido = @apellido, telefono = @telefono,mail= @mail,descripcion = @descripcion, id_estado = @id_estado WHERE id = @id '
    },
    Categorias:{
        getAllCategories: 'SELECT * FROM categorias_producto'
    }
}
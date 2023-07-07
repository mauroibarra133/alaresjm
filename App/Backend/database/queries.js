export const  queries ={
    Products: {
        getAllProducts: 'SELECT * FROM productos',
        getProductsByCategory: 'SELECT * FROM productos WHERE id_categoria = @id_categoria',
        addProduct: 'INSERT INTO productos (nombre, descripcion, id_categoria) VALUES (@nombre, @descripcion, @id_categoria)', 
        getProductById: 'SELECT * FROM productos WHERE id = @id',
        deleteProduct: 'DELETE FROM productos WHERE id = @id ',
        updateProductById: 'UPDATE productos SET nombre = @nombre, descripcion = @descripcion, id_categoria = @id_categoria WHERE id = @id '
    },
    Dudas:{
        getAllDudas: 'SELECT * FROM dudas',
        getDudasByStatus: 'SELECT * FROM dudas WHERE id_estado = @id_estado',
        addDuda: 'INSERT INTO dudas (nombre,apellido,telefono,mail,descripcion,id_estado) VALUES (@nombre, @apellido, @telefono,@mail,@descripcion,1)', 
        getDudaById: 'SELECT * FROM dudas WHERE id = @id',
        deleteDuda: 'DELETE FROM dudas WHERE id = @id ',
        updateDudaById: 'UPDATE dudas SET nombre = @nombre, apellido = @apellido, telefono = @telefono,mail= @mail,descripcion = @descripcion, id_estado = @id_estado WHERE id = @id '
    }

}
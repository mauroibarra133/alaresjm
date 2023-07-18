export const  queries ={
    Products: {
        getAllProducts: `SELECT p.id,p.nombre,p.descripcion, p.id_categoria,
        (SELECT precio from precios WHERE id_producto=p.id AND id_tamaño=1) as precioChico,
        (SELECT precio from precios WHERE id_producto=p.id AND id_tamaño=3) as precioGrande
        FROM productos p`,
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
    },
    Pedidos:{
        addOrder: `
        INSERT INTO pedidos (fecha, id_usuario, direccion, nota, total, id_tipo_pago, id_tipo_entrega, id_estado, puntos_parciales, id_pago, monto_cambio)
VALUES (@fecha, @id_usuario, @direccion, @nota, @total, @id_tipo_pago, @id_tipo_entrega, @id_estado, ROUND(@total/10, 0), @id_pago, @monto_cambio);
        `,
        searchIdOrder: `SELECT id FROM pedidos WHERE id_pago = @id_pago`
    },
    DescPedidos:{
        addDescOrder: ` INSERT INTO desc_pedidos (id_producto,cantidad,subtotal,id_pedido) VALUES 
        (@id_producto,@cantidad,@subtotal,@id_pedido)`
    },
    Login: {
        getUserData: 'SELECT * FROM usuarios WHERE CAST(email AS varchar(max)) = CAST(@email AS varchar(max))'
    },
    Usuarios: {
        addUser: "INSERT INTO usuarios (fecha_creacion,nombre,apellido,email,contraseña,rol, puntos) VALUES (GETDATE(),@nombre, @apellido, @email, @password, @rol, @puntos)"
    }
}
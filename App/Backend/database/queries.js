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
        addProduct: 'INSERT INTO productos (nombre, descripcion, id_categoria) VALUES (@nombre, @descripcion, @id_categoria); SELECT SCOPE_IDENTITY() AS newId', 
        getProductById: 'SELECT * FROM productos WHERE id = @id',
        deleteProduct: 'DELETE FROM precios WHERE id_producto = @id; DELETE FROM productos WHERE id = @id ',
        updateProductById: 'UPDATE productos SET nombre = @nombre, descripcion = @descripcion, id_categoria = @id_categoria WHERE id = @id '
    },
    Dudas:{
        getAllDudas: `SELECT D.id,CONCAT(D.nombre,' ',D.apellido) as nombreCompleto,D.telefono,D.mail, D.descripcion as duda, E.nombre as estado FROM dudas D
        JOIN estados_duda E ON E.id = D.id_estado
        `,
        getDudasByStatus: 'SELECT * FROM dudas WHERE id_estado = @id_estado',
        addDuda: 'INSERT INTO dudas (nombre,apellido,telefono,mail,descripcion,id_estado) VALUES (@nombre, @apellido, @telefono,@mail,@descripcion,@id_estado)', 
        getDudaById: 'SELECT * FROM dudas WHERE id = @id',
        deleteDuda: 'DELETE FROM dudas WHERE id = @id ',
        updateDudaById: `UPDATE dudas SET nombre = @nombre, apellido = @apellido, telefono = @telefono,mail= @mail,descripcion = @descripcion, 
        id_estado = (SELECT id FROM estados_duda WHERE nombre = @estado) WHERE id = @id `
    },
    Categorias:{
        getAllCategories: 'SELECT * FROM categorias_producto'
    },
    Pedidos:{
        addOrder: `
        INSERT INTO pedidos (fecha, id_usuario, direccion, nota, total, id_tipo_pago, id_tipo_entrega, id_estado, puntos_parciales, id_pago, monto_cambio)
VALUES (@fecha, @id_usuario, @direccion, @nota, @total, @id_tipo_pago, @id_tipo_entrega, @id_estado, ROUND(@total/10, 0), @id_pago, @monto_cambio);
        `,
        searchIdOrder: `SELECT id FROM pedidos WHERE id_pago = @id_pago`,
        getPedidosByUserId: `SELECT P.id, P.fecha, STRING_AGG(Pr.nombre, ', ') AS nombres_productos, P.total, E.nombre AS estado_pedido
                            FROM pedidos P
                            JOIN desc_pedidos D ON P.id = D.id_pedido
                            JOIN productos Pr ON Pr.id = D.id_producto
                            JOIN estados_pedido E ON E.id = P.id_estado
                            WHERE id_usuario = @user_id
                            GROUP BY P.id, P.total, E.nombre, P.fecha
                            ORDER BY P.fecha DESC
    `,
    getPedidosByDate: `SELECT P.id, CONVERT(varchar(5), DATEADD(hour, -3, P.fecha), 108) AS hora,CONCAT(U.nombre, ' ', U.apellido) as nombre_completo,
    STRING_AGG(CAST(Pr.nombre + '-' + CAST(D.cantidad AS VARCHAR(10)) + '-' + CAST(D.subtotal as VARCHAR(10)) AS VARCHAR(100)), ', ') AS descr_pedidos, CAST(P.direccion AS VARCHAR(100)) as direccion,
                        TP.nombre as tipopago, TE.nombre tipoentrega, CAST(P.nota AS VARCHAR(100)) as nota,P.total, E.nombre AS estado_pedido,
                        P.monto_cambio
                        FROM pedidos P 
                        JOIN desc_pedidos D ON P.id = D.id_pedido
                        JOIN productos Pr ON Pr.id = D.id_producto
                        JOIN estados_pedido E ON E.id = P.id_estado
                        JOIN usuarios U ON U.id = P.id_usuario
                        JOIN tipos_pagos TP ON TP.id = P.id_tipo_pago
                        JOIN tipos_entrega TE ON TE.id = P.id_tipo_entrega
                        WHERE CONVERT(DATE,p.fecha) = @date
                        GROUP BY  P.id,P.fecha, CONCAT(U.nombre, ' ', U.apellido), CAST(P.direccion AS VARCHAR(100)),TP.nombre,
                        TE.nombre,CAST(P.nota AS VARCHAR(100)),P.total, E.nombre, P.monto_cambio
                        ORDER BY  hora DESC`,
    updatePedido: `UPDATE pedidos
    SET id_estado = (SELECT id FROM estados_pedido WHERE nombre = @state)
    WHERE id = @id`
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
    },
    Reservas: {
        addReserva: "INSERT INTO reservas (fecha,hora,id_usuario, cantidad_personas, lugar, cliente_reserva,id_estado) VALUES (@fecha,@hora,@id_usuario,@cantidad_personas,@lugar,@cliente_reserva, @id_estado)",
        getReservas: `SELECT R.id,R.fecha,R.hora,R.id_usuario,R.cantidad_personas,R.lugar,R.cliente_reserva,E.nombre as estado
                        FROM reservas R
                        JOIN estados_reserva E ON E.id = R.id_estado`,
        getReservasByUser: `SELECT R.id,R.fecha,R.hora,R.id_usuario,R.cantidad_personas,R.lugar,R.cliente_reserva,E.nombre as estado
        FROM reservas R
        JOIN estados_reserva E ON E.id = R.id_estado WHERE R.id_usuario = @user_id`,
        getReservasByDate: `SELECT R.id,R.fecha,R.hora,R.id_usuario,R.cantidad_personas,R.lugar,R.cliente_reserva,E.nombre as estado
        FROM reservas R
        JOIN estados_reserva E ON E.id = R.id_estado WHERE R.fecha = @date`,
        deleteReserva: `DELETE FROM reservas WHERE id = @id`,
        updateReserva: `UPDATE reservas SET fecha = @fecha, hora = @hora, 
        cantidad_personas = @comensales, lugar = @zona, cliente_reserva = @cliente,
        id_estado = (SELECT id FROM estados_reserva WHERE nombre = @estado)
        WHERE id = @id`,
    },
    Ranking: {
        getRanking: "SELECT * FROM RankingPuntos ORDER BY Puntos DESC"
    },
    Prices: {
        addPrecioChico: "INSERT INTO precios (id_producto,id_tamaño,precio) VALUES (@id,1,@precioChico)",
        addPrecioGrande: "INSERT INTO precios (id_producto,id_tamaño,precio) VALUES (@id,3,@precioGrande)",
        updatePrecioChico: "UPDATE precios SET precio = @precioChico WHERE id_producto = @id AND id_tamaño = 1",
        updatePrecioGrande: "UPDATE precios SET precio = @precioGrande  WHERE id_producto = @id AND id_tamaño = 3"
    }
}

export const  queries ={
    Products: {
        getAllProducts: `SELECT p.id, p.nombre, p.descripcion, p.id_categoria,
        ( SELECT MAX(precio) FROM precios WHERE id_producto = p.id AND id_tamaño = 1 ) AS precioChico,
        ( SELECT MAX(precio) FROM precios WHERE id_producto = p.id AND id_tamaño = 2 ) AS precioGrande
    FROM productos p;
    `,
        getProductsByCategory: `SELECT p.id,p.nombre,p.descripcion,
                                (SELECT precio from precios WHERE id_producto=p.id AND id_tamaño=1) as precioChico,
                                (SELECT precio from precios WHERE id_producto=p.id AND id_tamaño=2) as precioGrande
                                FROM productos p
                                WHERE p.id_categoria = $1
                                `,
        addProduct: `INSERT INTO productos (nombre, descripcion, id_categoria)
        VALUES ($1, $2, $3) RETURNING id;
        `, 
        getProductById: 'SELECT * FROM productos WHERE id = $1',
        deleteProductPrices: 'DELETE FROM precios WHERE id_producto = $1',
        deleteProduct: 'DELETE FROM productos WHERE id = $1',
        updateProductById: 'UPDATE productos SET nombre = $1, descripcion = $2, id_categoria = $3 WHERE id = $4 '
    },
    Dudas:{
        getAllDudas: `SELECT D.id, (D.nombre || ' ' || D.apellido) as nombreCompleto, D.telefono, D.mail, D.descripcion as duda, E.nombre as estado
        FROM dudas D
        JOIN estados_duda E ON E.id = D.id_estado
        ORDER BY D.id ASC;
        
        `,
        getDudasByStatus: 'SELECT * FROM dudas WHERE id_estado = $1 ORDER BY id ASC;',
        addDuda: 'INSERT INTO dudas (nombre,apellido,telefono,mail,descripcion,id_estado) VALUES ($1, $2, $3,$4,$5,$6)', 
        getDudaById: 'SELECT * FROM dudas WHERE id = $1',
        deleteDuda: 'DELETE FROM dudas WHERE id = $1 ',
        updateDudaById: `UPDATE dudas SET nombre = $1, apellido = $2, telefono = $3,mail= $4,descripcion = $5, 
        id_estado = (SELECT id FROM estados_duda WHERE nombre = $6) WHERE id = $7 `
    },
    Categorias:{
        getAllCategories: 'SELECT * FROM categorias_producto'
    },
    Pedidos:{
        addOrder: `
        INSERT INTO pedidos (fecha, id_pago, id_usuario, direccion, nota, total, id_tipo_entrega, id_tipo_pago, id_estado, monto_cambio,puntos_parciales) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, ($6/10)) RETURNING id`,
        searchIdOrder: `SELECT id FROM pedidos WHERE id_pago = $1`,
        getPedidosByUserId: `SELECT P.id, P.fecha, STRING_AGG(Pr.nombre, ', ') AS nombres_productos, P.total, E.nombre_estado AS estado_pedido
                            FROM pedidos P
                            JOIN desc_pedidos D ON P.id = D.id_pedido
                            JOIN productos Pr ON Pr.id = D.id_producto
                            JOIN estados_pedido E ON E.id = P.id_estado
                            WHERE id_usuario = $1
                            GROUP BY P.id, P.total, E.nombre_estado, P.fecha
                            ORDER BY P.fecha DESC
    `,
    getPedidosByDate: `SELECT 
    P.id,
    to_char(P.fecha - interval '3 hours', 'HH24:MI') AS hora,
    CONCAT(U.nombre, ' ', U.apellido) AS nombre_completo,
    string_agg(Pr.nombre || '-' || CAST(D.cantidad AS VARCHAR(10)) || '-' || CAST(D.subtotal AS VARCHAR(10)), ', ') AS descr_pedidos,
    CAST(P.direccion AS VARCHAR(100)) AS direccion,
    TP.nombre AS tipopago,
    TE.nombre AS tipoentrega,
    CAST(P.nota AS VARCHAR(100)) AS nota,
    P.total,
    E.nombre_estado AS estado_pedido,
    P.monto_cambio
FROM 
    pedidos P
    JOIN desc_pedidos D ON P.id = D.id_pedido
    JOIN productos Pr ON Pr.id = D.id_producto
    JOIN estados_pedido E ON E.id = P.id_estado
    JOIN usuarios U ON U.id = P.id_usuario
    JOIN tipos_pagos TP ON TP.id = P.id_tipo_pago
    JOIN tipos_entrega TE ON TE.id = P.id_tipo_entrega
WHERE 
      date_trunc('day', P.fecha AT TIME ZONE 'UTC' AT TIME ZONE 'America/Argentina/Buenos_Aires') = $1::date
GROUP BY 
    P.id, 
    P.fecha, 
    CONCAT(U.nombre, ' ', U.apellido), 
    CAST(P.direccion AS VARCHAR(100)),
    TP.nombre, 
    TE.nombre, 
    CAST(P.nota AS VARCHAR(100)), 
    P.total, 
    E.nombre_estado, 
    P.monto_cambio
ORDER BY 
    hora DESC;

`,
    updatePedido: `UPDATE pedidos
    SET id_estado = (SELECT id FROM estados_pedido WHERE nombre_estado = $1)
    WHERE id = $2`
    },
    DescPedidos:{
        addDescOrder: `INSERT INTO desc_pedidos (id_producto, cantidad, subtotal, id_pedido) VALUES ($1, $2, $3, $4)`
    },
    Login: {
        getUserData: `SELECT
        id,
        fecha_creacion,
        pgp_sym_decrypt(contraseñaCifrada::bytea, $1::TEXT) as contraseña,
        nombre,
        apellido,
        puntos,
        rol,
        email
    FROM usuarios
    WHERE CAST(email AS TEXT) = CAST($2 AS TEXT);
    `,
        getUserDataByID: `SELECT 
        id, 
        fecha_creacion, 
        pgp_sym_decrypt(contraseñaCifrada::bytea, $1::TEXT) as contraseña,
        nombre,
        apellido,
        puntos,
        rol,
        email
    FROM usuarios
    WHERE id = $2;
    `,
    updateUserByID: `UPDATE usuarios
        SET contraseñaCifrada = pgp_sym_encrypt($1, $2)
        WHERE id = $3;
        `
    },
    Usuarios: {
        addUser: `INSERT INTO usuarios (fecha_creacion, nombre, apellido, email, rol, puntos, contraseñaCifrada)
        VALUES (CURRENT_TIMESTAMP, $1, $2, $3, $4, $5, pgp_sym_encrypt($6, $7::TEXT))
        `
    },
    Reservas: {
        addReserva: "INSERT INTO reservas (fecha,hora,id_usuario, cantidad_personas, lugar, cliente_reserva,id_estado) VALUES ($1,$2,$3,$4,$5,$6, $7)",
        getReservas: `SELECT R.id,R.fecha,R.hora,R.id_usuario,R.cantidad_personas,R.lugar,R.cliente_reserva,E.nombre as estado
                        FROM reservas R
                        JOIN estados_reserva E ON E.id = R.id_estado
                        ORDER BY R.fecha DESC`,
        getReservasByUser: `SELECT R.id,R.fecha,R.hora,R.id_usuario,R.cantidad_personas,R.lugar,R.cliente_reserva,E.nombre as estado
        FROM reservas R
        JOIN estados_reserva E ON E.id = R.id_estado WHERE R.id_usuario = $1
        ORDER BY R.fecha DESC, R.hora DESC`,
        getReservasByDate: `SELECT R.id,R.fecha,R.hora,R.id_usuario,R.cantidad_personas,R.lugar,R.cliente_reserva,E.nombre as estado
        FROM reservas R
        JOIN estados_reserva E ON E.id = R.id_estado WHERE R.fecha = $1
        ORDER BY R.fecha DESC`,
        deleteReserva: `DELETE FROM reservas WHERE id = $1`,
        updateReserva: `UPDATE reservas SET fecha = $1, hora = $2, 
        cantidad_personas = $3, lugar = $4, cliente_reserva = $5,
        id_estado = (SELECT id FROM estados_reserva WHERE nombre = $6)
        WHERE id = $7`,
    },
    Ranking: {
        getRanking: "SELECT * FROM RankingPuntos ORDER BY Puntos DESC"
    },
    Prices: {
        addPrecioChico: "INSERT INTO precios (id_producto,id_tamaño,precio) VALUES ($1,1,$2)",
        addPrecioGrande: "INSERT INTO precios (id_producto,id_tamaño,precio) VALUES ($1,2,$2)",
        updatePrecioChico: "UPDATE precios SET precio = $1 WHERE id_producto = $2 AND id_tamaño = 1",
        updatePrecioGrande: "UPDATE precios SET precio = $1  WHERE id_producto = $2 AND id_tamaño = 2"
    }
}
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    fecha_creacion DATE NOT NULL,
    contraseñaCifrada BYTEA NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    puntos INT,
    rol VARCHAR(10),
    email VARCHAR(100) UNIQUE NOT NULL,
    CONSTRAINT check_puntos CHECK(puntos>=0)
);

CREATE TABLE estados_reserva (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE estados_duda (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30)
);
CREATE TABLE categorias_producto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias_producto(id),
    CONSTRAINT check_precio CHECK(precio>=0)
);

CREATE TABLE tipos_pagos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);

CREATE TABLE estados_pedido (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE tipos_entrega (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    hora VARCHAR(5) NOT NULL,
    id_usuario INT NOT NULL,
    cantidad_personas INT NOT NULL CHECK(cantidad_personas > 0),
    lugar VARCHAR(30) NOT NULL,
    cliente_reserva VARCHAR(30) NOT NULL,
    id_estado INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
        ON DELETE NO ACTION
        ON UPDATE CASCADE
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL,
    id_usuario INT NOT NULL,
    direccion TEXT,
    nota TEXT,
    total INT NOT NULL CHECK(total >= 0),
    id_tipo_pago INT NOT NULL,
    id_estado INT NOT NULL,
    id_tipo_entrega INT NOT NULL,
    id_descrip_pedido INT NOT NULL,
    puntos_parciales INT,
    id_pago INT,
    monto_cambio INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
        ON DELETE NO ACTION
        ON UPDATE CASCADE,
    FOREIGN KEY (id_tipo_pago) REFERENCES tipos_pagos(id),
    FOREIGN KEY (id_estado) REFERENCES estados_pedido(id),
    FOREIGN KEY (id_tipo_entrega) REFERENCES tipos_entrega(id),
    FOREIGN KEY (id_descrip_pedido) REFERENCES tipos_entrega(id)
);

CREATE TABLE desc_pedidos (
    id SERIAL PRIMARY KEY,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    subtotal INT NOT NULL,
    id_pedido INT NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id)
);



CREATE TABLE tamaños_productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);

CREATE TABLE dudas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    mail TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    id_estado INT,
    FOREIGN KEY (id_estado) REFERENCES estados_duda(id)
);


CREATE TABLE RankingPuntos (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    Puntos INT
);

CREATE TABLE precios (
    id SERIAL PRIMARY KEY,
    id_producto INT,
    id_tamaño INT,
    precio INT,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (id_tamaño) REFERENCES tamaños_productos(id)
);
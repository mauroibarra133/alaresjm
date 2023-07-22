/*CREATE TABLE usuarios (
	id INT PRIMARY KEY IDENTITY(1,1),
	fecha_creacion DATE NOT NULL,
	usuario VARCHAR(30) NOT NULL,
	contraseña VARCHAR(30) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(30) NOT NULL,
	puntos INT,
	email TEXT,
	rol VARCHAR(10)
	CONSTRAINT check_puntos CHECK(puntos>=0)
)

CREATE TABLE categorias_producto (
	id INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(25) NOT NULL
)

CREATE TABLE productos (
	id INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(50) NOT NULL,
	descripcion TEXT,
	precio INT, 
	id_categoria INT,
	FOREIGN KEY (id_categoria) REFERENCES categorias_producto(id),
	CONSTRAINT check_precio CHECK(precio>=0)
)


CREATE TABLE tipos_pagos (
	id INT IDENTITY(1,1),
	nombre VARCHAR(20) NOT NULL
)


CREATE TABLE tipos_pagos (
	id INT  PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(20) NOT NULL
)

CREATE TABLE estados_pedido (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(25) NOT NULL
)

CREATE TABLE tipos_entrega (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(25) NOT NULL
)

CREATE TABLE reservas (
	id INT PRIMARY KEY IDENTITY(1,1),
	fecha DATE NOT NULL,
	hora VARCHAR(5) NOT NULL,
	id_usuario INT NOT NULL,
	cantidad_personas INT NOT NULL CHECK(cantidad_personas > 0),
	lugar VARCHAR(30) NOT NULL,
	cliente_reserva VARCHAR(30) NOT NULL,
	id_estado INT;
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
)


CREATE TABLE desc_pedidos (
	id INT PRIMARY KEY IDENTITY(1,1),
	id_producto INT NOT NULL,
	cantidad INT NOT NULL,
	subtotal INT NOT NULL,
	id_pedido INT NOT NULL,
	FOREIGN KEY (id_producto) REFERENCES productos(id),
	FOREIGN KEY (id_pedido) REFERENCES pedidos(id)
)

CREATE TABLE pedidos (
	id INT PRIMARY KEY IDENTITY(1,1),
	fecha DATETIME NOT NULL,
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
	FOREIGN KEY (id_descrip_pedido) REFERENCES tipos_entrega(id),
)

CREATE TABLE tamaños_productos (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(20) NOT NULL
)

CREATE TABLE dudas (
	id INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	telefono VARCHAR(20) NOT NULL,
	mail TEXT NOT NULL,
	descripcion TEXT NOT NULL,
	id_estado INT FOREIGN KEY (id_estado) REFERENCES estados_duda(id)
)
CREATE TABLE estados_duda (
	id INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(30)

)

CREATE TABLE RankingPuntos (
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    Puntos INT
);

CREATE TABLE estados_reserva (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(25) NOT NULL
)

*/
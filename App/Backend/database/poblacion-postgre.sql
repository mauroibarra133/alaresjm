INSERT INTO estados_reserva (nombre) VALUES 
('A confirmar'), ('Reservado'), ('Cancelado');

INSERT INTO tipos_pagos (nombre) VALUES
('Efectivo'), ('Transferencia');

INSERT INTO tipos_entrega (nombre) VALUES
('Delivery'), ('Retirar en local');

INSERT INTO estados_pedido (nombre) VALUES
('Pendiente Confirmacion'),('Confirmado'),('En Preparacion'),('Listo') ,('En reparto'), ('Enviando'), ('Entregado'), ('Cancelado');

INSERT INTO categorias_producto (nombre) VALUES
('Pizzas'),('Bebidas'),('Hamburguesas'),('Sandwiches'),('Papas'),('Pastas');

INSERT INTO estados_duda (nombre) VALUES
('No Leido'),('Leido'),('Respondido');

INSERT INTO dudas (nombre,apellido,telefono,mail,descripcion,id_estado) VALUES
('Mauro','Ibarra','3525649133','mauroibarra133@gmail.com','Como trabajo para ustedes porfa',1);

INSERT INTO tamaños_productos (nombre) VALUES
('Pequeña'),('Grande');


INSERT INTO productos (nombre, descripcion, id_categoria) VALUES
('Muzza', 'Queso muzzarella', 1),
('Especial', 'Muzza, jamón, huevo y morrones', 1),
('Especial c/ anchoas', 'Muzza, jamón, huevo, morrones y anchoas', 1),
('Napolitana', 'Muzza, tomate y ajo', 1),
('Salchicha', 'Muzza, salchicha y salsa golf', 1),
('Roquefort', 'Muzza y Queso roquefort', 1),
('4 quesos', 'Muzza, roquefort, reggianito y cremoso', 1),
('Fugazzeta', 'Muzza y cebolla caramelizada', 1),
('Rúcula', 'Muzza, rucula, jamon crudo y tomate cherry', 1),
('Palmito', 'Muzza, palmitos y salsa golf', 1),
('Alares', 'Muzza, panceta ahumada y salsa barbacoa', 1),
('Hawaiana', 'Muzza, ananá y jamon', 1),
('Mila', 'Muzza, milanesa frita y salsa golf', 1),
('Provolone', 'Muzza y queso provolone', 1),
('Calabresa', 'Muzza y calabresa', 1),
('Super Queso', 'Queso cheddar', 3),
('Combinada', 'Cheddar y jamón / Cheddar y huevo', 3),
('Clásica', 'Cheddar, tomate, lechuga y cebolla', 3),
('XL', 'Cheddar, jamon, huevo, tomate y lechuga', 3),
('Americana', 'Cheddar, jamon, huevo, panceta ahumada y queso cheddar', 3),
('BBQ', 'Salsa barbacoa, doble panceta ahumada y queso cheddar', 3),
('Mexicana', 'Cheddar, pepinos, salsa picante, lechuga, tomate y cebolla', 3),
('Chimi', 'Cheddar, jamon, salsa chimi, tomate y lechuga', 3),
('Gourmet', 'Jamon crudo, queso gratinado y rucula', 3),
('4 quesos', 'Cheddar, reggianito, cremoso, roquefort, tomate y lechuga', 3),
('Criolla', 'Provoleta, pimientos, tomate y lechuga', 3),
('Veggi', 'Lechuga, tomate, pepinos, huevo, cheddar, doble medallon', 3),
('Onion', 'Cheddar, doble panceta ahumada, aros de cebolla, salsa BBQ', 3),
('Alares', 'Triple carne, triple cheddar y triple panceta', 3),
('Mila Clasico', 'Cheddar, tomate y lechuga', 4),
('Mila Chimi', 'Cheddar, jamon, salsa chimi, tomate y lechuga', 4),
('Mila Americano', 'Cheddar, jamon, huevo, panceta, tomate y lechuga', 4),
('Coca Cola', '', 2),
('Fanta', '', 2),
('Sprite', '', 2),
('Agua Mineral', '', 2),
('Agua Con Gas', '', 2),
('Agua Saborizada', '', 2),
('Pinta', '', 2),
('Media Pinta', '', 2),
('Solas', '', 5),
('Queso cheddar', '', 5),
('Jamon y queso cheddar', '', 5),
('Queso cheddar y panceta', '', 5),
('Jamon, queso cheddar y huevo', '', 5),
('Huevo', '', 5),
('Huevo y queso cheddar', '', 5),
('BBQ', 'Panceta y salsa BBQ', 5),
('Papas Alares', 'Jamon, Queso, huevo y panceta', 5),
('Patitas de pollo', '', 5),
('Patitas de pollo c/ cheddar', '', 5),
('Bastones de muzza', '', 5),
('Bastones de muzza c/ cheddar', '', 5);


INSERT INTO precios (id_producto, id_tamaño, precio) VALUES
(1, 2, 2200),
(2, 2, 3000),
(3, 2, 3200),
(4, 2, 2800),
(5, 2, 2800),
(6, 2, 3100),
(7, 2, 3200),
(8, 2, 2900),
(9, 2, 3800),
(10, 2, 3800),
(11, 2, 3800),
(12, 2, 3700),
(13, 2, 3500),
(14, 2, 3500),
(15, 2, 3500),
(16, 1, 1300),
(16, 2, 1600),
(17, 1, 1450),
(17, 2, 1650),
(18, 1, 1500),
(18, 2, 1800),
(19, 1, 1700),
(19, 2, 2000),
(20, 1, 1950),
(20, 2, 2250),
(21, 1, 1800),
(21, 2, 2000),
(22, 1, 1700),
(22, 2, 2000),
(23, 1, 1900),
(23, 2, 2200),
(24, 1, 2050),
(24, 2, 2350),
(25, 1, 2000),
(25, 2, 2200),
(26, 1, 2600),
(26, 2, 2900),
(27, 2, 2000),
(28, 1, 2000),
(28, 2, 2300),
(29, 2, 2900),
(30, 2, 2300),
(31, 2, 2600),
(32, 2, 2800),
(33, 1, 550),
(33, 2, 800),
(34, 1, 550),
(34, 2, 800),
(35, 1, 550),
(35, 2, 800),
(36, 1, 400),
(37, 1, 400),
(38, 1, 550),
(39, 2, 1000),
(40, 1, 450),
(41, 1, 1300),
(41, 2, 1500),
(42, 1, 1400),
(42, 2, 1700),
(43, 1, 1500),
(43, 2, 1800),
(44, 1, 1700),
(44, 2, 2000),
(45, 1, 1700),
(45, 2, 2000),
(46, 1, 1400),
(46, 2, 1700),
(47, 1, 1500),
(47, 2, 1800),
(48, 1, 1700),
(48, 2, 2000),
(49, 1, 1900),
(49, 2, 2200),
(50, 1, 1500),
(50, 2, 1700),
(51, 1, 1400),
(51, 2, 1600),
(52, 1, 1500),
(52, 2, 1700),
(52, 1, 1800),
(52, 2, 2000),
(1,1,0),(2,1,0),(3,1,0),(4,1,0),(5,1,0),(6,1,0),(7,1,0),(8,1,0),(9,1,0),
(10,1,0),(11,1,0),(12,1,0),(13,1,0),(14,1,0),(15,1,0),(27,1,0),(29,1,0),(30,1,0),
(31,1,0),(32,1,0),(36,2,0),(37,2,0),(38,2,0),(39,1,0),(40,2,0);



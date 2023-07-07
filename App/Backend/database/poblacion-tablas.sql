/*
INSERT INTO tìpos_pagos (nombre) VALUES
('Efectivo'), ('Transferencia')

INSERT INTO tipos_entrega (nombre) VALUES
('Delivery'), ('Retirar en local')

INSERT INTO estados_pedido (nombre) VALUES
('Pendiente Confirmacion'), ('En preparacion'), ('Enviando'), ('Entregado')

INSERT INTO categorias_producto (nombre) VALUES
('Pizzas'),('Bebidas'),('Hamburguesas'),('Sandwiches'),('Papas'),('Pastas')

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
('Papas Solas', '', 5),
('Papas c/ queso cheddar', '', 5),
('Papas c/ jamon y queso cheddar', '', 5),
('Papas c/ queso cheddar y panceta', '', 5),
('Papas c/ jamon, queso cheddar, huevo y panceta', '', 5),
('Papas c/ huevo', '', 5),
('Papas c/ huevo y queso cheddar', '', 5),
('Papas c/ salsa BBQ', '', 5),
('Papas Alares', 'Jamon, Queso, huevo y panceta', 5),
('Patitas de pollo', '', 5),
('Patitas de pollo c/ cheddar', '', 5),
('Bastones de muzza', '', 5),
('Bastones de muzza c/ cheddar', '', 5)


INSERT INTO tamaños (nombre) VALUES
('Pequeña'), ('Mediana'), ('Grande'), ('Doble'),('Triple'),('500cc'),('1.5L'),('1L')

INSERT INTO precios (id_producto, id_tamaño, precio) VALUES
(1, 9, 2200),
(2, 9, 3000),
(3, 9, 3200),
(4, 9, 2800),
(5, 9, 2800),
(6, 9, 3100),
(7, 9, 3200),
(8, 9, 2900),
(9, 9, 3800),
(10, 9, 3800),
(11, 9, 3800),
(12, 9, 3700),
(13, 9, 3500),
(14, 9, 3500),
(15, 9, 3500),
(16, 10, 1300),
(16, 4, 1600),
(17, 10, 1450),
(17, 4, 1650),
(18, 10, 1500),
(18, 4, 1800),
(19, 10, 1700),
(19, 4, 2000),
(20, 10, 1950),
(20, 4, 2250),
(21, 10, 1800),
(21, 4, 2000),
(22, 10, 1700),
(22, 4, 2000),
(23, 10, 1900),
(23, 4, 2200),
(24, 10, 2050),
(24, 4, 2350),
(25, 10, 2000),
(25, 4, 2200),
(26, 10, 2600),
(26, 4, 2900),
(27, 4, 2000),
(28, 10, 2000),
(28, 4, 2300),
(29, 5, 2900),
(30, 9, 2300),
(31, 9, 2600),
(32, 9, 2800),
(33, 6, 550),
(33, 7, 800),
(34, 6, 550),
(34, 7, 800),
(35, 6, 550),
(35, 7, 800),
(36, 6, 400),
(37, 6, 400),
(38, 6, 550),
(39, 9, 1000),
(40, 9, 450),
(41, 1, 1300),
(41, 3, 1500),
(42, 1, 1400),
(42, 3, 1700),
(43, 1, 1500),
(43, 3, 1800),
(44, 1, 1700),
(44, 3, 2000),
(45, 1, 1700),
(45, 3, 2000),
(46, 1, 1400),
(46, 3, 1700),
(47, 1, 1500),
(47, 3, 1800),
(48, 1, 1700),
(48, 3, 2000),
(49, 1, 1900),
(49, 3, 2200),
(50, 1, 1400),
(50, 3, 1600),
(51, 1, 1500),
(51, 3, 1700),
(52, 1, 1400),
(52, 3, 1600),
(53, 1, 1500),
(53, 3, 1700)

INSERT INTO dudas (nombre,apellido,telefono,mail,descripcion,id_estado)VALUES
('Mauro','Ibarra','3525649133','mauroibarra133@gmail.com','Como trabajo para ustedes porfa',1)

INSERT INTO estados_duda (nombre) VALUES
 ('No Leido'),('Leido'),('Respondido')
*/



SELECT * FROM productos P
JOIN categorias_producto C ON C.id = P.id_categoria
WHERE C.nombre = 'Hamburguesas'

SELECT * FROM categorias_producto
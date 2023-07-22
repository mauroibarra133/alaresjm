/*


INSERT INTO  estados_reserva (nombre) VALUES 
('A confirmar'), ('Reservado'), ('Cancelado')

INSERT INTO tìpos_pagos (nombre) VALUES
('Efectivo'), ('Transferencia')

INSERT INTO tipos_entrega (nombre) VALUES
('Delivery'), ('Retirar en local')

INSERT INTO estados_pedido (nombre) VALUES
('Pendiente Confirmacion'),('Confirmado'),('En Preparacion'),('Listo') ,('En reparto'), ('Enviando'), ('Entregado'), ('Cancelado')

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
('Solas', '', 5),
('Queso cheddar', '', 5),
('Jamon y queso cheddar', '', 5),
('Queso cheddar y panceta', '', 5),
('Jamon, queso cheddar y huevo', '', 5),
('Huevo', '', 5),
('Huevo y queso cheddar', '', 5),
('BBQ', 'Panceta y salsa BBQ', 5),
('Papas Alares', 'Jamon, Queso, huevo y panceta', 5)
('Patitas de pollo', '', 5),
('Patitas de pollo c/ cheddar', '', 5),
('Bastones de muzza', '', 5),
('Bastones de muzza c/ cheddar', '', 5)


INSERT INTO tamaños (nombre) VALUES
('Pequeña'),('Grande')

INSERT INTO precios (id_producto, id_tamaño, precio) VALUES
(1, 3, 2200),
(2, 3, 3000),
(3, 3, 3200),
(4, 3, 2800),
(5, 3, 2800),
(6, 3, 3100),
(7, 3, 3200),
(8, 3, 2900),
(9, 3, 3800),
(10, 3, 3800),
(11, 3, 3800),
(12, 3, 3700),
(13, 3, 3500),
(14, 3, 3500),
(15, 3, 3500),
(16, 1, 1300),
(16, 3, 1600),
(17, 1, 1450),
(17, 3, 1650),
(18, 1, 1500),
(18, 3, 1800),
(19, 1, 1700),
(19, 3, 2000),
(20, 1, 1950),
(20, 3, 2250),
(21, 1, 1800),
(21, 3, 2000),
(22, 1, 1700),
(22, 3, 2000),
(23, 1, 1900),
(23, 3, 2200),
(24, 1, 2050),
(24, 3, 2350),
(25, 1, 2000),
(25, 3, 2200),
(26, 1, 2600),
(26, 3, 2900),
(27, 3, 2000),
(28, 1, 2000),
(28, 3, 2300),
(29, 3, 2900),
(30, 3, 2300),
(31, 3, 2600),
(32, 3, 2800),
(33, 1, 550),
(33, 3, 800),
(34, 1, 550),
(34, 3, 800),
(35, 1, 550),
(35, 3, 800),
(36, 1, 400),
(37, 1, 400),
(38, 1, 550),
(39, 3, 1000),
(40, 1, 450),
(57, 1, 1300),
(57, 3, 1500),
(58, 1, 1400),
(58, 3, 1700),
(59, 1, 1500),
(59, 3, 1800),
(60, 1, 1700),
(60, 3, 2000),
(61, 1, 1700),
(61, 3, 2000),
(62, 1, 1400),
(62, 3, 1700),
(63, 1, 1500),
(63, 3, 1800),
(64, 1, 1700),
(64, 3, 2000),
(65, 1, 1900),
(65, 3, 2200)
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
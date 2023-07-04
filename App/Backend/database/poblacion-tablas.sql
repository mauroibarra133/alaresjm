/*
INSERT INTO tìpos_pagos (nombre) VALUES
('Efectivo'), ('Transferencia')

INSERT INTO tipos_entrega (nombre) VALUES
('Delivery'), ('Retirar en local')

INSERT INTO estados_pedido (nombre) VALUES
('Pendiente Confirmacion'), ('En preparacion'), ('Enviando'), ('Entregado')

INSERT INTO categorias_producto (nombre) VALUES
('Pizzas'),('Bebidas'),('Hamburguesas'),('Sandwiches'),('Papas'),('Pastas')

INSERT INTO productos (nombre,descripcion,precio,id_categoria) VALUES
('Muzza','Queso muzzarella',2200,1),
('Especial','Muzza, jamón, huevo y morrones',3000,1),
('Especial c/ anchoas','Muzza, jamón, huevo, morrones y anchoas',3200,1),
('Napolitana','Muzza, tomate y ajo',2800,1),
('Salchicha','Muzza, salchicha y salsa golf',2800,1),
('Roquefort','Muzza y Queso roquefort',3100,1),
('4 quesos','Muzza, roquefort, reggianito y cremoso',3200,1),
('Fugazzeta','Muzza y cebolla caramelizada',2900,1),
('Rúcula','Muzza, rucula,jamon crudo y tomate cherry',3800,1),
('Palmito','Muzza, palmitos y salsa golf',3800,1),
('Alares','Muzza, panceta ahumada y salsa barbacoa',3800,1),
('Hawaiana','Muzza, ananá y jamon',3700,1),
('Mila','Muzza, milanesa frita y salsa golf', 3500,1),
('Provolone','Muzza y  queso provolone',3500,1),
('Calabresa', 'Muzza y calabresa',3500,1),
('Super Queso','Queso cheddar',1300,3),
('Super Queso Doble','Queso cheddar',1600,3),
('Combinada','Cheddar y jamón / Cheddar y huevo',1500,3),
('Combinada Doble','Cheddar y jamón / Cheddar y huevo',1800,3),
('Clásica','Cheddar, tomate, lechuga y cebolla',1500,3),
('Clásica Doble','Cheddar, tomate, lechuga y cebolla',1800,3),
('XL','Cheddar, jamon,huevo, tomate y lechuga',1700,3),
('XL Doble','Cheddar, jamon,huevo, tomate y lechuga',2000,3),
('Americana','Cheddar,jamon,huevo,panceta ahumada y queso cheddar',1800,3),
('Americana Doble','Cheddar,jamon,huevo,panceta ahumada y queso cheddar',1800,3),
('BBQ','Salsa barbacoa, doble panceta ahumada y queso cheddar',1800,3),
('BBQ Doble','Salsa barbacoa, doble panceta ahumada y queso cheddar',2000,3),
('Mexicana','Cheddar, pepinos, salsa picante, lechuga, tomate y cebolla',1700,3),
('Mexicana Doble','Cheddar, pepinos, salsa picante, lechuga, tomate y cebolla',2000,3),
('Chimi','Cheddar, jamon, salsa chimi, tomate y lechuga',1900,3),
('Chimi Doble','Cheddar, jamon, salsa chimi, tomate y lechuga',2200,3),
('Gourmet','Jamon crudo, queso gratinado y rucula',2050,3),
('Gourmet Doble','Jamon crudo, queso gratinado y rucula',2350,3),
('4 quesos','Cheddar, reggianito, cremoso, roquefort, tomate y lechuga',2000,3),
('4 quesos Doble','Cheddar, reggianito, cremoso, roquefort, tomate y lechuga',2000,3),
('Criolla','Provoleta, pimientos, tomate y lechuga',2600,3),
('Criolla Doble','Provoleta, pimientos, tomate y lechuga',2900,3),
('Veggi','Lechuga, tomate, pepinos, huevo,cheddar, doble medallon',2000,3),
('Onion','Cheddar, doble panceta ahumada, aros de cebolla, salsa BBQ',2000,3),
('Onion Doble','Cheddar, doble panceta ahumada, aros de cebolla, salsa BBQ',2300,3),
('Alares','Triple carne, triple cheddar y triple panceta',2900,3),
('Mila Clasico', 'Cheddar,tomate y lechuga',2300,4),
('Mila Chimi', 'Cheddar,jamon, salsa chimi, tomate y lechuga',2600,4),
('Mila Americano', 'Cheddar,jamon,huevo, panceta, tomate y lechuga',2800,4),
('Coca Cola 500cc','',550,2),
('Coca Cola 1.5L','',800,2),
('Fanta 500cc','',550,2),
('Fanta 1.5L','',800,2),
('Sprite 500cc','',550,2),
('Sprite 1.5L','',800,2),
('Agua Mineral','',400,2),
('Agua Con Gas','',400,2),
('Agua Saborizada','',550,2),
('Pinta','',700,2),
('Media Pinta','',450,2),
('Papas Solas','Chicas',1300,5),
('Papas Solas','Grandes',1500,5),
('Papas c/ queso cheddar','Chicas',1400,5),
('Papas c/ queso cheddar','Grandes',1700,5),
('Papas c/ jamon y queso cheddar','Chicas',1500,5),
('Papas c/ jamon y queso cheddar','Grandes',1800,5),
('Papas c/  queso cheddar y panceta ','Chicas',1700,5),
('Papas c/  queso cheddar y panceta ','Grandes',2000,5),
('Papas c/ jamon, queso cheddar, huevo y panceta','Chicas',1700,5),
('Papas c/ jamon, queso cheddar, huevo y panceta','Grandes',2000,5),
('Papas c/ huevo','Chicas',1400,5),
('Papas c/ huevo','Grandes',1700,5),
('Papas c/ huevo y queso cheddar','Chicas',1500,5),
('Papas c/ huevo y queso cheddar','Chicas',1800,5),
('Papas c/ salsa BBQ','Chicas',1700,5),
('Papas c/ salsa BBQ','Chicas',2000,5),
('Papas Alares Chicas','Jamon,Queso, huevo y panceta',1900,5),
('Papas Alares Grandes','',1900,5),
('Patitas de pollo','Chicas',1400,5),
('Patitas de pollo','Grandes',1600,5),
('Patitas de pollo c/ cheddar','Chicas',1500,5),
('Patitas de pollo c/ cheddar','Grandes',1700,5),
('Bastones de muzza','Chicas',1400,5),
('Bastones de muzza','Chicas',1600,5),
('Bastones de muzza c/ cheddar','Chicas',1500,5),
('Bastones de muzza c/ cheddar','Chicas',1700,5),
*/



SELECT * FROM productos P
JOIN categorias_producto C ON C.id = P.id_categoria
WHERE C.nombre = 'Hamburguesas'

SELECT * FROM categorias_producto
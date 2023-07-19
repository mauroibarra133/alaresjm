CREATE TRIGGER ActualizarPuntos
ON pedidos
AFTER INSERT
AS
BEGIN
    UPDATE usuarios
    SET puntos = puntos + (SELECT puntos_parciales FROM inserted)
    WHERE usuarios.id = (SELECT id_usuario FROM inserted);
END;


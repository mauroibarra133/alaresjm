/*CREATE TRIGGER ActualizarPuntos
ON pedidos
AFTER INSERT
AS
BEGIN
    UPDATE usuarios
    SET puntos = puntos + (SELECT puntos_parciales FROM inserted)
    WHERE usuarios.id = (SELECT id_usuario FROM inserted);
END;

CREATE TRIGGER tr_actualizar_ranking
ON pedidos
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    -- Actualizar el ranking de puntos en la tabla RankingPuntos
    DELETE FROM RankingPuntos;

    INSERT INTO RankingPuntos (id_usuario, nombre, apellido, Puntos)
    SELECT U.id, U.nombre, U.apellido, SUM(P.puntos_parciales) as Puntos
    FROM usuarios U
    JOIN pedidos P ON U.id = P.id_usuario
    WHERE
        MONTH(P.fecha) = MONTH(GETDATE()) AND
        YEAR(P.fecha) = YEAR(GETDATE())
    GROUP BY U.id, U.nombre, U.apellido
    ORDER BY Puntos DESC;  -- Ordenar los resultados por los puntos de forma descendente
END;

-- Crear un índice no agrupado para mejorar el rendimiento de consultas en la tabla de ranking
CREATE NONCLUSTERED INDEX idx_ranking_puntos ON RankingPuntos (Puntos DESC);

*/
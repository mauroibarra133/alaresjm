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

/*
CREATE OR REPLACE FUNCTION actualizar_ranking()
RETURNS TRIGGER AS $$
BEGIN
    -- Actualizar el ranking de puntos en la tabla RankingPuntos
    DELETE FROM RankingPuntos;

    INSERT INTO RankingPuntos (id_usuario, nombre, apellido, Puntos)
    SELECT U.id, U.nombre, U.apellido, SUM(P.puntos_parciales) as Puntos
    FROM usuarios U
    JOIN pedidos P ON U.id = P.id_usuario
    WHERE
        EXTRACT(MONTH FROM P.fecha) = EXTRACT(MONTH FROM NOW()) AND
        EXTRACT(YEAR FROM P.fecha) = EXTRACT(YEAR FROM NOW())
    GROUP BY U.id, U.nombre, U.apellido
    ORDER BY Puntos DESC;  -- Ordenar los resultados por los puntos de forma descendente

    RETURN NULL;  -- No se necesita devolver ningún valor en este caso
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger que dispara la función después de INSERT, UPDATE y DELETE en la tabla pedidos
CREATE TRIGGER tr_actualizar_ranking
AFTER INSERT OR UPDATE OR DELETE
ON pedidos
FOR EACH STATEMENT
EXECUTE FUNCTION actualizar_ranking();



-- Crear la función que actualiza los puntos de los usuarios después de la inserción en la tabla pedidos
CREATE OR REPLACE FUNCTION actualizar_puntos()
RETURNS TRIGGER AS $$
BEGIN
    -- Actualizar los puntos de los usuarios
    UPDATE usuarios
    SET puntos = puntos + NEW.puntos_parciales
    WHERE usuarios.id = NEW.id_usuario;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear el trigger que dispara la función después de INSERT en la tabla pedidos
CREATE TRIGGER tr_actualizar_puntos
AFTER INSERT
ON pedidos
FOR EACH ROW
EXECUTE FUNCTION actualizar_puntos();


*/
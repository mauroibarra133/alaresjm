import { getConnection, queries } from '../database/';

export async function getDudas(req, res) {
    try {
        const pool = await getConnection();
        const filtro = req.query.estado;

        if (!filtro) {
            const result = await pool.query(queries.Dudas.getAllDudas);
            res.status(200).json(result.rows);
        } else {
            const result = await pool.query(queries.Dudas.getDudasByStatus, [filtro]);
            res.status(200).json(result.rows);
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export async function addDuda(req, res) {
    let { nombre, apellido, telefono, mail, descripcion } = req.body;

    try {
        const pool = await getConnection();
        await pool.query(queries.Dudas.addDuda, [nombre, apellido, telefono.toString(), mail, descripcion, 1]);
        res.json({ nombre, apellido, telefono, mail, descripcion });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

export async function getDudaById(req, res) {
    const { id } = req.params;
    try {
        const pool = await getConnection();
        const result = await pool.query(queries.Dudas.getDudaById, [id]);
        res.send(result.rows[0]);
    } catch (error) {
        res.status(500).json({ msg: "No se pudo obtener la duda" });
    }
}

export async function deleteDudaById(req, res) {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        await pool.query(queries.Dudas.deleteDuda, [id]);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateDudaById(req, res) {
    try {
        let { nombrecompleto, telefono, mail, duda, estado } = req.body;
        const nombre = nombrecompleto.split(' ')[0];
        const apellido = nombrecompleto.split(' ')[1];
        const { id } = req.params;

        if (!estado || estado == '') {
            estado = 1;
        }
        const pool = await getConnection();
        await pool.query(queries.Dudas.updateDudaById, [nombre, apellido, telefono.toString(), mail, duda, estado, id]);
        res.status(204).json({ msg: 'Duda actualizada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

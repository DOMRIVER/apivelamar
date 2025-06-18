import { conmysql } from "../db.js"
export const getCategoria=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from categoria where CAT_ESTADO="A"')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }

} 

export const getcategoriaxid = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conmysql.query('SELECT * FROM categoria c WHERE c.CAT_ID = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Categoria no encontrado' });
        }

        res.json(result[0]); // Enviamos el cliente encontrado
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }

    
}

export const addCategoria = async (req, res) => {
    const { 
        cat_nombre,
        cat_estado
    } = req.body;

    try {
        // Insertar nuevo cliente
        const [result] = await conmysql.query(
            `INSERT INTO categoria (
                CAT_NOMBRE,
                CAT_ESTADO
            ) VALUES (?, ?)`,
            [
                cat_nombre,
                cat_estado
            ]
        );

        res.status(201).json({
            message: 'Categoria agregado correctamente',
            id: result.insertId // Devuelve el ID del nuevo cliente insertado
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor al agregar cliente' });
    }
}

export const updateCategoria = async (req, res) => {
    const { id } = req.params;
    const { 
        cat_nombre
     } = req.body;

     try {
        const [exist] = await conmysql.query('SELECT * FROM categoria WHERE CAT_ID = ?', [id]);
        if (exist.length === 0) {
            return res.status(404).json({ message: 'categoria no encontrado' });
        }

        // Ejecuta la actualización
        await conmysql.query(
            `UPDATE categoria SET 
                CAT_NOMBRE = ?
            WHERE CAT_ID = ?`,
            [
                cat_nombre,
                id
            ]
        );

        res.json({ message: 'Pedido actualizado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const updateCategoriaEstado = async (req, res) => {
    const { id } = req.params;
    const { 
        cat_estado
     } = req.body;

     try {
        const [exist] = await conmysql.query('SELECT * FROM categoria WHERE CAT_ID = ?', [id]);
        if (exist.length === 0) {
            return res.status(404).json({ message: 'categoria no encontrado' });
        }

        // Ejecuta la actualización
        await conmysql.query(
            `UPDATE categoria SET 
                CAT_ESTADO = ?
            WHERE CAT_ID = ?`,
            [
                cat_estado,
                id
            ]
        );

        res.json({ message: 'Categoria actualizada correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}

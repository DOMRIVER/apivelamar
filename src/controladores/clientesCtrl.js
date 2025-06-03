import { conmysql } from "../db.js"
export const getClientes=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from clientes')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 

export const getclientesxid = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conmysql.query('SELECT * FROM clientes c WHERE c.cli_id = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.json(result[0]); // Enviamos el cliente encontrado
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }

    
}

export const updateCliente = async (req, res) => {
    const { id } = req.params;
    const { 
        cli_identificacion,
        cli_nombre,
        cli_telefono,
        cli_correo,
        cli_direccion,
        cli_pais,
        cli_ciudad
     } = req.body;

     try {
        // Verifica si el cliente existe
        const [exist] = await conmysql.query('SELECT * FROM clientes WHERE cli_id = ?', [id]);
        if (exist.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        // Ejecuta la actualización
        await conmysql.query(
            `UPDATE clientes SET 
                cli_identificacion = ?, 
                cli_nombre = ?, 
                cli_telefono = ?, 
                cli_correo = ?, 
                cli_direccion = ?, 
                cli_pais = ?, 
                cli_ciudad = ? 
            WHERE cli_id = ?`,
            [
                cli_identificacion,
                cli_nombre,
                cli_telefono,
                cli_correo,
                cli_direccion,
                cli_pais,
                cli_ciudad,
                id
            ]
        );

        res.json({ message: 'Cliente actualizado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}
import { conmysql } from "../db.js"
export const getUsuarios=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from usuarios')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 

export const addUsuario = async (req, res) => {
    const { 
        usu_cedula,
        usu_nombres,
        usu_apellidos,
        usu_direccion,
        usu_telefono,
        usu_correo,
        usu_usuario,
        usu_clave,
        per_id,
        usu_estado
    } = req.body;

    try {
        // Insertar nuevo cliente
        const [result] = await conmysql.query(
            `INSERT INTO usuarios (
                USU_CEDULA,
                USU_NOMBRES,
                USU_APELLIDOS,
                USU_DIRECCION,
                USU_TELEFONO,
                USU_CORREO,
                USU_USUARIO,
                USU_CLAVE,
                PER_ID,
                USU_ESTADO
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                usu_cedula,
                usu_nombres,
                usu_apellidos,
                usu_direccion,
                usu_telefono,
                usu_correo,
                usu_usuario,
                usu_clave,
                per_id,
                usu_estado
            ]
        );

        res.status(201).json({
            message: 'Usuario agregado correctamente',
            id: result.insertId // Devuelve el ID del nuevo cliente insertado
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor al agregar cliente' });
    }
}
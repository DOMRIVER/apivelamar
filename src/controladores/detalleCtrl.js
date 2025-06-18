import { conmysql } from "../db.js"

export const addDetallePedido = async (req, res) => {
    const { 
        ped_id,
        det_cantidad,
        det_precio,
        det_total,    
        prod_id
    } = req.body;

    try {
        // Insertar nuevo cliente
        const [result] = await conmysql.query(
            `INSERT INTO detalle (
                PED_ID,
                DET_CANTIDAD,
                DET_PRECIO,
                DET_TOTAL,    
                PRO_ID
                
            ) VALUES (?, ?, ?, ?, ?)`,
            [
                ped_id,
                det_cantidad,
                det_precio,
                det_total,    
                prod_id
            ]
        );

        res.status(201).json({
            message: 'detalle pedido agregado correctamente',
            id: result.insertId // Devuelve el ID del nuevo cliente insertado
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor al agregar detalle Pedido' });
    }
}

export const getDetalle=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from detalle')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 

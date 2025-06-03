import { conmysql } from "../db.js"
export const getProductos=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from productos')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 

export const getproductosxid = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conmysql.query('SELECT * FROM productos c WHERE c.prod_id = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(result[0]); // Enviamos el cliente encontrado
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }

    
}
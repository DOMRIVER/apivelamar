import { conmysql } from "../db.js"
export const getCategoria=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from categoria')
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

import { conmysql } from "../db.js"
export const getAccesos=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from accesos')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 
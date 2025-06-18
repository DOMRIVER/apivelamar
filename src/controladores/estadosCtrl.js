import { conmysql } from "../db.js"
export const getEstados=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from estadoventa')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
}
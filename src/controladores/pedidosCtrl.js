import { conmysql } from "../db.js"

export const addPedido = async (req, res) => {
  const {
    usu_id,
    estv_id,
    ped_fecha,
    ped_total,
    ped_estado
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Imagen no proporcionada' });
  }

  const ped_imagen = req.file.filename;

  try {
    const [result] = await conmysql.query(
      `INSERT INTO pedidos (
        USU_ID,
        ESTV_ID,
        PED_FECHA,
        PED_TOTAL,
        PED_ESTADO,
        PED_IMAGEN
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        usu_id,
        estv_id,
        ped_fecha,
        ped_total,
        ped_estado,
        ped_imagen
      ]
    );

    res.status(201).json({
      message: 'Pedido agregado correctamente',
      id: result.insertId,
      imagen: ped_imagen
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor al agregar producto' });
  }
};

export const getPedidos=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from pedidos')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 

export const getpedidoxid = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conmysql.query('SELECT * FROM pedidos WHERE PED_ID = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }

        res.json(result[0]); // Enviamos el cliente encontrado
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }

    
}

export const updatePedido = async (req, res) => {
    const { id } = req.params;
    const { 
        estv_id
     } = req.body;

     try {
        const [exist] = await conmysql.query('SELECT * FROM pedidos WHERE PED_ID = ?', [id]);
        if (exist.length === 0) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }

        // Ejecuta la actualización
        await conmysql.query(
            `UPDATE pedidos SET 
                ESTV_ID = ?
            WHERE PED_ID = ?`,
            [
                estv_id,
                id
            ]
        );

        res.json({ message: 'Pedido actualizado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}





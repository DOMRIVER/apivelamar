import { conmysql } from "../db.js"

export const getProductos=async(req,res)=>{
    try {
        const [result] = await conmysql.query('select * from producto')
        res.json({cant:result.length, data:result})
    }catch(error) {
        return res.status(500).json({message:'Error en el servidor'})
    }
} 

export const getproductosxid = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await conmysql.query('SELECT * FROM producto c WHERE c.PROD_ID = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(result[0]); // Enviamos el cliente encontrado
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor' });
    }

    
}

export const addProducto = async (req, res) => {
    const { 
        cat_id,
        prod_codigo,
        prod_nombre,
        prod_stock,
        prod_precio,
        prod_imagen,
        prod_estado
    } = req.body;

    try {
        // Insertar nuevo cliente
        const [result] = await conmysql.query(
            `INSERT INTO producto (
                CAT_ID,
                PROD_CODIGO,
                PROD_NOMBRE,
                PROD_STOCK,
                PROD_PRECIO,
                PROD_IMAGEN,
                PROD_ESTADO
            ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                cat_id,
                prod_codigo,
                prod_nombre,
                prod_stock,
                prod_precio,
                prod_imagen,
                prod_estado
            ]
        );

        res.status(201).json({
            message: 'Producto agregado correctamente',
            id: result.insertId // Devuelve el ID del nuevo cliente insertado
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor al agregar cliente' });
    }
}

export const subirImagenYAgregarProducto = async (req, res) => {
  const {
    cat_id,
    prod_codigo,
    prod_nombre,
    prod_stock,
    prod_precio,
    prod_estado
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Imagen no proporcionada' });
  }

  const prod_imagen = req.file.filename;

  try {
    const [result] = await conmysql.query(
      `INSERT INTO producto (
        CAT_ID,
        PROD_CODIGO,
        PROD_NOMBRE,
        PROD_STOCK,
        PROD_PRECIO,
        PROD_IMAGEN,
        PROD_ESTADO
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        cat_id,
        prod_codigo,
        prod_nombre,
        prod_stock,
        prod_precio,
        prod_imagen,
        prod_estado
      ]
    );

    res.status(201).json({
      message: 'Producto agregado correctamente',
      id: result.insertId,
      imagen: prod_imagen
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor al agregar producto' });
  }
};


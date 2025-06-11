import {Router} from 'express'
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {getProductos, getproductosxid, subirImagenYAgregarProducto } from '../controladores/productosCtrl.js'
const router=Router();

//armar nuestras rutas

router.get('/productos',getProductos)
router.get('/productos/:id', getproductosxid)
// Configuración de multer aquí
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'src/imagenes';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    cb(null, filename);
  }
});
const upload = multer({ storage });

router.post('/productow', upload.single('foto'), subirImagenYAgregarProducto);
/* 
router.put('/actualizarproductos/:id', updateProducto) */


export default router
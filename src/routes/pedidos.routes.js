import {Router} from 'express'
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { addPedido, getPedidos, getpedidoxid, updatePedido } from '../controladores/pedidosCtrl.js'

const router=Router();

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

router.post('/newpedido', upload.single('foto'), addPedido);
router.get('/pedidos',getPedidos)
router.get('/pedidos/:id', getpedidoxid)
router.put('/actualizarpedido/:id', updatePedido);
/* 
router.put('/actualizarproductos/:id', updateProducto) */


export default router
import {Router} from 'express'
import {addDetallePedido, getDetalle } from '../controladores/detalleCtrl.js'
const router=Router();

router.put('/nuevodetalle', addDetallePedido);
router.get('/detalle',getDetalle)

export default router
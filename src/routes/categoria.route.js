import {Router} from 'express'
import {getCategoria, getcategoriaxid } from '../controladores/categoriaCtrl.js'
const router=Router();

router.get('/categoria',getCategoria)
router.get('/categoria/:id', getcategoriaxid)
export default router
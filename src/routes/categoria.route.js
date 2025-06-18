import {Router} from 'express'
import {getCategoria, getcategoriaxid, addCategoria, updateCategoria, updateCategoriaEstado } from '../controladores/categoriaCtrl.js'
const router=Router();

router.get('/categoria',getCategoria)
router.get('/categoria/:id', getcategoriaxid)
router.post('/nuevacategoria', addCategoria);
router.put('/actualizarcategoria/:id', updateCategoria);
router.put('/eliminarcategoria/:id', updateCategoriaEstado);
export default router
import {Router} from 'express'
import {getUsuarios, addUsuario, getUsuariosE, getusuarioxid } from '../controladores/usuariosCtrl.js'
const router=Router();

router.get('/usuarios',getUsuarios)
router.get('/usuariosE',getUsuariosE)
router.get('/usuarios/:id', getusuarioxid)
router.put('/nuevousuario', addUsuario);

export default router
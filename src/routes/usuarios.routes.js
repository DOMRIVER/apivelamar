import {Router} from 'express'
import {getUsuarios, addUsuario } from '../controladores/usuariosCtrl.js'
const router=Router();

router.get('/usuarios',getUsuarios)
router.put('/nuevousuario', addUsuario);

export default router
import {Router} from 'express'
import {getEstados } from '../controladores/estadosCtrl.js'
const router=Router();

router.get('/estados',getEstados)

export default router
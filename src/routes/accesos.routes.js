import {Router} from 'express'
import {getAccesos } from '../controladores/accesosCtrl.js'
const router=Router();

router.get('/accesos',getAccesos)

export default router
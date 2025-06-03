import {Router} from 'express'
import {getClientes, getclientesxid, updateCliente } from '../controladores/clientesCtrl.js'
const router=Router();

//armar nuestras rutas

router.get('/clientes',getClientes)
router.get('/clientes/:id', getclientesxid)
router.put('/actualizarclientes/:id', updateCliente);


export default router
import {Router} from 'express'
import {getProductos, getproductosxid } from '../controladores/productosCtrl.js'
const router=Router();

//armar nuestras rutas

router.get('/productos',getProductos)
router.get('/productos/:id', getproductosxid)
/* 
router.put('/actualizarproductos/:id', updateProducto) */


export default router
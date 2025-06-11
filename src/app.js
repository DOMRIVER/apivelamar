import express from 'express'
import cors from 'cors'
import clientesRoutes from './routes/clientes.routes.js'
import productosRoutes from './routes/productos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import accesosRoutes from './routes/accesos.routes.js'
import categoriaRoutes from './routes/categoria.route.js'
import path from 'path'
const app=express();
//para que no genere conflito entre servicios
app.use(cors());

//interpreta objetos json
app.use(express.json());
//espacio para rutas
app.use('/api',clientesRoutes);
app.use('/api',productosRoutes);
app.use('/api',usuariosRoutes);
app.use('/api',accesosRoutes);
app.use('/api',categoriaRoutes);
app.use('/imagenes', express.static(path.resolve('src/imagenes')));
//controlar errorescategoriaRoutes
app.use((req,resp,next)=>{
    resp.status(400).json({
        message:'Endpoint not found'
    })
})

export default app;
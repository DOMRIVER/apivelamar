import express from 'express'
import cors from 'cors'
import clientesRoutes from './routes/clientes.routes.js'
import productosRoutes from './routes/productos.routes.js'

const app=express();
//para que no genere conflito entre servicios
app.use(cors());

//interpreta objetos json
app.use(express.json());
//espacio para rutas
app.use('/api',clientesRoutes);
app.use('/api',productosRoutes);

//controlar errores
app.use((req,resp,next)=>{
    resp.status(400).json({
        message:'Endpoint not found'
    })
})

export default app;
// Importación de módulos de versiones anteriores. 
require('dotenv').config()
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuariosRoute')
const authRoutes = require('./routes/authRoute')
const productosRoute = require('./routes/productosRoute')


// Creando el servidor 
const app = express();

// Deshabilitar cors/ permitir acceso cors
app.use(cors())

// Conectar a mongodb
mongoose.connect(process.env.MONGO_URL)

// Habilitar express.json (también se puede usar body parser)
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// RUTAS 
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/productos', productosRoute);


// puerto yt arranque del servidor 
app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor funcionando')
})
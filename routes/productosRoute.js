// Rutas para crear usuarios 
const express = require('express');
const router = express.Router();
const productoControllers = require('../controllers/productoController')


// crear juego
router.post('/', productoControllers.crearProducto); 

// Obtener lista de juegos
router.get('/', productoControllers.obtenerProductos); 

// Obtener un juego
router.get('/:id', productoControllers.obtenerProducto) 

//modificar un juego
router.put('/:id', productoControllers.modificarProducto); 

// Borrar un juego 
router.delete('/:id', productoControllers.borrarProducto)

module.exports = router;
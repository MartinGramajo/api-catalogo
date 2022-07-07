// Rutas para crear usuarios 
const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const { check } = require('express-validator');



// api/usuarios
// Crear usuario
router.post('/',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),  
    check('email', 'Agrega un Email Valido').isEmail(), 
    check('password', 'El password debe tener un minimo de 6 caracteres').isLength({min: 6}), 
], usuarioController.crearUsuario)

// traer lista de usuarios 
router.get('/', usuarioController.obtenerUsuarios)

// Obtener un usuario 
router.get('/:id', usuarioController.obtenerUsuario) 

// Modificar usuario 
router.put('/:id', usuarioController.modificarUsuario)

// metodo para encontrar un usuario y borrarlo.
router.delete('/:id', usuarioController.borrarUsuario) 

module.exports = router;
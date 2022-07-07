// Rutas para crear usuarios 
const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require('express-validator');

// Registro publico de usuarios 
// Registro de Usuarios Publico (el usuario se registra solo)
router.post('/register', [
    check('name', 'El nombre es obligatorio').not().isEmpty(), 
    check('email', 'Agrega un Email Valido').isEmail(), 
    check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min: 6 }),
],
    authController.registrar
) 

// Login(generando token)
router.post('/login', [
    check('email', 'Agrega un Email Valido').isEmail(), // 
    check('password', 'El password debe tener un minimo de 6 caracteres').isLength({ min: 6 }), 
    ],
    authController.login
)

//Obtener usuario autenticado
router.get('/', authController.obtenerUsuarioAutenticado);

module.exports = router;
const express = require('express');
const router = express.Router();
const fetchAPIController = require('../../controllers/api/fetchApiController');

//Rutas
//Listado de todos los usuarios
router.get('/users', fetchAPIController.getAll);
router.get('/users/:id', fetchAPIController.getUserById);

module.exports = router;
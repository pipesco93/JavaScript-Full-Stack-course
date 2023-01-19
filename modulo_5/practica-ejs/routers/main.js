//  Se requiere espres y se ejecuta Router de express
const express = require('express');
const routerMain = express.Router();

//Se requiere lo exportado en mainControllers
const mainontroller = require('../controllers/mainController.js')

// Se crean las rutas para llamar los metodos creados en controlles y cargar las paginas
routerMain.get('/', mainontroller.index);
routerMain.get('/detalle-menu', mainontroller.detallesMenu);

// Se exporta el modulo que sera usado en app.js
module.exports = routerMain;

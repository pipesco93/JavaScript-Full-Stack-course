const express = require('express');
const routerMain = express.Router();
const mainontroller = require('../controllers/mainController.js')


routerMain.get('/', mainontroller.index);
routerMain.get('/about', mainontroller.about);

module.exports = routerMain;

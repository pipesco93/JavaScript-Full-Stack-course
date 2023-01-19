// Se requiere el path para trabajar bien con las rutas y que funcione en cualquier computador
const path = require('path');

// Se crea la ruta home
const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

// Se crea la ruta detalles
const detallesMenu = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/detallesMenu.html'));
};

// Se crea el objeto que se va a enviar a main.js en la carpet arouters
const controlador = {
    index,
    detallesMenu
}

// Se expora la varale controlador
module.exports =controlador;
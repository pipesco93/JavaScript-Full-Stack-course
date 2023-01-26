// Se rquier yejcuta Express
const express = require('express');
const app = express();

// Se requiere path para poder majerar rutas
const path = require('path');
// Se requiere morgan para poder ven en  ash la actividad eel servidor
const morgan = require('morgan')

// Se define la configuracion de ejs
app.set('view engine', 'ejs')

// Se requiere ysesa el archivo main de la carpeta router, que es dondese encuentran todas las direcciones del sitio
const routerMain = require('./routers/main.js')
app.use(routerMain);

// Se usa morgan
app.use(morgan('dev'));

// Se da permiso de uso a express de la carpeta estatica public
app.use(express.static("public"));



// Se crea el puerto y se escucha este
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto ${port}`);
});
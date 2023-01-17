const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const mainontroller = require('./controllers/mainController.js')



app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto ${port}`);  
});
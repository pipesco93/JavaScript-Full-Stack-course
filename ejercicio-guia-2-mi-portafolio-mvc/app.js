const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')

const routerMain = require('./routers/main.js')

app.use(morgan('dev'));
app.use(routerMain);

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;



app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto ${port}`);
});
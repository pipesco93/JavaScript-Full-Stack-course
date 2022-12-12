const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('¡Hola mundo!');
});

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
   });


app.listen(3001, () =>
 console.log('Servidor corriendo')
);
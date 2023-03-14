const express = require('express');
const morgan = require('morgan');

const routesAlbumes = require('./src/routes/albumesRoutes');

const PORT = process.env.PORT || 3001;


const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.use(routesAlbumes);

app.listen(PORT,() => console.log(`Server listening on port ${PORT}`));
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const routesAlbumes = require('./src/routes/albumesRoutes');
const routesArtists = require('./src/routes/artistRoutes');
const PORT = process.env.PORT || 3001;


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(routesAlbumes);
app.use(routesArtists);
app.listen(PORT,() => console.log(`Server listening on port ${PORT}`));
const path = require('path');


const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
};

const about = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
};


const controlador = {
    index,
    about
}


module.exports =controlador;
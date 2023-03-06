const db = require("../database/models")

const listMovies = (req, res) => {
    db.Pelicula.findAll()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

const moviesController = {
    listMovies,
};

module.exports = moviesController;
const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    'createMovie': (req, res) => {
        console.log(req.body);
        const newMovie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }

        db.Movie.create(newMovie)
            .then((newMovie) => res.status(200).json(newMovie))
            .catch((error) => res.send(error))
    },
};
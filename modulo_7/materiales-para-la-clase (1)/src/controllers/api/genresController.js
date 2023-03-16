const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    'list': (req, res) => {
        db.Genre
            .findAll()
            .then(genres => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        totatl: genres.length,
                        url: "api/genres"
                    },
                    data: genres
                })
            })
    },
    'detail': (req, res) => {
        db.Genre
            .findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    data: genre,
                    satus: 200,
                    url: `api/genres/${req.params.id}`
                });
            });
    }
};



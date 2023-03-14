const db = require('../database/models');

const getAllAlbumes =  (req,res) => {
    db.Album.findAll()
        .then((datito) => {
            res.json(datito);
        })
        .catch((error) => {
            res.send(error)
        })
};


module.exports = {
    getAllAlbumes
}
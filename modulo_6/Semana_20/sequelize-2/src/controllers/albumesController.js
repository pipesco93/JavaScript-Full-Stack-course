const db = require('../database/models');
const Op = db.Sequelize.Op;

const getAllAlbumes = (req,res) => {
    const {name} = req.query;
    if(name){
        db.Album.findAll({
            where: {
                titulo: {[Op.like]:`%${name}%`}
            },
            include: [
                {association: 'artist'}
            ]
        })
            .then( (data) => {
                //res.json(data);
                res.render('albumes',{'album': data})
            })
            .catch((error) => {
                res.send(error);
            })
    }else{
        db.Album.findAll({
            include: [
                {association: 'artist'}
            ]
        })
        .then( (data) => {
            //res.json(data);
            res.render('albumes',{'album': data})
        })
        .catch((error) => {
            res.send(error);
        })
    }
}
    

const getAlbumById = (req,res) => {
    const {id} = req.params;
    db.Album.findByPk(id)
        .then((data) => {
            res.json(data);
        }).catch((error) => {
            res.send(error);
        }) 
}

module.exports = {
    getAllAlbumes,
    getAlbumById
}
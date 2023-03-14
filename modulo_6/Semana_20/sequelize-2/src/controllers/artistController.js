const db = require('../database/models');
const Op = db.Sequelize.Op;

const getAllArtist = (req,res) => {
    const {name} = req.query;
    if(name){
        db.Artist.findAll({
            where: {
                nombre: {[Op.like]:`%${name}%`}
            },
            include: [
                {association: 'album'}
            ]
        })
            .then( (data) => {
                res.json(data);
            })
            .catch((error) => {
                res.send(error);
            })
    }else{
        db.Artist.findAll({
            include: [
                {association: 'album'}
            ]
        })
        .then( (data) => {
            const json = data.map((elem) => {
                return elem.album.length > 0 ?
                    {
                        name: elem.nombre,
                        album: elem.album.map(e => e.titulo)
                    }:
                        {
                        name: elem.nombre
                        }
                // return {
                    
                //     name: elem.nombre,
                //     album: elem.album.map((e) => e.titulo)
                // }
            })
            res.json(json);
        })
        .catch((error) => {
            res.send(error);
        })
    }
}

const newArtist = (req,res) => {
    res.render('create-artist.ejs');
}
const createArtist = (req,res) => {
    const { name } = req.body;
    db.Artist.create({
        nombre: name
    }).then(() => res.redirect('/artist')).catch((error) => res.send(error));
}
const editArtist = (req,res) => {
    res.render('edit-artist.ejs');
};
const updateArtist = (req,res) => {
    const {id, name} = req.body;
    if(id){
        db.Artist.update(
            {
                nombre: name
            },
            {
                where: { id }
            }
        ).then(() => res.redirect('/artist')).catch((error) => res.send(error));
    }else{
        res.send('id cannot by empty');
    }
}
module.exports = {
    getAllArtist,
    newArtist,
    createArtist,
    editArtist,
    updateArtist
}
module.exports = (sequelize, dataTypes) => {
    const Artist = sequelize.define("Artist", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,            
        },

        nombre: {
            type: dataTypes.STRING
        },
    },
    {
        tableName: 'artistas',
        timestamps: false
    });
    //tiene muchos: un artista tiene muchos albumes
    Artist.associate = (models) => {
        Artist.hasMany(models.Album, {
            as: 'album',
            foreignKey: 'id_artista'
        })
    }

    return Artist;
}
module.exports = (sequelize, dataTypes) => {
    const Album = sequelize.define("Album", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        titulo: {
            type: dataTypes.STRING
        },
    },
    {
        tableName: 'albumes',
        timestamps: false
    });

    //belongsTo: pertenece a un album pertenece A un artista
    Album.associate = (models) => {
        Album.belongsTo(models.Artist, {
            as: 'artist',
            foreignKey: 'id_artista'
        });
    }

    return Album;
}
module.exports = (sequelize, dataTypes) => {
    
    const Pelicula = sequelize.define("Pelicula",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        title : {
            type: dataTypes.STRING,
        },
        rating : {
            type: dataTypes.FLOAT,
        },
        awards : {
            type: dataTypes.INTEGER,
        },
        realease_date : {
            type: dataTypes.DATE
        }
    },
    {
    tableName: 'movies',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    return Pelicula;
}

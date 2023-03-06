module.exports = (sequelize, dataTypes) => {
    
    const Genero = sequelize.define("Pelicula",
    {
    // Configuraciones de las columnas.
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            auntoIncrement: true
        },
        name : {
            type: dataTypes.STRING,
        },
        ranking : {
            type: dataTypes.INTEGER
        }
    },
    {
    tableName: 'genres',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });

    return Genero;
}
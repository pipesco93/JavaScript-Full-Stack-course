module.exports = (sequelize, dataTypes) => {
    const Album = sequelize.define("Album",{
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: dataTypes.STRING,
        }
    },
    {
        tableName: 'albumes',
        timestamps: false
    });
    return Album;
}
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    static associate(models) {
      // Define association here
      Foto.belongsToMany(models.Etiqueta, {
        through: 'fotoetiquetas', 
        foreignKey: 'foto_id'
      });
    }
  }
  Foto.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    calificacion: DataTypes.FLOAT,
    ruta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Foto',
    tableName: 'fotos'
  });
  return Foto;
};

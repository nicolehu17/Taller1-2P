'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Etiqueta extends Model {
    static associate(models) {
      // Define association here
      Etiqueta.belongsToMany(models.Foto, { 
        through: 'fotoetiquetas', 
        foreignKey: 'etiqueta_id' 
      });
    }
  }
  Etiqueta.init({
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Etiqueta',
    tableName: 'etiquetas'
  });
  return Etiqueta;
};

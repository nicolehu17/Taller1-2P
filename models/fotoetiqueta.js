'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FotoEtiqueta extends Model {
    static associate(models) {
      // Define association here
    }
  }
  FotoEtiqueta.init({
    foto_id: DataTypes.INTEGER,
    etiqueta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FotoEtiqueta',
    tableName: 'fotoetiquetas'
  });
  return FotoEtiqueta;
};

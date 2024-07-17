'use strict';
const Foto = require('../models').foto;
const Etiqueta = require('../models').etiqueta;

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class etiqueta extends Model {
    
    static associate(models) {
      // define association here
      models.etiqueta.belongsToMany(models.foto, { through: 'fotoetiquetas',
      foreignKey: "etiqueta_id" });
      }
  }
  etiqueta.init({
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'etiqueta',
    tableName: 'etiquetas'
  });
  return etiqueta;
};
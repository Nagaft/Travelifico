// models/City.js
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class City extends Model {}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Puedes agregar más propiedades según sea necesario
  },
  {
    sequelize,
    modelName: 'City', // Este debe coincidir con el nombre de la tabla en tu base de datos
    timestamps: false, // Si no necesitas timestamps, puedes omitir esta línea
  }
);

module.exports = City;

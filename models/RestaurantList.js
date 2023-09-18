const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class RestaurantList extends Model {}

RestaurantList.init(
  {
    // Define las columnas de la tabla RestaurantList
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'restaurant_list',
    timestamps: false,
  }
);

module.exports = RestaurantList;

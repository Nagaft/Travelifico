const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');



class RestaurantDetails extends Model {}

RestaurantDetails.init(
  {
    // Define las columnas de la tabla RestaurantDetails
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reservation_hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'restaurant_details',
    timestamps: false,
  }
);

module.exports = RestaurantDetails;

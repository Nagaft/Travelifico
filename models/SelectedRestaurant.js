const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class SelectedRestaurant extends Model {}

SelectedRestaurant.init(
  {
    // Define las columnas de la tabla SelectedRestaurant
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    booking_hours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviews: {
      type: DataTypes.TEXT, // Cambié el tipo de datos a TEXT para almacenar reseñas largas
      allowNull: false, // Puedes cambiar esto a false si se requiere una reseña para cada restaurante
    },
  },
  {
    sequelize,
    modelName: 'selected_restaurant',
    timestamps: false,
  }
);

module.exports = SelectedRestaurant;


module.exports = SelectedRestaurant;

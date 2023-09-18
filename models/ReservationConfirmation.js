const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class ReservationConfirmation extends Model {}

ReservationConfirmation.init(
  {
    // Define las columnas de la tabla ReservationConfirmation
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scheduled_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurant_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reward_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'reservation_confirmation',
    timestamps: false,
  }
);

module.exports = ReservationConfirmation;

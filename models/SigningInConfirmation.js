const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class SigningInConfirmation extends Model {}

SigningInConfirmation.init(
  {
    // Define las columnas de la tabla SigningInConfirmation
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    welcome_message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gift_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    continue_button_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'signing_in_confirmation',
    timestamps: false,
  }
);

module.exports = SigningInConfirmation;

const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class CreateAccount extends Model {}

CreateAccount.init(
  {
    // Define las columnas de la tabla CreateAccount
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Asegura que la contraseña tenga al menos 8 caracteres
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true, // Puedes cambiar esto a 'false' si se requiere un número de teléfono obligatorio
    },
  },
  {
    sequelize,
    modelName: 'create_account',
    timestamps: false,
  }
);

module.exports = CreateAccount;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
        len: [8], // Ensure the password is at least 8 characters long
      },
    },
    phoneNumber: {
      type: DataTypes.STRING, // Use DataTypes.STRING for phone numbers
      allowNull: false,
      validate: {
        is: /^\d{10}$/, // Use the "is" validation for custom regular expression validation for phone numbers
      },
    }, 
  },
  {

    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize, // Use the sequelize instance you imported
    modelName: 'user', // Set the model name
    timestamps: false, // Disable timestamps (createdAt and updatedAt columns)
    freezeTableName: true, // Use the model name as the table name
    underscored: true, // Use snake_case for column names
  }
);

module.exports = User;

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
        isEmail: true, // Ensure the email format is valid
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },

    phoneNumber: {
      type: DataTypes.STRING, // Use DataTypes.STRING for phone numbers
      allowNull: false,
      validate: {
        is: /^\d{10}$/ // Use the "is" validation for custom regular expression validation
      },
    }, 
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }
    },
    {
 main
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);
//comments
module.exports = User;

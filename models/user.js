const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
  }, 
{
  hooks: {
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    }
  }
},
  {
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = User;

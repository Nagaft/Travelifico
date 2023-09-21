const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
class User extends Model {
  async comparePassword(password) {
    // try {
    //   const isMatch = await bcrypt.compare(password, this.password);
    //   return isMatch;
    // } catch (error) {
    //   console.error('Error comparing passwords:', error);
    //   throw error;
    // }
    return bcrypt.compareSync(password, this.password);
  }
}
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{10}$/, // Custom regular expression validation for phone numbers
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
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);
module.exports = User;
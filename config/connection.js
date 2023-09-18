const Sequelize = require('sequelize');
const config = require('./config.json');

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql', 
    port: 3001,
  }
);

module.exports = sequelize;


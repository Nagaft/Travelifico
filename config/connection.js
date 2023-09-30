// connection.js
const Sequelize = require("sequelize");

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DATABASE_URL, 
  {
    host:'localhost',
    dialect: process.env.DB_DIALECT || 'mysql', 
    port: process.env.DB_PORT || 3306,
  }
);

module.exports = sequelize; // Exporta la instancia de Sequelize



 
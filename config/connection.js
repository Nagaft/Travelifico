// connection.js
const { Sequelize } = require("sequelize");

const env_parse = require('dotenv').config();
if (env_parse.error) {
  console.log(env_parse.error);
} else {
  console.log(env_parse.parsed)
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql", 
    port: process.env.DB_PORT || 3306
  }
);

module.exports = sequelize; // Exporta la instancia de Sequelize



 
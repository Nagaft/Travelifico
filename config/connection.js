// connection.js
const { Sequelize } = require("sequelize");

const env_parse = require('dotenv').config();
if (env_parse.error) {
  console.log(env_parse.error);
} else {
  console.log(env_parse.parsed)
}

const db_options = {
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  port: process.env.DB_PORT || 3306
};

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, db_options)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    db_options
  );

module.exports = sequelize; // Exporta la instancia de Sequelize




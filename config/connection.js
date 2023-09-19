

// connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize; // Exporta la instancia de Sequelize




// const sequelize = require('./connection'); // Asegúrate de importar tu instancia de Sequelize

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión a la base de datos establecida con éxito.');

//     // Aquí puedes realizar otras operaciones con la base de datos, como consultar datos.
//     // Por ejemplo: const result = await TuModelo.findAll();
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error);
//   }
// })();

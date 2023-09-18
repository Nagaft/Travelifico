const { City } = require('../models');


const cityData = [
  {
    name: 'New York',
  },
  {
    name: 'Los Angeles',
  },
  {
    name: 'Chicago',
  },
  {
    name: 'Miami',
  },
  // Agrega más ciudades según sea necesario
];

const seedCity = () => City.bulkCreate(cityData);

module.exports = seedCity;

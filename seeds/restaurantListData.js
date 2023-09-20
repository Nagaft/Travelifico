const { RestaurantList } = require('../models');

const restaurantListData = [
  {
    name: 'Restaurant X',
    city_id: 1, // Reemplaza con el ID de la ciudad relacionada
  },
  {
    name: 'Restaurant Y',
    city_id: 2, // Reemplaza con el ID de la ciudad relacionada
  },
  // Puedes agregar más restaurantes aquí
];

const seedRestaurantLists = () => RestaurantList.bulkCreate(restaurantListData);

module.exports = seedRestaurantLists;

const { SelectedRestaurant } = require('../models');

const selectedRestaurantData = [
  {
    name: 'Restaurant A',
    cuisine: 'Italian',
    service_hours: '10:00 AM - 9:00 PM',
    address: '123 Main St, Cityville',
    reviews: 'Great food and atmosphere!',
  },
  {
    name: 'Restaurant B',
    cuisine: 'Japanese',
    service_hours: '11:00 AM - 10:00 PM',
    address: '456 Elm St, Townsville',
    reviews: 'Best sushi in town!',
  },
  // Puedes agregar más restaurantes aquí
];

const seedSelectedRestaurants = () => SelectedRestaurant.bulkCreate(selectedRestaurantData);

module.exports = seedSelectedRestaurants;

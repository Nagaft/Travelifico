const { RestaurantDetails } = require('../models');

const restaurantDetailsData = [
  {
    restaurant_id: 1, // Reemplaza con el ID del restaurante relacionado
    booking_hours: '12:00 PM - 8:00 PM',
  },
  {
    restaurant_id: 2, // Reemplaza con el ID del restaurante relacionado
    booking_hours: '11:30 AM - 9:00 PM',
  },
  // Puedes agregar más detalles de restaurantes aquí
];

const seedRestaurantDetails = () => RestaurantDetails.bulkCreate(restaurantDetailsData);

module.exports = seedRestaurantDetails;

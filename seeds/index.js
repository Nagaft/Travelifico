const sequelize = require('../config/connection');
const seedCity = require('./cityData');
const seedReservationConfirmations = require('./reservationConfirmationData');
const seedRestaurantDetails = require('./restaurantDetailsData');
const seedRestaurantLists = require('./restaurantListData');
const seedSelectedRestaurants = require('./selectedRestaurantData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCity();
  await seedReservationConfirmations();
  await seedRestaurantDetails();
  await seedRestaurantLists();
  await seedSelectedRestaurants();

  process.exit(0);
};

seedAll();


const sequelize = require('../config/connection');
const User  = require('../models/user');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  User.create();
  process.exit(0);
};

seedDatabase();

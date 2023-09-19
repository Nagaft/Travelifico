const path = require('path');
const express = require('express');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const userRoutes = require('./controllers/api/userRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on puertos: 3001'));
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
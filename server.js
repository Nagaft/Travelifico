const path = require('path');
const express = require('express');
const sequelize =require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const userRoutes = require('./controllers/api/userRoutes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const mostPop = require('./routes/mostPop');
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(controllers);
app.use('./mostPop', mostPop);
app.use(session({
  key: 'user_id',
  secret: 'travelplans',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }

}))
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port:  http://localhost:${PORT}`));
});

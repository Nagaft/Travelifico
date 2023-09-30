const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
const { createDb } = require("./models/init");

const sess = {
  secret: 'travelplans',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  }),
  cookie: {
    expires: 60000 * 15
  }
}

createDb().then(created => {
  console.log("DBCREATE", created);
  sequelize.sync({ alter: true }).then(res => {

    console.log("SYNC", res);
    app.use(session(sess));
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, '/controllers')));
    app.use(cookieParser());
    app.use(controllers);
  
    
    app.listen(PORT, () => {
      console.log(`Now listening on port:  http://localhost:${PORT}`);
    });
  })
});

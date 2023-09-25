const path = require('path');
const express = require('express');
const sequelize =require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
const userRoutes = require('./controllers/api/userRoutes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
<<<<<<< HEAD
const sequelizeStore = require('connect-session-sequelize')(session.Store);

=======
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const mostPop = require('./routes/mostPop');
>>>>>>> 94574e4d4fc9dc52d7f9dbd2911afbd45d92e88b
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

const sess = {
  secret: 'travelplans',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  }),
  cookie: {
    expires: 60000
  }
}
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(controllers);
<<<<<<< HEAD


=======
// app.use('./mostPop', mostPop);


// app.use(req,res,next =>{

// })

>>>>>>> 94574e4d4fc9dc52d7f9dbd2911afbd45d92e88b
app.listen(PORT, () => {
  console.log(`Now listening on port:  http://localhost:${PORT}`);
});

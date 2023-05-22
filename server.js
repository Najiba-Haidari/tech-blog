// import path module
const path = require('path');
//import express module and other dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// set up the express app
const app = express();
const PORT = process.env.PORT || 3001;
//setting up the handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
//setting up the session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// enable session 
app.use(session(sess));
// set up handlebars view engine as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express Middleware
// parses the incoming JSON payloads to put them in the req.body 
app.use(express.json());
// parse the incoming requests with urlencoded payload and put the key-value pairs in the req.body/key-value pairs
app.use(express.urlencoded({ extended: true }));

// serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));
//setting up the routes from ./controllers
app.use(routes);
// Syncing the database and logs a message once the server begins listening
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3001, () => console.log('Now listening'));
});

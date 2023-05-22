// imports sequelize library
const Sequelize = require('sequelize');
// loads dotenv module and enable access to dotenv variables
require('dotenv').config();
// declare sequelize
let sequelize;

// using enviroment variables to connect to the database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      // it can be either localhost or 127.0.0.1 as localhost
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// export the sequelize module
module.exports = sequelize;

// set up a router object to define routes in express application
const router = require('express').Router();
// imports the apiRoutes from the file path of ./api
const apiRoutes = require('./api');
// imports the home-routes.js assiging to homeRoutes
const homeRoutes = require('./home-routes.js');
// imports the ./dashboard-routes.js assiging to dashboardRoutes
const dashboardRoutes = require('./dashboard-routes.js');
// create a route prefix for the routes defined in apiRoutes
router.use('/api', apiRoutes);
// create a route prefix for the routes defined in homeRoutes
router.use('/', homeRoutes);
// create a route prefix for the routes defined in dashboardRoutes
router.use('/dashboard', dashboardRoutes);
// create or sets up an 404 error handler to handle the requests
// which does not match the define routes
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
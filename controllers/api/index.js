// set up a router object to define routes in express application
const router = require('express').Router();
// imports the user-routes.js assiging to userRoutes constant
const userRoutes = require('./user-routes.js');
// imports the post-routes.js assiging to postRoutes constant
const postRoutes = require('./post-routes');
// imports the comment-routes.js assiging to commentRoutes constant
const commentRoutes = require('./comment-routes');
// create a route prefix for the routes defined in userRoutes
router.use('/users', userRoutes);
// create a route prefix for the routes defined in postRoutes
router.use('/posts', postRoutes);
// create a route prefix for the routes defined in commentRoutes
router.use('/comments', commentRoutes);

// export the router object
module.exports = router;
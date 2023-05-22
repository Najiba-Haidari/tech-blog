//// set up a router object to define routes in express application
const router = require('express').Router();
// import sequelize from connection.js
const sequelize = require('../config/connection');
// import Post, User and Comment models 
const { Post, User, Comment } = require('../models');
// import withAuth function
const withAuth = require('../utils/auth');
// get all the posts once the user can authenticate. withAuth function is to authenticate before getting all posts
router.get('/', withAuth, (req, res) => {
    //retrive all records from Post model that matching the use_id attribute
    //stored in the req.session.user_id
    Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            // including Comment model where the attribute matches
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// This get route requires the authentication where user can view and edit their posts.
// it is retrieving the post data from database using the findOne with where and include clauses
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
// assigns the plain JavaScript object version of the queried database post to the post variable.
            const post = dbPostData.get({ plain: true });
//Renders a template named edit-post, passing in the post and loggedIn variables as properties of an object, which are used by the template to display and edit the post.          
            res.render('edit-post', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
// creating a route that renders the new-post template when a GET request is make to the /new path
router.get('/new', (req, res) => {
    res.render('new-post');
});



module.exports = router;
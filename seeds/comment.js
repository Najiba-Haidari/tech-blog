const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Wonderful",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "Happy coding",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "can you believe it",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "great",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Bravo",
        user_id: 3,
        post_id: 4,
        
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
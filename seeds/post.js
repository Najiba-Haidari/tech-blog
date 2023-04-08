const { Post } = require('../models');

const postData = [
    {
        title: "Backend Modules",
        content: "a difficult session passed",
        user_id: 1
    },
    {
        title: "Frontend Modules",
        content: "Tough but doable",
        user_id: 2
    },
    {
        title: "SQL",
        content: "SQL :)",
        user_id: 2

    },
    {
        title: "MYSQL VS SQL",
        content: "Do you know the difference? comment it then!",
        user_id: 5
    },
    {
        title: "Fresh Air",
        content: "Finally we have spring with fresh air!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
// This imports the User, Post, and Comment models from their respective files in the same directory
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//sets up one to many association betwen the User and Post models / a user with many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
// exports the User, Post, and Comment models  
module.exports = { User, Post, Comment };
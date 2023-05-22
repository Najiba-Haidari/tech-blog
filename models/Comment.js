//  This line imports the necessary modules from Sequelize to define the Comment model
const { Model, DataTypes } = require('sequelize');
//imports the SQL connection configuration that is defined separately in another file
const sequelize = require('../config/connection');
// This creates our model class, which extends the Sequelize Model class. 
//This indicates that this Comment model inherits all of the functionality the Sequelize Model class has.
class Comment extends Model {}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        validate: {
            len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});
// exports the Comment model for use in other parts
module.exports = Comment;
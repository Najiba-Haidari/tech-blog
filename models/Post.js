//  This line imports the necessary modules from Sequelize to define the Comment model
const { Model, DataTypes } = require('sequelize');
//imports the SQL connection configuration that is defined separately in another file
const sequelize = require('../config/connection');
// This creates a new class called "Post" that extends Sequelize's base "Model" class. 
class Post extends Model {}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  //This exports the Post model so that it can be required/imported and used in other parts of the application.
  module.exports = Post;
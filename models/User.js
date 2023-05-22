//  This line imports the necessary modules from Sequelize to define the Comment model
const { Model, DataTypes } = require('sequelize');
// import the bcrypt module using for password hashing
const bcrypt = require('bcrypt');
//imports the SQL connection configuration that is defined separately in another file
const sequelize = require('../config/connection');
// The User class has a method of checkPassword to compare login password to hashed password
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
// This code initializes the User model with its properties and options
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //These hooks are called before a new user is created or an existing user
    // is updated in the database. They use the bcrypt.hash function to hash the user's password with a salt factor of 10 before storing it in the database.
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
//This exports the User model
module.exports = User;

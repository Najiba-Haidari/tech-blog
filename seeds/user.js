const { User } = require('../models');

const userData =
[
  {
    "username": "Naji",
    "email": "najihai@gmail.com",
    "password": "pass12345"
  },
  {
    "username": "Moh",
    "email": "momim@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Zinus",
    "email": "aina@gmail.com",
    "password": "zinus12345"
  },
  {
    "username": "amiamik",
    "email": "yakima@mail.com",
    "password": "pwd12345"
  },
  {
    "username": "Daniel",
    "email": "daniel@gmail.com",
    "password": "daniel2023"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
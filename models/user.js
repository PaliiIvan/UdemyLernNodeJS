const Sequelize = require('sequelize');

const sequelize = require('../util/database');

class User extends Sequelize.Model {
  id;
  name;
  email;
}

// const User = sequelize.define('user', {
  
// });

User.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
},
{sequelize, modelName: 'user'})

module.exports = User;
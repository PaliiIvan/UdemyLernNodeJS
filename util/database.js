const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '060133186', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

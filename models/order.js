const Sequelize = require('sequelize');

const sequelize = require('../util/database');

class Order extends Sequelize.Model {
  id = this.dataValues.id;
}

Order.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
}, {sequelize: sequelize, modelName: 'order'});

module.exports = Order;
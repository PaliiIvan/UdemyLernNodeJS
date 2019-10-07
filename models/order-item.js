const Sequelize = require('sequelize');

const sequelize = require('../util/database');

class OrderItem extends Sequelize.Model {
  id = this.dataValues.id;
}

OrderItem.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
}, {sequelize: sequelize, modelName: 'orderItem'});

module.exports = OrderItem;
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

class CartItem extends Sequelize.Model {
  id = this.dataValues.id;
}

CartItem.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
}, {sequelize: sequelize, modelName: 'cartItem'});

module.exports = CartItem;
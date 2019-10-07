const Sequelize = require('sequelize');

const sequelize = require('../util/database');

class Cart extends Sequelize.Model {
  id = this.dataValues.id;
}

Cart.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
}, {sequelize: sequelize, modelName: 'cart'});

module.exports = Cart;
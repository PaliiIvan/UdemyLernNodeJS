const Sequelize = require('sequelize');

const sequelize = require('../util/database');

class Product extends Sequelize.Model {
   id = this.dataValues.id;
   title = this.dataValues.title;
   price = this.dataValues.price;
   imageUrl = this.dataValues.imageUrl;
   description = this.dataValues.description;
}


 Product.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{sequelize, modelName: 'product'});


var Project = sequelize.define('Project',  
   {
      title: {type: Sequelize.STRING, name: 'name'},
      description: Sequelize.TEXT
   },
   {name: 'myprojects'}
)



module.exports = Product;

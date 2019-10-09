const { ObjectID } = require('mongodb');

class CartItem {


  /**
   * 
   * @param {number} id 
   * @param {number} quantity 
   */
  constructor(id, quantity) {
    this.productId = new ObjectID(id);
    this.quantity = quantity;
  }
}

module.exports = CartItem;

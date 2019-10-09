const CartItem = require('./cart-item');

class Cart {


  /**
   * 
   * @param { CartItem[]} CartItems 
   */
  constructor(CartItems) {
    this.cartItems = CartItems;
  }

/**
 * @returns {Promise}
 */
  save() {

  }

  /**
   * 
   * @param { number } cartId
   * @returns {Promise<Cart>}  
   */
  static fetchById(cartId) {

  }
}

module.exports = Cart;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const database_1 = require("../util/database");
class Cart extends types_1.Model {
}
exports.Cart = Cart;
class ProductInCart extends types_1.Model {
}
exports.ProductInCart = ProductInCart;
Cart.init({
    id: {
        type: types_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    totalPrice: {
        type: types_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    products: {
        type: types_1.DataTypes.INTEGER
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'cart'
});
//# sourceMappingURL=cart.js.map
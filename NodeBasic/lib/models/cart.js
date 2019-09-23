"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var product_1 = require("./product");
var p = path_1.default.join(path_1.default.dirname(process.mainModule.filename), 'data', 'cart.json');
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
        this.totalPrice = 0;
        this.id = Math.random();
    }
    Cart.addProduct = function (cartId, productId) {
        fs_1.default.readFile(p, function (err, fileContent) {
            var cart = [];
            if (!err) {
                cart = JSON.parse(fileContent.toString());
            }
            var existingCart = cart.find(function (cart) { return cart.id === cartId; });
            if (existingCart == undefined) {
                existingCart = new Cart();
                existingCart.id = 0;
            }
            product_1.Product.findById(productId, function (product) {
                existingCart.products.push(product);
                existingCart.totalPrice = +existingCart.totalPrice + +product.price;
                cart = [existingCart];
                fs_1.default.writeFile(p, JSON.stringify(cart), function (err) {
                    console.log(err);
                });
            });
        });
    };
    Cart.deleteProduct = function (cartId, productId) {
        this.getCartsFromFile(function (carts) {
            var cart = carts.find(function (x) { return x.id === cartId; });
            var productsForSave = cart.products.filter(function (x) { return x.id !== productId; });
            cart.products = productsForSave;
            Cart.saveCarts(carts);
        });
    };
    Cart.getById = function (id, fn) {
        fn(function (carts) {
            var cart = carts.find(function (cart) { return cart.id === id; });
            fn(cart);
        });
    };
    Cart.getCartsFromFile = function (cb) {
        fs_1.default.readFile(p, function (err, fileContent) {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent.toString()));
        });
    };
    Cart.saveCarts = function (carts) {
        fs_1.default.writeFile(p, JSON.stringify(carts), function (err) {
            console.log(err);
        });
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map
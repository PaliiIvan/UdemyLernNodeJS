"use strict";
var cart_1 = require("../models/cart");
var product_1 = require("../models/product");
var getProducts = function (req, res, next) {
    product_1.Product.fetchAll(function (products) {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};
var getIndex = function (req, res, next) {
    product_1.Product.fetchAll(function (products) {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};
var getCheckout = function (req, res, next) {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
var getOrders = function (req, res, next) {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    });
};
var getProduct = function (req, res, next) {
    var prodId = +req.params.id;
    product_1.Product.findById(prodId, function (product) {
        res.render('shop/product-detail', {
            path: '/products',
            pageTitle: 'Product Details',
            product: product
        });
    });
};
var getCart = function (req, res, next) {
    cart_1.Cart.getCartsFromFile(function (carts) {
        res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            cart: carts[0]
        });
    });
};
var postCart = function (req, res, next) {
    var prodId = +req.body.productId;
    cart_1.Cart.addProduct(0, prodId);
    res.redirect('/');
};
var deleteCart = function (req, res, next) {
    var cartId = +req.body.cartId;
    var productId = +req.body.productId;
    console.log(cartId, productId);
    res.redirect('/');
};
module.exports = {
    getProducts: getProducts,
    getProduct: getProduct,
    getIndex: getIndex,
    getCheckout: getCheckout,
    getOrders: getOrders,
    getCart: getCart,
    postCart: postCart,
    deleteCart: deleteCart
};
//# sourceMappingURL=shop.controller.js.map
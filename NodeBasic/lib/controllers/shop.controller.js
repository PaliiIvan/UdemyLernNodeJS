"use strict";
const product_1 = require("../models/product");
const getProducts = (req, res, next) => {
    product_1.Product.findAll()
        .then(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
            activeShop: true,
            productCSS: true
        });
    })
        .catch(err => console.log(err));
    ;
};
const getIndex = (req, res, next) => {
    product_1.Product.findAll().then(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            activeShop: true,
            productCSS: true
        });
    })
        .catch(err => console.log(err));
};
const getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
const getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    });
};
const getProduct = (req, res, next) => {
    const prodId = +req.params.id;
    product_1.Product.findByPk(prodId)
        .then(product => res.render('shop/product-detail', {
        path: '/products',
        pageTitle: 'Product Details',
        product: product
    }))
        .catch(err => console.log(err));
};
const getCart = (req, res, next) => {
    // Cart.getCartsFromFile((carts: Cart[]) => {
    //   res.render('shop/cart', {
    //     path: '/cart',
    //     pageTitle: 'Your Cart',
    //     cart: carts[0]
    //   });
    // });
};
const postCart = (req, res, next) => {
    const prodId = +req.body.productId;
    // Cart.addProduct(0, prodId);
    res.redirect('/');
};
const deleteCart = (req, res, next) => {
    const cartId = +req.body.cartId;
    const productId = +req.body.productId;
    //Cart.deleteProduct(cartId, productId);
    res.redirect('/cart');
};
module.exports = {
    getProducts,
    getProduct,
    getIndex,
    getCheckout,
    getOrders,
    getCart,
    postCart,
    deleteCart
};
//# sourceMappingURL=shop.controller.js.map
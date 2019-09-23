"use strict";
var product_1 = require("../models/product");
var products = [];
var getAddProduct = function (req, res, next) {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
var postAddProduct = function (req, res, next) {
    var product = new product_1.Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);
    product.save();
    res.redirect('/');
};
var getProducts = function (req, res, next) {
    product_1.Product.fetchAll(function (products) {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
};
var postEditProduct = function (req, res, next) {
    var product = new product_1.Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);
    product_1.Product.editProduct(product);
    res.redirect('/');
};
var getEditProduct = function (req, res, next) {
    var productId = +req.params.id;
    product_1.Product.findById(productId, function (product) {
        res.render('admin/edit-product', {
            path: '/admin/edit-product',
            pageTitle: 'Edit Product',
            product: product
        });
    });
};
var postDeleteProduct = function (req, res, next) {
    var productId = +req.body.id;
    product_1.Product.deleteProduct(productId);
    res.redirect('/');
};
module.exports = {
    getAddProduct: getAddProduct,
    postAddProduct: postAddProduct,
    getProducts: getProducts,
    getEditProduct: getEditProduct,
    postEditProduct: postEditProduct,
    postDeleteProduct: postDeleteProduct
};
//# sourceMappingURL=admin.controller.js.map
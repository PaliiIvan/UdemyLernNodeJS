"use strict";
const product_1 = require("../models/product");
const products = [];
const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = +req.body.price;
    const product = product_1.Product.build({ title, imageUrl, description, price });
    product_1.Product.create({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        price: +req.body.price
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};
const getProducts = (req, res, next) => {
    product_1.Product.findAll().then((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
};
const postEditProduct = (req, res, next) => {
    product_1.Product.update({
        id: req.body.id,
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        price: +req.body.price
    }, { where: { id: req.body.id } });
    res.redirect('/');
};
const getEditProduct = (req, res, next) => {
    const productId = +req.params.id;
    product_1.Product.findByPk(productId)
        .then(product => {
        res.render('admin/edit-product', {
            path: '/admin/edit-product',
            pageTitle: 'Edit Product',
            product: product
        });
    });
};
const postDeleteProduct = (req, res, next) => {
    const productId = +req.body.id;
    product_1.Product.destroy({
        where: {
            id: productId
        }
    }).then(responce => res.redirect('/'));
};
module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts,
    getEditProduct,
    postEditProduct,
    postDeleteProduct
};
//# sourceMappingURL=admin.controller.js.map
import express = require("express");

import { Product } from "../models/product";

const products: any[] = [];

const getAddProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

const postAddProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = +req.body.price;
    const product = Product.build({ title, imageUrl, description, price });

    Product.create(
        {
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            price: +req.body.price
        }
    )
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
}

const getProducts = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    Product.findAll().then((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}

const postEditProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Product.update({
        id: req.body.id,
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        price: +req.body.price
    }, { where: { id: req.body.id } });
    res.redirect('/');
}

const getEditProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const productId = +req.params.id;
    Product.findByPk(productId)
        .then(product => {
            res.render('admin/edit-product', {
                path: '/admin/edit-product',
                pageTitle: 'Edit Product',
                product: product
            });
        });
}

const postDeleteProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const productId = +req.body.id;
    Product.destroy({
        where: {
            id: productId
        }
    }).then(responce =>  res.redirect('/'));
}

export = {
    getAddProduct,
    postAddProduct,
    getProducts,
    getEditProduct,
    postEditProduct,
    postDeleteProduct
}
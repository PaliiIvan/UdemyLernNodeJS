import express = require("express");

import Product from '../models/product';

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
    const product = new Product(req.body.title, req.body.imageUrl, req.body.description, req.body.price);

    product.save();
    res.redirect('/');
}

const getProducts = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Product.fetchAll((products: Product[]) => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: '/admin/products'
        });
      });
}

export = {getAddProduct, postAddProduct, getProducts}
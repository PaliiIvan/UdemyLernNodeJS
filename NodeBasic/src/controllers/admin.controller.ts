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
    // const product = new Product(req.body.title, req.body.imageUrl, req.body.description, +req.body.price);

    // product.save()
    // .then(() => {
    //     res.redirect('/');
    // })
    // .catch(err => console.log(err));
}

const getProducts = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Product.fetchAll((products: Product[]) => {
    //     res.render('admin/products', {
    //       prods: products,
    //       pageTitle: 'Admin Products',
    //       path: '/admin/products'
    //     });
    //   });
}

const postEditProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
   // const product = new Product(req.body.title, req.body.imageUrl, req.body.description, +req.body.price);
    //Product.editProduct(product);
    res.redirect('/');
}

const getEditProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // const productId = +req.params.id;
    // Product.findById(productId, (product: Product) => {
    //     res.render('admin/edit-product', {
    //         path: '/admin/edit-product',
    //         pageTitle: 'Edit Product',
    //         product: product
    //     });
    // });
}

const postDeleteProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const productId = +req.body.id;
    //Product.deleteProduct(productId);
    res.redirect('/');
}

export = { 
    getAddProduct, 
    postAddProduct, 
    getProducts, 
    getEditProduct,
    postEditProduct,
    postDeleteProduct
}
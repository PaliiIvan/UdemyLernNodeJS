import express from 'express';
import path from 'path';

const router = express.Router();
const products: any[] = [];

router.get('/add-product', (req, res, next) => {
    res.render('ejs-views/add-product', {pageTitle: 'Add Product', path: 'admin/add-product', formsCss: true, productCss: true, activeAddProduct: true});
 });
 
 router.post('/add-product', (req, res, next) => {
     products.push({title: req.body.title, path: '/add-product'});
     res.redirect('/');
 });

 export = {router, products};
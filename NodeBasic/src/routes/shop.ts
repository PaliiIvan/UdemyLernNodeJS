import path from 'path';
import express from 'express';
import adminData from './admin';
const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('ejs-views/shop',
        {
            prods: products,
            docTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
});

export = router;
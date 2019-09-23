import path from 'path';
import express from 'express';

import adminData from './admin.routes';
import shopController from '../controllers/shop.controller';

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.getProduct);

router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);
router.post('/delete-cart', shopController.deleteCart);

export = router;

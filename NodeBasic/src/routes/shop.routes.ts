import path from 'path';
import express from 'express';

import adminData from './admin.routes';
import shopController from '../controllers/shop.controller';

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

export = router;

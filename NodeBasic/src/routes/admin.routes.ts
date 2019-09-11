import express  from 'express';


import adminController  from '../controllers/admin.controller';
const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

export = { router} ;


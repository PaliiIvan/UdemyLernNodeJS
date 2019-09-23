import express from 'express';


import { Cart } from '../models/cart';
import { Product } from '../models/product';

const getProducts = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Product.fetchAll().then(products => {
  //   res.render('shop/product-list', {
  //     prods: products,
  //     pageTitle: 'All Products',
  //     path: '/',
  //     activeShop: true,
  //     productCSS: true
  //   });
  // });
}

const getIndex = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Product.fetchAll().then(products => {
  //   console.log(products[0].title);
  //   res.render('shop/index', {
  //     prods: products,
  //     pageTitle: 'Shop',
  //     path: '/',
  //     activeShop: true,
  //     productCSS: true
  //   });
  // })
}

const getCheckout = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}

const getOrders = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Orders'
  });
}

const getProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const prodId = +req.params.id;
  
  // Product.findById(prodId)
  // .then(product =>
  //   res.render('shop/product-detail', {
  //     path: '/products',
  //     pageTitle: 'Product Details',
  //     product: product
  //   }))
  //   .catch(err => console.log(err));
  }

const getCart = (req: express.Request, res: express.Response, next: express.NextFunction) => {
 Cart.getCartsFromFile((carts: Cart[]) => {
   res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    cart: carts[0]
   });
 });
}

const postCart = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const prodId = +req.body.productId;
  Cart.addProduct(0, prodId);
  
  res.redirect('/');
}

const deleteCart = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const cartId = +req.body.cartId;
  const productId = +req.body.productId;
  Cart.deleteProduct(cartId, productId);
  res.redirect('/cart');
}

export = {
  getProducts,
  getProduct,
  getIndex,
  getCheckout,
  getOrders,
  getCart,
  postCart,
  deleteCart
};
import express from 'express';

import Product from '../models/product';

const getProduct = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  Product.fetchAll((products: Product[]) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  });
}

const getIndex = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  Product.fetchAll((products: Product[]) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  });
}


const getCart = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

const getCheckout = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}

const getOrders = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('shop/orders', {
    path: '/',
    pageTitle: 'Orders'
  });
}

export = {
  getProduct,
  getIndex,
  getCart,
  getCheckout,
  getOrders
};
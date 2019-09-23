import fs from "fs";
import path from 'path';

import { Product } from "./product";

const p = path.join(
    path.dirname(process.mainModule!.filename),
    'data',
    'cart.json');

export class Cart {

    products: {
        //product: Product
        count: number
    }[]
    totalPrice: number;
    id: number;

    constructor() {
        this.products = [];
        this.totalPrice = 0;
        this.id = Math.random();
    }

    static addProduct(cartId: number, productId: number) {
        // fs.readFile(p, (err, fileContent) => {


        //     let cart: Cart[] = [];

        //     if (!err) {
        //         cart = JSON.parse(fileContent!.toString());
        //     }

        //     let existingCart = cart.find((cart: Cart) => cart.id === cartId);

        //     if (existingCart == undefined) {
        //         existingCart = new Cart();
        //         existingCart.id = 0;
        //     }

        //     Product.findById(productId, (product: Product) => {
        //         if(existingCart!.products.some(x => x.product.title === product.title)){

        //                 existingCart!.products.find(x => x.product.title === product.title)!.count += 1;
        //             } else {
        //                 existingCart!.products.push({product, count: 1});
        //             }

        //         existingCart!.totalPrice = +existingCart!.totalPrice + +product.price;
        //         cart = [existingCart!];
        //         fs.writeFile(p, JSON.stringify(cart), err => {
        //             console.log(err);
        //         })

        //     });



      //  });
    }

    static deleteProduct(cartId: number, productId: number) {
        // this.getCartsFromFile((carts: Cart[]) => {

        //     const cart = carts.find(x => x.id === cartId);
        //     const productForChange = cart!.products.find(x => x.product.id == productId)
        //     if(productForChange!.count > 1) {
        //         productForChange!.count -= 1;
        //         cart!.totalPrice = +cart!.totalPrice - +productForChange!.product.price;
        //         console.log(productForChange, "productsForChange");
                
        //     } else {
        //         const productsForSave = cart!.products.filter(x => x.product.id == productId)
        //         cart!.products = productsForSave;
        //         cart!.totalPrice = +cart!.products.reduce((sum, prod) => prod.count > 1 ? sum + (prod.product.price * prod.count) : sum + prod.product.price  , 0);
        //         console.log(productsForSave, "productsForSave");
                
        //     }
            
        //     Cart.saveCarts(carts);
        //     console.log(carts, "save carts");
            
        // })
    }

    static getById(id: number, fn: Function) {

        fn((carts: Cart[]) => {
            const cart = carts.find(cart => cart.id === id)
            fn(cart);
        });
    }


    static getCartsFromFile(cb: Function) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent.toString()));
        })
    }

    private static saveCarts(carts: Cart[]) {

        fs.writeFile(p, JSON.stringify(carts), err => {
            console.log(err);
        })
    }

}
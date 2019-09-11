import fs from 'fs';
import path from 'path';


const products: Product[] = [];
const p = path.join(
    path.dirname(process.mainModule!.filename),
    'data',
    'products.json');

class Product {
    title: string;
    imageUrl: string;
    description: string;
    price: number;

    constructor(title: string, imageUrl: string, description: string, price: number) {
        this.title = title;
        this.imageUrl =imageUrl;
        this.description = description;
        this.price = price;
    }


    save() {

        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent.toString());
            }
        });

        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => { console.log(err) });
    }

    static fetchAll(cb: Function) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent.toString()));
        })
    }
}

export = Product;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var products = [];
var p = path_1.default.join(path_1.default.dirname(process.mainModule.filename), 'data', 'products.json');
var Product = /** @class */ (function () {
    function Product(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = 0;
    }
    Product.prototype.save = function () {
        this.id = Math.random();
        fs_1.default.readFile(p, function (err, fileContent) {
            var products = [];
            if (!err) {
                products = JSON.parse(fileContent.toString());
            }
        });
        products.push(this);
        fs_1.default.writeFile(p, JSON.stringify(products), function (err) { console.log(err); });
    };
    Product.fetchAll = function (cb) {
        this.getProductsFromFile(cb);
    };
    Product.getProductsFromFile = function (cb) {
        fs_1.default.readFile(p, function (err, fileContent) {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent.toString()));
        });
    };
    Product.findById = function (id, cb) {
        this.getProductsFromFile(function (products) {
            var product = products.find(function (prod) { return prod.id === id; });
            cb(product);
        });
    };
    Product.editProduct = function (product) {
        this.findById(product.id, function (productForEdit) {
            productForEdit = product;
            product.save();
        });
    };
    Product.saveAllProducts = function (productsToSave) {
        fs_1.default.writeFile(p, JSON.stringify(productsToSave), function (err) { console.log(err); });
    };
    Product.deleteProduct = function (id) {
        var _this = this;
        Product.fetchAll(function (products) {
            var filteredProducts = products.filter(function (x) { return x.id !== id; });
            _this.saveAllProducts(filteredProducts);
        });
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var admin_controller_1 = __importDefault(require("../controllers/admin.controller"));
var router = express_1.default.Router();
// /admin/add-product => GET
router.get('/add-product', admin_controller_1.default.getAddProduct);
router.get('/products', admin_controller_1.default.getProducts);
// /admin/add-product => POST
router.post('/add-product', admin_controller_1.default.postAddProduct);
router.get('/edit-product/:id', admin_controller_1.default.getEditProduct);
router.post('/edit-product', admin_controller_1.default.postEditProduct);
router.post('/delete-product', admin_controller_1.default.postDeleteProduct);
module.exports = { router: router };
//# sourceMappingURL=admin.routes.js.map
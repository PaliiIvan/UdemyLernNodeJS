"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
const router = express_1.default.Router();
router.get('/', shop_controller_1.default.getIndex);
router.get('/products', shop_controller_1.default.getProducts);
router.get('/products/:id', shop_controller_1.default.getProduct);
router.get('/cart', shop_controller_1.default.getCart);
router.post('/cart', shop_controller_1.default.postCart);
router.get('/orders', shop_controller_1.default.getOrders);
router.get('/checkout', shop_controller_1.default.getCheckout);
router.post('/delete-cart', shop_controller_1.default.deleteCart);
module.exports = router;
//# sourceMappingURL=shop.routes.js.map
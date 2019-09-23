"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var admin_routes_1 = __importDefault(require("./routes/admin.routes"));
var shop_routes_1 = __importDefault(require("./routes/shop.routes"));
var error_controller_1 = __importDefault(require("./controllers/error.controller"));
var app = express_1.default();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/admin', admin_routes_1.default.router);
app.use(shop_routes_1.default);
app.use(error_controller_1.default.Error404);
var server = http_1.default.createServer(app);
server.listen(3000);
//# sourceMappingURL=index.js.map
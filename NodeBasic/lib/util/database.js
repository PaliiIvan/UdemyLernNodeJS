"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('node-complete', 'root', '060133186', {
    dialect: 'mysql',
    host: 'localhost'
});
//# sourceMappingURL=database.js.map
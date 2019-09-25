"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../util/database");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING
}, { sequelize: database_1.sequelize, modelName: 'user' });
User.sync()
    .then(res => console.log('User table initiated'))
    .catch(err => console.log(err));
//# sourceMappingURL=user.js.map
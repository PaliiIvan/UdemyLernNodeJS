"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../util/database");
const user_1 = require("./user");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'products'
});
Product.belongsTo(user_1.User, { constraints: true, onDelete: 'CASCADE' });
user_1.User.hasMany(Product);
Product
    .sync()
    .then(res => {
    return user_1.User.findByPk(1);
})
    .then(user => {
    console.log("Product Table inited");
    if (!user) {
        user_1.User.create({ name: 'Ivan', email: 'test@test.com' });
    }
    return user;
})
    .catch(err => console.log(err, "Error"));
//# sourceMappingURL=product.js.map
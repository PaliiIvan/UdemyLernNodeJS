import { Model, DataTypes } from "sequelize/types";
import { Product } from "./product";

import { sequelize } from "../util/database";

export class Cart extends Model {
    id: number;
    totalPrice: number;
    products: ProductInCart[];
}

export class ProductInCart extends Model {
    product: Product;
    productCount: number;
}

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        totalPrice: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        products: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: 'cart'
    });
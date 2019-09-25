import { sequelize } from "../util/database";
import { Model, DataTypes } from "sequelize";
import { Product } from "../models/product";

export class User extends Model {
    id: number;
    name: number;
    email: number
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
    
}, {sequelize, modelName: 'user'});



User.sync()
    .then(res => console.log('User table initiated'))
    .catch(err => console.log(err));
import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../util/database";   


export class Product extends Model {
    id!: number;
}

Product.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {sequelize, modelName: 'user'})

Product.sync().then( (res: any) => {

}).catch((err: any) => {
   console.log(err);
   
})
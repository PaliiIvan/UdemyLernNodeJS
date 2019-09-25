import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/database";
import { User } from "./user";


export class Product extends Model {
    public id: number;
    public title: string;
    public price: number;
    public description: string;
    public imageUrl: string;


}


Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'products'
    });

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

Product
    .sync()
    .then(res => {
        return User.findByPk(1);
    })
    .then(user => {
        console.log("Product Table inited");
        if(!user) {
            User.create({name: 'Ivan', email: 'test@test.com'});
        }
        return user;
    })
    .catch(err => console.log(err, "Error"));
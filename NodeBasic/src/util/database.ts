import { Sequelize } from "sequelize";

export const sequelize = 
    new Sequelize(
        'node-complete',
        'root',
        '060133186',
        {
            dialect: 'mysql',
            host: 'localhost'
        });


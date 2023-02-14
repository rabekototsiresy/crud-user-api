//import {Sequelize } from 'sequelize';
import { dbConfig } from '../../../config/dbConfig';

var Sequelize
const sequelize = new Sequelize(dbConfig.DB_NAME,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: 'mysql',
    pool: {
        max: 5 ,
        min: 0,
        acquire: 30000,
        idle: 10000
    } 
})


export const db  = {
    db: sequelize,
    Sequelize: Sequelize
}


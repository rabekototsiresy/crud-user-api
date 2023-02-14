import { DataTypes } from 'sequelize';
import { db as database } from '../services/db';
import { MusicModel } from './Music';

const db = database.db;

export const FivondronanaModel = db.define('fivondronanas',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    rang: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false 
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_faritra: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    primary_color: {
        type: DataTypes.STRING(10),
        allowNull: true 
    },
    secondary_color: {
        type: DataTypes.STRING(10),
        allowNull: true 
    },
})


FivondronanaModel.hasMany(MusicModel,{foreignKey: 'id_fiv'});
MusicModel.belongsTo(FivondronanaModel,{foreignKey: 'id_fiv'})
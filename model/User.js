import {getData} from './db.js';
import { Sequelize } from 'sequelize';
//add sequalize add
const User = getData.sequelizeClient.define('tbl_usersdb',{
    id:{type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone_number: Sequelize.STRING,
},{
    
})

export const getUser = User;
import { getData } from './db.js';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
//add sequalize add

const Father = getData.sequelizeClient.define('cat_fathers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    fatherSurname : {
        type: DataTypes.STRING,
        allowNull: false,

    },

    motherSurname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.BIGINT,
        allowNull: false,
    }

}, {
    tableName: 'cat_fathers',
    freezeTableName: true,

});


export const getFather =  Father;
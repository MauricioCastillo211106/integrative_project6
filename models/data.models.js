import { getData } from "../config/connection.config.js";
import { DataTypes, UUIDV4 } from "sequelize";

const Data = getData.sequelizeClient.define(
  "cat_data",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    temperatura: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    humedad:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ultrasonico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    luminosidad: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "cat_data",
    freezeTableName: true,
  }
);

export const getDatas = { Data };
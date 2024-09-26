import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URL);

export { DataTypes };
export default sequelize;

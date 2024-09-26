import sequelize, { DataTypes } from "../database/connect";

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Category
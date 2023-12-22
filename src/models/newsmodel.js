const {  DataTypes } = require("sequelize");
const sequelize = require("../database");

const News = sequelize.define("News", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
  {
      tableName: "roles",
      timestamps: false,
    }
);

module.News = News;

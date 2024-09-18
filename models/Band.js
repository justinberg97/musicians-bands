const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class Band extends Model {}
Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Band",
  }
);

module.exports = {
  Band,
};

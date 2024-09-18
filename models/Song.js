const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class Song extends Model {}
Song.init(
  {
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER,
  },
  {
    sequelize: db,
    modelName: "Song",
  }
);

module.exports = {
  Song,
};

const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../data/connection");

class Turmas extends Model {}

Turmas.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    titulo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    paranoid: false,
    timestamps: false,
    modelName: "tb_turmas",
  }
);

module.exports = { Turmas };

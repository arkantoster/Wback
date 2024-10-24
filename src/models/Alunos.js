const { DataTypes, Model } = require("sequelize");
const {sequelize} = require("../data/connection");

class Alunos extends Model {}

Alunos.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    idTurma: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "tb_turmas",
      },
    },
    telefone: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    paranoid: false,
    timestamps: false,
    modelName: "tb_alunos",
  }
);

module.exports = { Alunos };

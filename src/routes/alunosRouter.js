const express = require("express");

const { Alunos, Turmas } = require("../models");

const alunosRouter = express.Router();

alunosRouter.get("/", async (req, res, next) => {
  try {
    const resp = await Alunos.findAll({
      where: req.query,
      include: { model: Turmas, attributes: ["id", "titulo"] },
      attributes: ["id", "nome", "telefone"],
    });
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

alunosRouter.get("/:id", async (req, res, next) => {
  try {
    const resp = await Alunos.findByPk(req.params.id, {
      include: { model: Turmas, attributes: ["id", "titulo"] },
      attributes: ["id", "nome", "telefone"],
    });
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

alunosRouter.post("/", async (req, res, next) => {
  try {
    const resp = await Alunos.create(req.body);
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

alunosRouter.patch("/:id", async (req, res, next) => {
  try {
    const resp = await Alunos.update(req.body, { where: req.params });
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

alunosRouter.delete("/:id", async ({ params }, res, next) => {
  try {
    const transaction = await sequelize.transaction();
    const resp = await Alunos.destroy({ where: params, transaction });
    transaction.commit();
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

module.exports = { alunosRouter };

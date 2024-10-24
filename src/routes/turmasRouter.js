const express = require("express");
const { Turmas } = require("../models/Turmas");

const turmasRouter = express.Router();

turmasRouter.get("/", async (req, res, next) => {
  try {
    const resp = await Turmas.findAll({
      where: req.query,
      attributes: ["id", "titulo"],
    });
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

turmasRouter.get("/:id", async (req, res, next) => {
  try {
    const resp = await Turmas.findByPk(req.params.id, {
      attributes: ["id", "titulo"],
    });
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

turmasRouter.post("/", async (req, res, next) => {
  try {
    const resp = await Turmas.create(req.body);
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

turmasRouter.patch("/:id", async (req, res, next) => {
  try {
    const resp = await Turmas.update(req.body, { where: req.params });
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

turmasRouter.delete("/:id", async ({ params }, res, next) => {
  try {
    const transaction = await sequelize.transaction();
    const resp = await Turmas.destroy({ where: params, transaction });
    transaction.commit();
    res.json(resp);
  } catch (error) {
    res.statusCode = 400;
    res.json(error);
  }
});

module.exports = { turmasRouter };

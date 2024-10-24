const { Alunos } = require("./Alunos");
const { Turmas } = require("./Turmas");

Alunos.belongsTo(Turmas);
Turmas.hasMany(Alunos);

module.exports = { Alunos, Turmas };

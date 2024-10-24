const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "mysql://sql10740461:fDe3MDkhtp@sql10.freemysqlhosting.net:3306/sql10740461",
  {
    // ssl: true,
    // dialectOptions: {
    //   ssl: {
    //     // require: true,
    //   },
    // },
    // schema: process.env.ENVIROMENT,
  }
);

// const sequelize = new Sequelize("sqlite::memory:");

module.exports = { sequelize };

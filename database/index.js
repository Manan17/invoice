const Sequelize = require("sequelize");

const sequelize = new Sequelize.Sequelize("invoice", "postgres", "root", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 20,
    min: 5,
  },
  define: {
    underscored: true,
    schema: "public",
  },
  logging: false,
});

const db = {};

db.connectDb = async () => {
  try {
    console.log("Sequelize DB connection initiating....");
    await sequelize.authenticate();
    console.log("invoice");
    console.log(`Connected to postgresDB at`);
  } catch (err) {
    console.log(err);
    console.log("Could not connect to postgresdb");
  }
};

db.alterDB = async () => {
  try {
    require("./models/index");
    console.log("Altering DB");
    await sequelize.authenticate();
    await sequelize.sync({ alter: true, logging: console.log });
    console.log("DB has been altered!");
  } catch (err) {
    console.log("DB alter error", err);
  }
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

module.exports = db;

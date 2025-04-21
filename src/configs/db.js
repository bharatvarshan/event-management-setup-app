const { Sequelize } = require("sequelize");
const { DatabaseConstants } = require("../constants/DatabaseConstants");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log(DatabaseConstants.ConnectionSuccessful);
  } catch (error) {
    console.error(DatabaseConstants.ConnectionFailed, error);
  }
};

connect();

module.exports = sequelize;

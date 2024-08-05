import { Sequelize } from "sequelize";

const db = new Sequelize("telyu_project1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

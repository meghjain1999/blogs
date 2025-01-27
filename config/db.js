const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite", // File name for the database
});

sequelize
    .authenticate()
    .then(() => console.log("SQLite database connected"))
    .catch((err) => console.error("Error connecting to database:", err));

module.exports = sequelize;
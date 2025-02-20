const { Sequelize } = require("sequelize");
require("dotenv").config();

// Creating a new Sequelize instance to connect to the PostgreSQL Database
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT,
        logging: false,
});

// Authenticate the connection to the database
sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to PostgreSQL RDS");
    })
    .catch((error) => {
        console.error("DB Connection Error: ", error);
    })

module.exports = sequelize;
const sequelize = require("../config/database.js")

async function createDatabase() {
    try {
        await sequelize.sync();
    } catch(error) {
        console.log("can't create database")
    }
}

module.exports = createDatabase;
const { sequelize } = require("sequelize")

const sequelize = new sequelize({
    dialect: "sqlite",
    storage: "./data/database.db"
});


async function testConnectionDatabase() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log("can't connect")
    }
};

testConnectionDatabase();

module.exports = sequelize;
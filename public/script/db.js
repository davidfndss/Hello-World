const password = process.env.PASSWORD
const Sequelize = require("sequelize")
const sequelize = new Sequelize("helloworld","root",password, {
    host: "localhost",
    dialect: "mysql"
})

//console.log("db.js rodando!")

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
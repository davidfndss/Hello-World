const db = require("../db.js")
const Post = db.sequelize.define("posts", // primeiro parâmetro sempre no plural
{
    username: {type: db.Sequelize.STRING},
    text: {type: db.Sequelize.TEXT},
    likes: {type: db.Sequelize.INTEGER}
})

module.exports = Post
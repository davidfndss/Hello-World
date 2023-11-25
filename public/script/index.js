const express = require("express")
const app = express()
require('dotenv').config()
const handlebars = require("express-handlebars")
const path = require("path")
const db = require("./db.js")
const Post = require("./models/Post.js")

//Config
    //Template engine
    const handlebarsInstance = handlebars.create({ defaultLayout: "main" });
    app.engine("handlebars", handlebarsInstance.engine)
    app.set("view engine","handlebars")
    // Configuração para servir arquivos estáticos
    app.use(express.static(path.join(__dirname,"../")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","../home.html"))
})

const port = process.env.PORT || 7777
app.listen(port)
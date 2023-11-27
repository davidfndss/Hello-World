const express = require("express")
const app = express()
require('dotenv').config()
const handlebars = require("express-handlebars")
const path = require("path")
const Post = require("./models/Post.js")

//Config
    //Template engine
    const handlebarsInstance = handlebars.create({ defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    } });
    app.engine("handlebars", handlebarsInstance.engine)
    app.set("view engine","handlebars")
    // Configuração para servir arquivos estáticos
    app.use(express.static(path.join(__dirname,"../")))

app.get("/",(req,res)=>{
    Post.findAll().then((posts)=>{
        res.render("home",{posts:posts})
    }) 
})

const port = process.env.PORT || 7777
app.listen(port)
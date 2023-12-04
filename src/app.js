//Importing modules 
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const path = require("path")
require('dotenv').config()
const admin = require("./routes/admin.js")

// Settings
    // Body-Parser
        app.use(bodyParser.urlencoded({extended:false})) 
        app.use(bodyParser.json())
    // Handlebars
        const handlebarsInstance = handlebars.create({ defaultLayout: "main",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        } });
        app.engine("handlebars", handlebarsInstance.engine)
        app.set("view engine","handlebars")
        app.set("views", path.join(__dirname + "/views"))
    // Public folder for static files
        app.use(express.static(path.join(__dirname, "..", "public")))
    // Connection to Database
        require("./db.js")

// Routes
    app.use("/admin", admin)

const port = process.env.PORT || 3000
app.listen(port)
const express= require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("home")
})

router.get("/login",(req,res)=>{
    res.send("/login")
})

router.get("/posts",(req,res)=>{
    res.send("/posts")
})

module.exports = router
const mongoose = require("../db.js")

// Model definition
const UserSchema = mongoose.Schema({
    username: {   
        type: String,
        require: true
    },
    email: {   
        type: String,
        require: true
    },
    password: {   
        type: String,
        require: true
    }
})

// Collection
mongoose.model("users", UserSchema)

const User = mongoose.model("users")

// new User({
//     username:"johndoe",
//     email:"johndoe@hworld.com",
//     password:"2345424"
// }).save().then(()=>{
//     console.log("usuário criado com sucesso!")
// }).catch((err)=>{
//     console.log("erro ao criar", err)
// })

module.exports = User
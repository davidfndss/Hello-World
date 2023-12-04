const mongoose = require("mongoose")

    const connect = () => {
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("Conectado ao mongo DB com sucesso!")
    }).catch((err)=>{
        console.log("Erro ao conectar com o mongo db: ", err)
    })
}

connect()

module.exports = mongoose
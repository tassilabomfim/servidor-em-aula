//const express = require("express")
//const app = require("./src/app")

// app.get('/', function (request, response){
//     response.send("Olá roi, tai")
// })


//app.listen(8080)


const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function (){
    console.log("O nosso app esta rodando na porta " + PORT);
})
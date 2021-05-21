const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/sobre", function(req, res){
  res.sendFile(__dirname + "/sobre.html")
})

app.get("/blog", function(req, res){
  res.send("Bem-vindo ao meu blog")
})
// Parâmetros
app.get('/ola/:cargo/:nome/:cor', function(req, res){
  res.send(`Ola ${req.params.nome}`);
});

app.listen(8081, function(){
  console.log("servidor Rodando na url http://localhost:8081");
});

//exemplo add págians HTML
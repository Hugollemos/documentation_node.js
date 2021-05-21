# utilizando parâmetros
const express = require('express');
const app = express();

app.get("/", function(req, res){
  res.send("Seja bem-vindo ao meu app!")
});

app.get("/sobre", function(req, res){
  res.send("Minha pagina sobre");
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
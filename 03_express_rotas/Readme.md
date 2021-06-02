# Express
framework que ajuda nas rotas ao enviar (req, res) HTTP (GET, POST, SET, DELETE, etc.)

__Servidor simples utilizand Express__
```
const express = require('express');
const app = express();
const port = process.env.PORT || 8081

app.get("/", function(req, res){
  res.send("Seja bem-vindo ao meu app!")
});

app.get("/sobre", function(req, res){
  res.send("Minha pagina sobre");
})

app.get("/blog", function(req, res){
  res.send("Bem-vindo ao meu blog")
})

app.listen(8081, function(){
  console.log("servidor Rodando na url http://localhost:8081");
});
```

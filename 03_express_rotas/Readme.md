# Express
__framework que ajuda nas rotas ao enviar (req, res) HTTP (GET, POST, SET, DELETE, etc.)__

__1.Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. <br>
2.Integrar "view engines" para inserir dados nos templates.<br>
3.Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta. <br>
4.Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.__
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

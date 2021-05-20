cliente-> http:// -> servidor 
  <-        <-           <- 

atraves do protocolo http envimos e recebemos os dados do servidor.

modulo padrao que ja vem dentro do node é o http

criando um servidor simples de http:
```
var http = require('http');

http.createServer().listen(8080);

console.log("O servidor rodando!")
```
agora adicionando uma função com algumas coisas
```
var http = require('http');

http.createServer(function(req,res){
  res.end("Olá");
}).listen(8080);

console.log("O servidor rodando!")
```
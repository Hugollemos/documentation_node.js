# HTTP://
```
cliente-> http:// -> servidor 
  <-        <-           <- 
req        método     res
```
__criando um servidor simples com http:__
```
var http = require('http');

http.createServer(function(req,res){
  res.end("Olá");
}).listen(8080);

console.log("O servidor rodando!")
```
#### verbos HTTP:
Get: pegar dados de uma determinada entidade <br>
post: enviar dados <br>
put: atualizar uma entidade por completo <br>
delete: deletar um recurso especifico <br>
patch: atualizar um recurso parcialmente <br>
opition: retorna alguma informações a respeito do sistema

__Obs: módelo http obsoleto.__
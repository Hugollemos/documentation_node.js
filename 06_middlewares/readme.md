# Middlewares 

Irá  interceptar alguma ação entre a requisição e resposta, podendo executar qualquer código
Requisição http > middleware > resposta

ex de uso:
```
fucntion meuMiddleware(req, res, next){
console.log('alguma coisa')

next()

}
```
# Express - req.params, req.query e req.body

```req.params``` contém parâmetros de rota (na parte do caminho da URL) e req.query contém os parâmetros de consulta de URL (depois de ?no URL).



## req.params
Esta propriedade é um objeto que contém propriedades mapeadas para os “parâmetros” da rota nomeada . Por exemplo, se você tiver a rota /user/:name, a propriedade “nome” estará disponível como req.params.name. O padrão deste objeto é {}.
```
const express = require('express');
const app = express();
const port = process.env.PORT || 3000


app.get('/testes/:idUser?/:idUser2?', (req, res) => {
  console.log(req.params);
  res.send(req.params); //redenrizar uns dos parametros: res.send(req.params.idUser);

})

app.listen(port, function(){
  console.log('servidor rodando')
});
```
Usando "?" na url diz que o parametro pode ou não ser recebido.

## req.body
Contém pares de valores-chave de dados enviados no corpo da solicitação. Por padrão, é undefinede é preenchido quando você usa middleware de análise de corpo, como 
```
app.use(express.json())
app.use(express.urlencoded({ extended: true})));
```

## req.query
req.query contém os parâmetros de consulta de URL (depois de ?no URL).

```console.log(req.query)```; //vai ser redenrizado no terminal
```res.send(req.query)```; //tudo que eu passar na url, ex: ?nome=luis&sobrenome=hugo&idade=21. vai ser redenrizado com req.query na tela.
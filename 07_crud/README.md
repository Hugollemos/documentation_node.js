```
CREATE  -> POST  | CRIAR       
READ    -> GET   | LER                 
UPDATE  -> PUT   |ATUALIZAR                     
DELETE  -> DELETE| DELETAR
```
```
const express = require('express');
const app = express();
const port = process.env.PORT || 8081

app.get("/", (req, res) => {
  res.send('Chamou GET')
})
app.post("/", (req, res) => {
  res.send('Chamou pelo POST')
})
app.put("/", (req, res) => {
  res.send('Chamou PUT')
})
app.delete("/", (req, res) => {
  res.send('Chamou pelo DELETE')
})

app.listen(8081, function(){
  console.log("servidor Rodando na url http://localhost:8081");
});
```
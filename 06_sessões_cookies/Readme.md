# sessões e cookies

## cookies
Basicamente, um Cookie é um arquivo de texto muito simples, cuja composição diretamente do conteúdo do endereço Web visitado. por exemplo, a maioria do sites armazenam informações básica, como endereços IP e preferências sobre idiomas, cores, etc. Contudo, em portais como o Gmail e o Hotmail, nomes de usuários e senhas de email também fazem parte dos Cookis.

## sessões
Sessões geralmente dependem de cookies, mas os dados são guardados no servidor. Funciona assim;

Uma sessão é iniciada no servidor, que envia um cookie ao browser com um ID único daquela sessão.

Qualquer dado associado á sessão é armazenado no servidor, associado a esse ID.

Em toda requisição, o browser envia de volta o cookie com o ID da sessão, o que permite ao servidor dar acesso aos dadoos associados áquele ID.

Portanto, usar sessões é um puouco mais seguro que guardar dados diretamente em cookies, já que se alguém tiver acesso ao cokie não tem acesso direto aos dados (isso sem falar que não cabem muitos dados nos cookies).
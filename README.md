# Api sabores do mundo

​ Projeto Final backend módulo 3 Blue Edtech.

​ link do heroku: <a href=""> API Sabores do mundo</a>

------

​   Projeto de uma API cadastrar pratos de diferentes países do mundo em banco de dados, utilizando NodeJs, React, MongoDB Atlas e deploy na nuvem via Heroku.

### Intro

​   Nesse projeto o usuário poderá inserir seu(s) prato(s) preferidos dos seguintes países: México, Rússia, Itália, Holanda e/ou Egito.

​   Em seu cadastro o usuário deverá informar as seguintes informações: Nome do prato, ingredientes, modo de preparo, história do prato e link url de uma imagem do prato escolhido. Para a utilização da API Sabores do mundo corretamente, foram criadas rotas específicas para ação do usuário, que serão listadas mais a frente nesse documento.

​   Primeiramente o usuário deverá realizar algumas instalações pelo terminal do VS Code (por exemplo), abrindo o prompt de comando/terminal (ctrl + '') e inserir os seguintes comandos:

```javascript
npm init
npm start
npm i cors
npm i dotenv
npm i express -y
npm i mongoose
```

​   Para a utilização da API o usuário pode escolher algum API CLIENT de sua preferência, tais como, Insomnia, Postaman, Thunder Client (VS Code).

​   Nesse projeto foi utilizado o Thunder Client pela sua facilidade de estar diretamente integrado ao VS Code, facilitando testes.

​   Criado o pacote Environment para exportação/importação e também disponibilizado a collection com todas as rotas do CRUD já definidas.

​   Para acessar cada rota específica de país, basta inserir o endereço desejado dentre as opções:

- Rota principal da API Sabores do Mundo > <http://localhost:3000>
- Itália > <http://localhost:3000/italian>
- México > <http://localhost:3000/mexican>
- Rússia > <http://localhost:3000/russian>
- Holanda > <http://localhost:3000/>
- Egito > <http://localhost:3000/>

​   Após selecionar o país desejado, o usuário terá como opções: Listar todos os pratos cadastrados, listar um prato cadastrado por ID, cadastrar um novo prato, alterar um prato já cadastrado por ID, deletar um prato já cadastrado por ID. Para facilitar foi criado as collections com todas as rotas previamente definidas juntamente com o arquivo Environment.

### Rotas criadas para cada ação a realizar

##### Rota raiz: retorna a confirmação de funcionamento da API

`GET /` (página inicial da API);

```javascript
https://...herokuapp.com/
{
  "message": "Bem vindo a API Sabores do Mundo!"
}
```

| Tipo de requisição: | País escolhido: |               Link da rota:               |                 Mensagem de retorno:                  |
| :-----------------: | :-------------: | :---------------------------------------: | :---------------------------------------------------: |
|        GET /        |     itlian      | <a> <https://...herokuapp.com/italian> </a> |    "message": "Bem vindo à Itália, buon appetito!"    |
|        GET /        |     mexican     | <a> <https://...herokuapp.com/mexican> </a> |   "message": "Bem vindo ao México, buen provecho!"    |
|        GET /        |     russian     | <a> <https://...herokuapp.com/russian> </a> | "message": "Bem vindo à Rússia, naslazhdaysya yedoy!" |
|        GET /        |     holand      | <a> <https://...herokuapp.com/holand> </a>  | "message": "Bem vindo à Holanda, geniet van je eten!" |
|        GET /        |      egypt      |  <a> <https://...herokuapp.com/egypt> </a>  |    "message": "Bem vindo ao Egito, afiyet olsun!"     |

# Api sabores do mundo

 Projeto Final backend módulo 3 Blue Edtech.

 link do heroku: <a href="https://api-sabores-do-mundo.herokuapp.com/"> API Sabores do mundo</a>

------

Projeto de uma API cadastrar pratos de diferentes países do mundo em banco de dados, utilizando NodeJs, React, MongoDB Atlas e deploy na nuvem via Heroku.

### Intro

Nesse projeto o usuário poderá inserir seu(s) prato(s) preferidos dos seguintes países: México, Rússia, Itália, Holanda e/ou Egito.

Em seu cadastro o usuário deverá informar as seguintes informações: Nome do prato, ingredientes, modo de preparo, história do prato e link url de uma imagem do prato escolhido. Para a utilização da API Sabores do mundo corretamente, foram criadas rotas específicas para ação do usuário, que serão listadas mais a frente nesse documento.

Primeiramente o usuário deverá realizar algumas instalações pelo terminal do VS Code (por exemplo), abrindo o prompt de comando/terminal (ctrl + '') e inserir os seguintes comandos:

```javascript
npm init
npm start
npm i cors
npm i dotenv
npm i express -y
npm i mongoose
```

Para a utilização da API o usuário pode escolher algum API CLIENT de sua preferência, tais como, Insomnia, Postaman, Thunder Client (VS Code).

Nesse projeto foi utilizado o Thunder Client pela sua facilidade de estar diretamente integrado ao VS Code, facilitando testes.

Criado o pacote Environment para exportação/importação e também disponibilizado a collection com todas as rotas do CRUD já definidas.

Para acessar cada rota específica de país, basta inserir o endereço desejado dentre as opções:

- Rota principal da API Sabores do Mundo > <https://api-sabores-do-mundo.herokuapp.com>
- Itália > <https://api-sabores-do-mundo.herokuapp.com/italian>
- México > <https://api-sabores-do-mundo.herokuapp.com/mexican>
- Rússia > <https://api-sabores-do-mundo.herokuapp.com/russian>
- Holanda > <https://api-sabores-do-mundo.herokuapp.com/holanda>
- Egito > <https://api-sabores-do-mundo.herokuapp.com/egito>

Após selecionar o país desejado, o usuário terá como opções: Listar todos os pratos cadastrados, listar um prato cadastrado por ID, cadastrar um novo prato, alterar um prato já cadastrado por ID, deletar um prato já cadastrado por ID. Para facilitar foi criado as collections com todas as rotas previamente definidas juntamente com o arquivo Environment.

### Rotas criadas para cada ação a realizar

##### Rota raiz: retorna a confirmação de funcionamento da API

`GET /` (página inicial da API);

```javascript
https://api-sabores-do-mundo.herokuapp.com
{
  "message": "Bem vindo a API Sabores do Mundo!"
}
```

#### Rota / principal dos países:

| Tipo de requisição: | País escolhido: |                        Link da rota:                         |       Mensagem de retorno:        |
| :-----------------: | :-------------: | :----------------------------------------------------------: | :-------------------------------: |
|        GET /        |     México      | <a> <https://api-sabores-do-mundo.herokuapp.com/mexican> </a> | "message": "Bem vindo ao México!" |

#### Rota /Add (criar um novo prato):

| Tipo de requisição: | País escolhido: |                        Link da rota:                         |   Mensagem de retorno:    |
| :-----------------: | :-------------: | :----------------------------------------------------------: | :-----------------------: |
|       POST /        |     México      | <a> <https://api-sabores-do-mundo.herokuapp.com/mexican/add></a> | Prato criado com sucesso! |

#### Rota /listAll (listar todos os pratos cadastrados):

| Tipo de requisição: | País escolhido: |                        Link da rota:                         |    Mensagem de retorno:    |
| :-----------------: | :-------------: | :----------------------------------------------------------: | :------------------------: |
|        GET /        |     México      | <a> <https://api-sabores-do-mundo.herokuapp.com/mexican/listAll></a> | Retorna a lista dos pratos |

#### Rota /listId (listar um prato pelo ID):

| Tipo de requisição: | País escolhido: |                        Link da rota:                         |  Mensagem de retorno:   |
| :-----------------: | :-------------: | :----------------------------------------------------------: | :---------------------: |
|      GET / ID       |     México      | <a> <https://api-sabores-do-mundo.herokuapp.com/mexican/listId></a> | Retorna o prato pelo Id |

#### Rota /update (altera um prato pelo ID):

| Tipo de requisição: | País escolhido: |                        Link da rota:                         |  Mensagem de retorno:  |
| :-----------------: | :-------------: | :----------------------------------------------------------: | :--------------------: |
|      PUT / ID       |     México      | <a> <https://api-sabores-do-mundo.herokuapp.com/mexican/update/id></a> | Altera o prato pelo Id |

#### Rota /delete (deleta um prato pelo ID):

| Tipo de requisição: | País escolhido: |                        Link da rota:                         |  Mensagem de retorno:   |
| :-----------------: | :-------------: | :----------------------------------------------------------: | :---------------------: |
|     DELETE / ID     |     México      | <a> <https://api-sabores-do-mundo.herokuapp.com/mexican/delete/id></a> | Deleta um prato pelo Id |

* Todas as rotas descritas acima também se aplicam aos outros países: Holanda, Egito, Rússia e Itália.




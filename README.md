# Boas vindas ao repositório Ebytr-Back-End


# Descrição

Este projeto de back-end foi desenvolvido para atender as especificações do teste técnico da Ebytr - blits de carreira da Trybe.

# Oque foi desenvolvido

Foi desenvolvido uma API para atender as especificidades de uma lista de tarefas.
 - Foi utilizado a arquitetura MSC (Model, Service e Controller) para a realização deste projeto.
 
 
## Técnologias utilizadas

  - Node js, Typescript, Express.
  - Como ODM(Object documente Mapper) foi utilizado o Moongose.
  - O banco de dados utilizado no projeto foi o Mongodb.

---

## Bibliotecas utilizadas

  - Eslint - utilitário de código aberto JavaScript,usado para encontrar padrões problemáticos ou código que não adere a certas diretrizes de estilo. 
  - Chai - biblioteca de asserções , usada na realização de testes na aplicação.
  - Sinon - biblioteca para realização de stubs e mocks em testes.
  - Mocha - Estrutura de testes.
  - Cors - pacote node.js para fornecer um middleware Connect / Express, utilizado para permitir acessao a API.
  - Joi - biblioteca para validação de dados.
  - Nodemon - ferramenta para aplicativos Node.js,reiniciando automaticamente o aplicativo quando são detectadas alterações de arquivo no diretório.
  - Ts-node - utilizado para execução de TypeScript sem pré-compilar os arquivos javascript.

---

## Instrução

 - Para testar a aplicação localmente, após o clone do repositório, acesse a pasta da aplicação em seu terminal, execute o comando npm install para
instalar as dependencias da aplicação.
 - Para a instalação do banco de dados você pode consultar a documentação: https://www.mongodb.com/docs/manual/
 - Ainda na pasta do projeto, em seu terminal execute o comando npm start para o inicio da aplicação.
 - Com a aplicaçao em execução você pode executar as requisições através so Postman ou outro simular, 
 você pode encontrar o Postman aqui: https://www.postman.com/downloads/


## Conteudo:


- Endpoint post/todos - inséri uma nova tarefa no banco de dados, deve ser enviado no body da requisição o campo description com a descrição da tarefa.
- Endpoint put/todos/id da tarefa a ser editada - edita uma tarefa existente no banco de dados, pode ser enviado no body da requisição o campo description
com a nova descrição da tarefa ou o campo status que deve ser pendente, em andamento ou pronto.
 - Endpoint delete/todos/id da tarefa a ser deletada - remove a tarefa do banco de dados.
 - Endpoint get/todos - lista todas as tarefas do banco de dados.
 


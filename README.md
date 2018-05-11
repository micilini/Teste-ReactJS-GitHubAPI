# Teste-ReactJS-GitHubAPI [![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/dwyl/hapi-auth-jwt2.svg?maxAge=2592000)](https://codecov.io/github/dwyl/hapi-auth-jwt2?branch=master) [![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.org/dwyl/esta)

Teste com ReactJS e Webpack rodando em conjunto com a API do GitHub

# Como rodar este projeto ?

Tenha em mente que devido as configurações do arquivo a pasta node_modules não foi enviada para o github, a mesma deve ser adicionada automaticamente com os passos abaixo:

+ Instale o Node.js no seu computador ```(https://nodejs.org/)```
+ Com o terminal aberto (CMD no caso do windows), vá para a pasta aonde voce extraiu este projeto (Exemplo: ```cd C:/Teste-ReactJS-GitHubAPI```)
+ Após acessar a pasta basta rodar o comando de atualização, que vai fazer downloads de todas as dependencias e da pasta node_modules: ```npm i```
+ Por fim, basta executar o comando: ```npm run dev```
+ Abra seu navegador e acesse: ```http://localhost:8080/```

# Informações Relevantes

Este projeto faz uso da API do GitHub, aonde lista todos os projetos do GitHub da globo.com por ordem de “estrelas” de forma decrescente.
 
No clique desses projetos, é mostrado

- nome do projeto

- número de stars

- número de forks

- lista dos commits, paginados de 20 em 20

Existe um botão que carrega mais 20 commits a cada clique. O botão é escondido assim não houver mais commits a serem carregados.

> A aplicação foi desenvolvida apenas com ReactJs e Webpack



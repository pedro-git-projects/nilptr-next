---
title: "Estudo de Caso: Gestor Financeiro"
excerpt: "Neste blogpost, vamos explorar a jornada de desenvolvimento de um projeto integrado de backend, focado na construção de uma API REST. Acompanhe as fases do projeto, as instruções, as regras de negócio, as rotas implementadas e como instalar, executar e testar o projeto.
"
coverImage: "/assets/projects/finance.jpg"
date: "2022-11-22T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
ogImage:
  url: "/assets/projects/finance.jpg"
---

# Construindo uma API REST com Express: Projeto Integrado Backend

Neste blogpost, vamos explorar a jornada de desenvolvimento de um projeto integrado de backend, focado na construção de uma API REST. Acompanhe as fases do projeto, as instruções, as regras de negócio, as rotas implementadas e como instalar, executar e testar o projeto.

## Fase 1: Construindo a Base

### Instruções:

Na primeira fase do projeto, o objetivo é construir uma versão inicial da API REST utilizando o framework Express. Esta versão deve incluir rotas, controladores e testes unitários implementados. As respostas dos endpoints da API são mocadas, ou seja, simulam valores que serão usados nos testes.

## Fase 2: Refinando e Integrando

### Instruções:

Na segunda fase, avançamos para uma versão mais robusta da API REST. Agora, os modelos e validadores são implementados e integrados ao banco de dados MongoDB. Além disso, é adicionada a segurança da API utilizando JWT (JSON Web Tokens).

### Regras de Negócio:

A aplicação consiste em uma RESTful API para criar gerenciadores de finanças pessoais. Cada gerenciador de finanças possui saldo e uma lista de contas, onde cada conta possui título, custo, frequência, status e data de pagamento. Algumas regras de negócio incluem a necessidade de cadastro de usuário com email e senha únicos, diferentes níveis de privilégio administrativo, e funcionalidades específicas para cada grupo de usuários.

### Rotas:

A tabela abaixo lista as rotas implementadas na API:

| Rota                              | Método | Função                                              |
|-----------------------------------|--------|-----------------------------------------------------|
| /api-docs                         | GET    | Documentacao                                        |
| /budget                           | GET    | Retorna todos os gerenciadores de financas          |
| /budget                           | POST   | Cria um novo gerenciador de financas                |
| /budget/:id                       | GET    | Retorna o budget manager de id respectivo           | 
| /budget/:id                       | PUT    | Altera um gerenciador de financas                   |
| /budget/:id?                      | DELETE | Deleta um gerenciador de financas                   |
| /budget/:budgetid?/pay/:billid    | PUT    | Paga uma conta em um gerenciador de financas        |
| /budget/:id?/:operation/:balance  | PUT    | Altera o saldo de acordo com a operacao estipulada  |
| /budget/:id?/status/:status       | GET    | Filtra contas por status                            |
| /budget/:id?/frequency/:frequency | GET    | Filtra contas por frequencia                        |
| /budget/:id?/title/:title         | GET    | Filtra contas por titulo                            |
| /budget/:budgetid?/:billid        | DELETE | Deleta uma conta em un gerenciador de financas      |
| /signup 						    | POST   | Cria uma nova conta de usuário ou administrador     |
| /signin 						    | POST   | Loga um usuário     								   |
| /signout 						    | POST   | Desloga um usuário     							   |
| /user 						    | GET    | Lista todos os usuários 							   |
| /user 						    | PATCH  | Troca a senha de um usuário 					       |
| /user/:id 					    | GET    | Lista um usuário por ID 							   |
| /user/:id 					    | PUT    | Atualiza um usuário por ID 					       |
| /user/:id 					    | DELETE | Deleta um usuário por ID 					       |

### Instalando o Projeto:

Para instalar as dependências, você pode executar o comando `npm install` ou `make install`.

### Executando o Projeto:

Para executar o projeto, utilize o comando `npm run dev` ou `make run`.

### Rodando os Testes:

Para rodar os testes, utilize o comando `npm run test` ou `make test`.

### Estrutura do Projeto:

A estrutura de pastas e arquivos do projeto é organizada da seguinte maneira:

```
- src
  - Controllers
  - DTO
  - Exceptions
  - Interfaces
  - Middleware
  - Models
  - Routes
  - Services
  - Tests
  - Utils
  - app.ts
  - index.ts
- .gitignore
- Makefile
- jest.config.js
- swagger.yaml
- tsconfig.json
- tslint.json
```

### Bibliotecas Utilizadas:

Foram utilizadas várias bibliotecas para desenvolver a API, incluindo Express, Jest, Supertest, Swagger, JsonWebToken e Cookie parser.

A construção de uma API REST envolve várias etapas, desde a concepção até a implementação e testes. Esperamos que este blogpost forneça uma visão geral útil do processo de desenvolvimento de um projeto integrado de backend utilizando o framework Express. Continue explorando e experimentando para aprimorar suas habilidades de desenvolvimento de software!

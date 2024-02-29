---
title: "Estudo de Caso: Prontuário Eletrôncio IESB"
excerpt: "O uso da tecnologia na área da saúde é fundamental para otimizar processos, garantir a segurança dos pacientes e melhorar a qualidade do atendimento. Com o objetivo de modernizar seus serviços e proporcionar uma experiência mais eficiente aos usuários, o Instituto de Educação Superior de Brasília (IESB) decidiu investir no desenvolvimento de um Sistema de Prontuário Eletrônico. Neste artigo, vamos explorar como esse sistema está sendo construído utilizando o framework NestJS."
coverImage: "/assets/projects/doctor_2.jpg"
date: "2024-01-16T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
ogImage:
  url: "/assets/projects/doctor_2.jpg"
---

# Desenvolvimento de um Sistema de Prontuário Eletrônico com NestJS para o Instituto de Educação Superior de Brasília

O uso da tecnologia na área da saúde é fundamental para otimizar processos, garantir a segurança dos pacientes e melhorar a qualidade do atendimento. Com o objetivo de modernizar seus serviços e proporcionar uma experiência mais eficiente aos usuários, o Instituto de Educação Superior de Brasília (IESB) decidiu investir no desenvolvimento de um Sistema de Prontuário Eletrônico. Neste artigo, vamos explorar como esse sistema está sendo construído utilizando o framework NestJS.

## Resumo

O Sistema de Prontuário Eletrônico desenvolvido para o IESB tem como principal objetivo facilitar o registro de atendimentos realizados pelo núcleo social da instituição. Isso inclui o cadastro de atendimentos realizados por programas sociais vinculados a cursos oferecidos pela instituição.

## Versão 1: O Que Esperar

Na primeira versão do sistema, planejamos entregar funcionalidades essenciais que permitirão o registro de informações cruciais. Isso inclui a criação de cursos e programas sociais, além do cadastro de usuários administradores e cadastradores. Os beneficiários serão registrados com informações básicas, como nome, e-mail e telefone. Além disso, será possível registrar atendimentos, associando um usuário e uma data a um programa específico.

## Tecnologias Utilizadas

Para o desenvolvimento do Sistema de Prontuário Eletrônico, optamos por utilizar as seguintes tecnologias:

- **TypeScript**: Uma linguagem de programação que oferece tipagem estática opcional juntamente com as características modernas do JavaScript.
- **NestJS**: Um framework para construção de aplicativos server-side em Node.js que utiliza os conceitos de Arquitetura Orientada a Serviços (SOA).
- **Prisma**: Uma ferramenta ORM (Object-Relational Mapping) moderna para Node.js e TypeScript.
- **PostgreSQL**: Um sistema gerenciador de banco de dados relacional de código aberto.
- **Docker**: Uma plataforma que facilita o desenvolvimento, o envio e a execução de aplicativos em contêineres.

## Executando o Projeto

Se você está interessado em executar o projeto em seu ambiente local, siga estas instruções:

### Dependências

Antes de começar, certifique-se de ter o Node.js e o Docker instalados em sua máquina.

### Rodando Localmente

1. Clone o repositório do projeto:

```bash
git clone https://github.com/fabrica-bayarea/prontuario-back.git
```

2. Navegue até o diretório do projeto:

```bash
cd prontuario-back
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```sh
DATABASE_URL="postgresql://usuario:senha@host:port/nome_do_banco?schema=nome_do_schema"
JWT_SECRET="seu segredo"
POSTGRES_USER=usuario_postgres
POSTGRES_PASSWORD=senha_postgres
POSTGRES_DB=db_postgres
```

5. Inicie o banco de dados com Docker:

```sh
docker-compose up -d
```

6. Aplique as migrações necessárias:

```sh
npx prisma migrate dev
```

7. Inicie a aplicação:

```bash
npm run start:dev
```

8. Para executar os testes:

```bash
npm run test
```

## Conclusão

O desenvolvimento do Sistema de Prontuário Eletrônico para o Instituto de Educação Superior de Brasília é uma iniciativa importante que visa modernizar os processos e melhorar a qualidade dos serviços oferecidos pela instituição. Com a utilização de tecnologias modernas, como NestJS e Prisma, estamos confiantes de que seremos capazes de entregar uma solução eficiente e segura que atenda às necessidades do IESB e de seus usuários.

Se você deseja saber mais sobre o projeto ou contribuir para o seu desenvolvimento, não hesite em entrar em contato conosco. Juntos, podemos fazer a diferença na área da saúde e na vida das pessoas atendidas pelo IESB.

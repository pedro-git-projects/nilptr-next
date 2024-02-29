---
title: "Estudo de Caso: Carteirinha Digital"
excerpt: "Neste artigo, vamos explorar duas partes essenciais de um projeto de desenvolvimento de software voltado para o controle de entrada de alunos, a carteirinha digital: a API em Golang e o Frontend Mobile desenvolvido em Flutter. Ambos os componentes trabalham juntos para oferecer uma solução completa e eficiente para registrar a entrada de alunos e gerenciar as carteirinhas digitais.
"
coverImage: "/assets/projects/carteirinha.jpg"
date: "2023-02-16T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
ogImage:
  url: "/assets/projects/carteirinha.jpg"
---

# Desenvolvimento de Software: Carteirinha Digital API e Frontend Mobile

Neste artigo, vamos explorar duas partes essenciais de um projeto de desenvolvimento de software voltado para o controle de entrada de alunos, conhecido a carteirinha digital: a API em Golang e o Frontend Mobile desenvolvido em Flutter. Ambos os componentes trabalham juntos para oferecer uma solução completa e eficiente para registrar a entrada de alunos e gerenciar as carteirinhas digitais.

## API em Golang: Controle de Entrada e Autenticação

A API em Golang oferece uma interface robusta para registrar a entrada de alunos na escola e gerenciar autenticação. Aqui está uma visão geral das funcionalidades principais e como configurar o ambiente para começar:

### Configuração do Ambiente

Certifique-se de ter Golang, Docker, Docker Compose e GNU Make instalados em sua máquina. Após clonar o repositório, inicie o banco de dados PostgreSQL em um container Docker e execute as migrações usando a ferramenta Golang Migrate.

### Endpoints da API

A API oferece uma variedade de endpoints para autenticação, cadastro de usuários e verificação da saúde da API. Alguns dos principais endpoints incluem:

- **Autenticação**: A autenticação é necessária para acessar os endpoints relacionados ao registro de entrada de alunos e outros recursos sensíveis.

- **Registro de Entrada**: Permite registrar a entrada de um aluno na escola.

- **Cadastro de Usuários**: Oferece endpoints para cadastrar estudantes, responsáveis e funcionários.

### Como Executar

Siga as instruções fornecidas no repositório para configurar o ambiente e iniciar a API. Após a configuração, a API estará disponível em `http://localhost:8080`.

## Frontend Mobile em Flutter: Controle na Palma da Mão

O Frontend Mobile desenvolvido em Flutter oferece uma interface intuitiva para acessar as funcionalidades da "Carteirinha Digital". Aqui está um resumo das etapas de instalação e uso:

### Instalação

Clone o repositório e configure o ambiente Flutter em sua máquina. Certifique-se de ter todas as dependências instaladas e execute o aplicativo no seu dispositivo ou emulador.

### Uso

Após iniciar o aplicativo, faça login com suas credenciais e explore as funcionalidades disponíveis. Isso inclui a geração de códigos QR para autenticação e o registro de entrada de alunos.

## Conclusão

O projeto "Carteirinha Digital" demonstra a integração entre uma API em Golang e um Frontend Mobile em Flutter para fornecer um sistema eficiente de controle de entrada de alunos. Com funcionalidades de autenticação robustas, cadastro de usuários e uma interface móvel intuitiva, este projeto oferece uma solução completa para escolas que desejam adotar uma abordagem digital para o controle de entrada de alunos.

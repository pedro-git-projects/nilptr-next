---
title: "Estudo de Caso: Jogo Multiplayer Online de Desenho"
excerpt: "Em um mundo onde interações digitais estão se tornando cada vez mais prevalentes, encontrar formas de nos conectarmos com outras pessoas através de atividades divertidas e criativas é essencial. Happy Little Accidents é um jogo multijogador de desenho para desktop que objetiva reunir pessoas para uma experiência engajante e colaborativa. Nesse estudo de caso, falarei sobre os objetivos, stack e estrutura que permitem que o jogo entre em ação."
coverImage: "/assets/projects/bob.jpg"
date: "2022-12-04T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
ogImage:
  url: "/assets/projects/bob.jpg"
---

Em um mundo onde interações digitais estão se tornando cada vez mais prevalentes, encontrar formas de nos conectarmos com outras pessoas através de atividades divertidas e criativas é essencial. "Happy Little Accidents" é um jogo multijogador de desenho para desktop que objetiva reunir pessoas para uma experiência engajante e colaborativa. Nesse estudo de caso, falarei sobre os objetivos, stack e estrutura que permitem que o jogo entre em ação.

## Objetivo 

O principal objetivo do "Happy Little Accidents" é criar uma plataforma em que vários jogadores possam participar de um jogo de desenho juntos. Aqui estão os principais recursos:

- **Criação de salas**: Os jogadores podem criar suas próprias salas e convidar outras pessoas para participar delas, promovendo um senso de comunidade e colaboração.
  
- **Chat de texto em tempo real**: Cada sala vem equipada com um recurso de bate-papo por texto em tempo real, permitindo que os jogadores se comuniquem e criem estratégias enquanto desenham.
  
- **Requisito de prontidão**: Antes do início do jogo, todos os jogadores devem indicar sua prontidão, garantindo que todos estejam preparados para começar simultaneamente.
  
- **Entrada de desenho flexível**: Os jogadores têm a liberdade de desenhar usando várias entradas de cursor, como um mouse ou tablet, acomodando diferentes preferências e níveis de habilidade.

## O Stack

"Happy Little Accidents" utiliza as seguintes tecnologias para dar vida à sua visão:

- **Qt6 Core e Qt6 Websockets**: Aproveitando o poder do núcleo do Qt6 e a funcionalidade de websockets, o jogo facilita a comunicação perfeita entre os clientes e o servidor.
  
- **QML**: A interface de usuário do jogo é criada usando QML, permitindo que os desenvolvedores criem interfaces dinâmicas e visualmente atraentes.
  
- **CMake**: O CMake é usado para criar e gerenciar o projeto, simplificando o processo de desenvolvimento e garantindo a consistência em diferentes plataformas.

## Estrutura 

A arquitetura do aplicativo "Happy Little Accidents" é dividida em dois componentes principais: o cliente e o servidor.

- **Cliente**: Várias instâncias de cliente podem ser criadas, permitindo que os jogadores entrem em salas diferentes e participem do jogo de desenho. O cliente se comunica com o servidor usando websockets e a arquitetura de sinal/slot do Qt.
  
- **Servidor**: Uma única instância do servidor gerencia a lógica geral do jogo e facilita a comunicação entre os clientes. O servidor implementa um protocolo de mensagens, permitindo que os clientes executem ações como indicar prontidão ou salvar desenhos.


## Conclusão 

"Happy Little Accidents" demonstra o poder da tecnologia para promover a criatividade e a colaboração em um ambiente digital. Ao fornecer uma plataforma onde os jogadores podem se reunir para desenhar, conversar e se divertir, o jogo serve como um lembrete da alegria que pode ser encontrada em experiências compartilhadas. Seja você um aspirante a artista ou simplesmente esteja procurando uma maneira de se conectar com amigos, o jogo oferece um espaço acolhedor para todos.

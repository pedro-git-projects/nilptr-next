---
title: "Estudo de Caso: Rede Neural de Direção Automática"
excerpt: "Uma empresa gostaria de implementar um sistema de direção automática em seus carros. Entretanto, eles precisam de uma prova de conceito para levar a ideia adiante. Seu objetivo como desenvolvedor será criar um modelo simples, que exiba como essa ideia poderia ser implementada na prática."
coverImage: "/assets/projects/self_driving.jpg"
date: "2022-05-23T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
ogImage:
  url: "/assets/projects/self_driving.jpg"
---

## Premissa

Este projeto foi desenvolvido como trabalho final da disciplina de lógica de programação durante a minha graduação em ADS. Na época ficamos livres para implementar qualquer MVP que atendesse a critérios mínimos de manipulação de estruturas de dados e de controle de fluxo, assim sendo escolhi a seguinte situação problema:

"Uma empresa gostaria de implementar um sistema de direção automática em seus carros. Entretanto, eles precisam de uma prova de conceito para levar a ideia adiante. Seu objetivo como desenvolvedor será criar um modelo simples, que exiba como essa ideia poderia ser implementada na prática."


## O modelo

Imagine uma estrada reta onde três carros do tipo "AUTO" se movem automaticamente para frente, criando um fluxo de tráfego contínuo.

A estrela do nosso modelo são os 100 carros do tipo "IA" que são gerados a cada carregamento da página. Esses carros são equipados com sensores que detectam colisões com outros objetos, como as extremidades da estrada e outros veículos. Esses sensores são representados por retas traçadas a partir do centro de cada veículo.

Os carros "IA" são controlados de maneira aleatória por meio de um algoritmo que gera números entre -1 e 1. Esses números determinam se o carro deve avançar para frente, dar marcha à ré, virar à direita ou à esquerda. Embora esse método de controle seja aleatório, é uma representação inicial do comportamento de uma inteligência artificial em um ambiente de tráfego.

Reconhecemos que o sucesso da ativação aleatória é limitado. Portanto, implementamos algumas estratégias para melhorar o desempenho do modelo:

1. Geração Simultânea de Carros: 100 carros são gerados simultaneamente em cada iteração, aumentando a diversidade e o potencial de descoberta.

2. Critério de Avaliação: Utilizamos um critério para determinar o melhor controle, que é simplesmente o que consegue percorrer a maior distância no eixo Y.

3. Botão de Salvamento: Implementamos um botão que salva o melhor controle da última iteração, permitindo sua utilização na próxima, o que possibilita uma continuidade nos testes e melhorias.

4. Algoritmo de Mutação: Desenvolvemos um algoritmo para mutar cada iteração com base na anterior, procurando continuamente por resultados superiores e refinando o comportamento dos carros "IA".

Essas técnicas combinadas nos permitem explorar e entender melhor os padrões de comportamento dos carros autônomos em um ambiente de tráfego virtual, representando um emocionante avanço em nossa pesquisa de inteligência artificial.

## O código

O código foi construído utilizando o estilo orientado a objetos, sendo organizado majoritariamente em classes.

Ele também foi quebrado nos seguintes arquivos:

-    index.html

Onde os diversos arquivos script são importados, os canvas são criados e o css é importado.

-    style.css

Onde os estilos foram definidos

-    main.js

Responsável por ser a "porta de entrada" do programa, onde chamamos todas as classes relevantes e os métodos para desenhar e animar os componentes do código.

-    carro.js

Responsável por definir os carros, independentemente dos seus tipos. Inclui por exemplo, sua altura, largura, velocidade, aceleração, atrito, se foi danificado ou não e como se movimenta.

-    controle.js

Não teve uso substancial na versão final, mas durante o processo de implementação foi utilizado para que eu pudesse controlar o carro com o teclado. É uma classe muito simples que controla os valores da direção do carro (que são booleanos) utilizando eventos do teclado.

-    estrada.js

Define a estrada, seus limites, assim como as características necessárias para que possamos detectar a colisão com as suas laterias. Alguns métodos importantes como para o posicionamento correto dos carros nas faixas também foram implementados aqui.

-    sensor.js

Responsável por projetar raios a partir do carro para que possamos detecatar a colisão (interseção) com objetos que foram supostos ser sólidos, como outros carros e os limites da estrada.

-    rede.js

Possui duas classes RedeNeural e Nivel. Nessa implementação, uma rede neural é simplesmente um array de níveis e os níveis definem simplesmente as entradas saídas e pesos da nossa rede neural. A rede por sua vez conta com métodos para passar saídas de um nível como entradas para outro níveis e uma função mutar que nos permite gerar variações quão grandes ou pequenas nós quieramos nos carros criados.

-    utils.js

Conta com funções que são utilizadas em vários arquivos, elas são para o cálculo de interpolação linear, cálculo de intersecção entre pontos e polígonos.

-    visualizador.js

É a classe que nos permite visualizar a rede neural do carro com melhor adequação em tempo real.

Vale notar que o projeto tem 0 dependências.

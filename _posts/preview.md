---
title: "Memória Stack & Heap"
excerpt: "Nesse artigo trabalharemos a distinção entre pilha e monte na memória principal."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---


Ambos, stack e heap, ou como serão referidos nese vídeo, pilha e monte são regiões da memória principal (RAM) do computador que estão disponíveis para um programa em tempo de execução.

A pilha armazena os valores na ordem em que os recebe e os remove na ordem inversa. Por isso o nome pilha, o primeiro a entrar é o último ema sair. 

Basta pensar em uma pilha de livros, quando você adiciona mais livros, você os coloca no topo da pilha e quando você precisa de um livro, você tira um do topo.

Adicionar ou remover livros do meio ou do final não funcionaria tão bem.

A adição de dados na pilha é chamado de empilhar (push onto the stack) para pilha. E remover é chamado de desempilhar (pop from the stack).

Todos os dados armazenados na pilha devem um tamanho *fixo* e *conhecido*. 

Isso implica que dados cujo tamanho pode ser alterado durante a execuação do programa ou cujo tamanho é desconhecido em tempo de compilação devem ser armazenados em outro lugar. Este lugar é a o **monte** (heap).

O monte é muito menos organizado. Quando você vai armazenar dados no monte, você solicita uma certa quantidade de epsaço. O alocador de memória encontra espaço livre no monte de tamanho suficiente, o macra como em uso e retorna *um ponteiro* isto é, o endereço de memória daquele local.

Esse processo é chamado de alocar no monte, mais comunmente chamado simplesmente de alocar já que empilhar valores na pilha não é considerado alocar.

Uma vez que o ponteiro para o monte tem um tamanho *fixo* e *conhecido*, o ponteiro pode ser armazenado na pilha, mas para recuperar o dado em si, precisamos seguir o ponteiro até o endereço de memória para o qual aponta.

Empilhar na pilha é mais rápido do que alocar no monte porque o alocador nunca precisa procurar um local para armazenar novos dados. O local é sempre no topo da pilha.

Contrastantemente, alocar espaço no monte requer mais trabalho já que o alocador precisa primeiro enontrar espaço suficiente para armazenar os dados e em seguida, passar pela burocracia para preparar o monte para a próxima alocação.

Acessar dados no monte é mais lento do que acessá-los na pilha, porque você precisa seguir o ponteiro para chegar lá. Processadores contemporaneos são mais rápidos quando pulam menos de lugar para lugar na memória.

Quando nosso programa invoca uma função, os valores passados para a função, incluindo, potencialmente, ponteiros para dados no monte, e as variaveis locais são empilhadas. Quando a função termina, esses valores são removidos da pilha.

Tomar conta de que partes do código estão utilizando quais dados no monte, minimizar a quantidade de dados duplicados no monte e remover dados não utilizados do monte são todos problemas de gerenciamento de memória.

Há ainda memória estática e especifica para threads. 
Memória estática é aquela que é usada para guardar valores que devem existir durante toda a duração de um programa. Diferentemente da pilha, cujos tamanho e elementos devem ser conhecidos em tempo de compilação mas são criados e administrados pelo sistema operacional em tempo de execução, a memória estática faz parte diretamente do binário de um programa, seus valores não precisando ser apenas conhecidos, mas ainda imutáveis. Um exemplo comum de alocação estática são literais de strings.

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

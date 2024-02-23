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

## Introdução
Ambos, stack e heap, ou como serão referidos nesse vídeo, pilha e monte são regiões da memória principal (RAM) do computador que estão disponíveis para um programa em tempo de execução.

## Pilha (Stack)
A pilha armazena os valores na ordem em que os recebe e os remove na ordem inversa. Por isso o nome pilha, o primeiro a entrar é o último a sair.

### Funcionamento da Pilha
Basta pensar em uma pilha de livros, quando você adiciona mais livros, você os coloca no topo da pilha e quando você precisa de um livro, você tira um do topo. Adicionar ou remover livros do meio ou do final não funcionaria tão bem.

### Operações na Pilha
A adição de dados na pilha é chamado de empilhar (push onto the stack) para pilha. E remover é chamado de desempilhar (pop from the stack). Todos os dados armazenados na pilha devem ter um tamanho fixo e conhecido.

## Monte (Heap)
Isso implica que dados cujo tamanho pode ser alterado durante a execução do programa ou cujo tamanho é desconhecido em tempo de compilação devem ser armazenados em outro lugar. Este lugar é o **monte** (heap).

### Funcionamento do Monte
O monte é muito menos organizado. Quando você vai armazenar dados no monte, você solicita uma certa quantidade de espaço. O alocador de memória encontra espaço livre no monte de tamanho suficiente, o marca como em uso e retorna um ponteiro, isto é, o endereço de memória daquele local.

### Operações no Monte
Esse processo é chamado de alocar no monte, mais comumente chamado simplesmente de alocar já que empilhar valores na pilha não é considerado alocar. Uma vez que o ponteiro para o monte tem um tamanho fixo e conhecido, o ponteiro pode ser armazenado na pilha, mas para recuperar o dado em si, precisamos seguir o ponteiro até o endereço de memória para o qual aponta.

## Comparação e Desempenho
Empilhar na pilha é mais rápido do que alocar no monte porque o alocador nunca precisa procurar um local para armazenar novos dados. O local é sempre no topo da pilha. Contrastantemente, alocar espaço no monte requer mais trabalho já que o alocador precisa primeiro encontrar espaço suficiente para armazenar os dados e em seguida, passar pela burocracia para preparar o monte para a próxima alocação.

Acessar dados no monte é mais lento do que acessá-los na pilha, porque você precisa seguir o ponteiro para chegar lá. Processadores contemporâneos são mais rápidos quando pulam menos de lugar para lugar na memória.

## Considerações Finais
Quando nosso programa invoca uma função, os valores passados para a função, incluindo, potencialmente, ponteiros para dados no monte, e as variáveis locais são empilhadas. Quando a função termina, esses valores são removidos da pilha. Tomar conta de que partes do código estão utilizando quais dados no monte, minimizar a quantidade de dados duplicados no monte e remover dados não utilizados do monte são todos problemas de gerenciamento de memória.

## Memória Estática e Específica para Threads
Há ainda memória estática e específica para threads. Memória estática é aquela que é usada para guardar valores que devem existir durante toda a duração de um programa. Diferentemente da pilha, cujo tamanho e elementos devem ser conhecidos em tempo de compilação mas são criados e administrados pelo sistema operacional em tempo de execução, a memória estática faz parte diretamente do binário de um programa, seus valores não precisando ser apenas conhecidos, mas ainda imutáveis. Um exemplo comum de alocação estática são literais de strings.

```go
func generateSlug(title string) string {
	slug := strings.ReplaceAll(strings.ToLower(title), " ", "-")
	regexpForSlug := regexp.MustCompile("[^a-z0-9-]")
	slug = regexpForSlug.ReplaceAllString(slug, "")

	return slug
}
```

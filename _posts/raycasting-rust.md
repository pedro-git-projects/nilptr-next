---
title: "Estudo de Caso: Motor Gráfico de Raycasting [Rust]"
excerpt: "No mundo do desenvolvimento de jogos, a criação de gráficos tridimensionais é uma tarefa complexa e desafiadora. Uma das técnicas mais antigas e eficazes para simular a perspectiva tridimensional em um ambiente 2D é o Raycasting. 
"
coverImage: "/assets/projects/wolf.png"
date: "2024-01-21T05:35:07.322Z"
author:
  name: Pedro Martins Pereira 
ogImage:
  url: "/assets/projects/wolf.png"
---

# O projeto 

No mundo do desenvolvimento de jogos, a criação de gráficos tridimensionais é uma tarefa complexa e desafiadora. Uma das técnicas mais antigas e eficazes para simular a perspectiva tridimensional em um ambiente 2D é o Raycasting. 


Como a implementação da lógica de raycasting envolve principalmente o uso de funções trigonométricas e conceitos matemáticos como pontos e retas, compreendendo a geometria, criá-la é relativamente fácil. Por outro lado, para que a engine seja funcional, precisamos de métodos para renderizar imagens na tela e capturar entradas do usuário. Assim, a implementação deste tipo de engine se tornou um desafio autoimposto para que eu me sinta certo da minha capacidade de operar com uma linguagem de programação, já tendo implementado esse mesmo projeto em JavaScript, C e Go. 

Foi o caso, pois, que ao ser confrotnado com uma oportunidade de trabalhar com Rust após algum tempo sem lidar com a linguagem, decidi atacar este projeto para me preparar para a entrevista.  

## O que é Raycasting 

A ideia básica do raycasting é que o mapa é uma grid 2D onde cada célula pode ter um valor 0 indicando a ausência de uma parede ou colisão, ou algum outro número inteiro diferente de zero indicando o contrário. Diferentes números podem ser utilizados para renderizar diferentes texturas. 

Para cada coordenada x na tela, isto é, para cada faixa vertical, traçamos um raio, efetivamente uma reta, que parte da coordenada do jogador e cuja direção depende de ambas, a direção para onde o jogador está olhando e a coordenada x da tela. 

Como esse raio é uma reta, ela é projetada desse ponto e direção em linha reta até encontrar uma célula cujo valor é diferente de 0. Quando isso ocorre, calculamos a distância entre o ponto de colisão e o jogador e utilizamos o resultado desse cálculo para determinar o quão alta a textura da colisão deve ser renderizada na tela. Quanto mais longe, menor, mais perto, maior. Todos esses cálculos são bidimensionais.

## Prolegómenos de Rust

Rust é uma linguagem de programação que busca maximizar performance e segurança de memória garantindo [RAII](https://pt.wikipedia.org/wiki/Aquisi%C3%A7%C3%A3o_de_Recurso_%C3%A9_Inicializa%C3%A7%C3%A3o) em tempo de compilação.

*nota, chamarei aqui "owner" de "dono" e "dropped" de "liberado".*

Para tanto, existem algumas regras :

>Cada valor tem um dono.
>Só pode haver um dono por vez.
>Se o dono do valor sair de escopo, o valor é liberado.

Além disso, existem as seguintes regras para referências:

>Em qualquer momento, só pode haver uma de duas coisas:
    >Uma referência mutável para um valor ou;
    >Qualquer quantidade de referências imutáveis para um valor;
>Referências devem ser sempre válidas


Caso algum desses critérios não seja cumprido, o programa não pode ser compilado.

Para que esse sistema funcione sem sintaxe adicional, o compilador deve inferir o tempo de vida de todos os objetos do programa em tempo de compilação. Entretanto, isso nem sempre é possível. Quando esse é o caso, devemos usar "parâmetros de tempo de vida" que são parâmetros genéricos que se referem não ao tipo de um objeto, mas ao seu tempo de vida.

A sintaxe para tanto é a seguinte:

```rust
struct TrechoImportante<'a> {
    parte: &'a str,
}

fn main() {
    let livro = String::from("My name is Edward Joseph Snowden. I used to work for the government but now I work for the public. It took me nearly...");
    let primeira_frase = livro.split('.').next().expect("Não foi possível encontrar um '.'");
    let i = TrechoImportante {
        parte: primeira_frase,
    };

    println!("{}", i.parte)
}
```

Essa struct contém um único campo parte que contém um string slice, que é uma referência. Similarmente a tipos genéricos, declaramos o nome do parâmetro genérico de tempo de vida dentro de <> após o nome da strcut e podemos usar esse parâmetro dentro do corpo da definição do strucct. Essa anotação significa que um instância de TrechoImportante não pode viver mais que a referência contida no seu campo "parte".

A função main no exemplo cria uma instância de TrechoImportante que guarda uma referência para a primeira frase da String cujo dono é a variável livro. Os dados em livro existem antes da instância de TrechoImportante ser criada. Adicionalmente, livro não sai de escopo antes de TrechoImportante sair de escopo, então  a referência em TrechoImportante é válida.

A integração dos tempos de vida no sistema de tipos é essencial para garantir a segurança da linguagem, ao mesmo tempo, em que representa um desafio significativo para os programadores ao escreverem código nesta linguagem, sendo muitas vezes apontada como a característica mais difícil de se aprender em Rust.

## Raycasting em Rust

Por já ter experiência desenvolvendo aplicações desse tipo, iniciei com uma arquitetura bem definida para o projeto. A ideia era criar os seguintes módulos:

#### App

O módulo app deveria conter uma struct, App que encapsula todas as partes da aplicação, ao mesmo tempo, em que serve como meios de possibilitar injeção de dependência. 

Esta struct deve ter métodos para, por exemplo, calcular as intersecções horizontal e vertical de um raio, traçar raios, processar entrada, gerar a projeção 3d e atualizá-la. 

#### Color

O módulo color é responsável por armazenar o tipo ColorBuffer, o struct responsável por criar o streaming de texturas para o display. 

#### Game

O módulo game deve armazenar objetos e funções que estão diretamente ligados à lógica do jogo, em particular o mapa, um array bidmensional: 

```rust
[[i32; 20]; 13]
```

E o vetor de raios:

```rust
let rays: Vec<Ray> = vec![Ray::new(&mut 0.0); NUM_RAYS as usize];
```

#### Player

O módulo player armazena a struct do jogador assim como enums com os valores necessários para determinar a direção em que ele anda ou vira.

```rust
#[derive(Clone, Copy)]
pub enum TurnDirection {
    Neutral = 0,
    Left = -1,
    Right = 1,
}

#[derive(Clone, Copy)]
pub enum WalkDirection {
    Neutral = 0,
    Forward = 1,
    Backward = -1,
}

pub struct Player {
    pub x: f64,
    pub y: f64,
    pub width: f64,
    pub height: f64,
    pub turn_direction: TurnDirection,
    pub walk_direction: WalkDirection,
    pub rotation_angle: f64,
    pub walk_speed: f64,
    pub turn_speed: f64,
    pub minimap_scale: f64,
}
```
#### Ray

O módulo ray armazena a struct Ray que define a forma dos raios a serem traçados e contém campos como colisão em x, colisão em y, distância e conteúdo. 


#### TimeKeeper 

O módulo timekeeper armazena todos os tipos de dados, constantes e funções que estão ligadas a framerate, frametime e ritmo de atualização. A struct que leva o nome do módulo possui campos importantes como delta de tempo e tempo de espera:

```rust
#[derive(Default)]
pub struct TimeKeeper {
    ticks_last_frame: u64,
    delta_time: f64,
    frame_time_target: u64,
    wait_time: u64,
}
```

#### Utils

O módulo utils armazena funções de uso geral e que poderiam ser utilizadas fora desse projeto, assim como seus testes. Neste caso em particular, a maioria das funções representa relações geométricas. Por exemplo, a função para normalização de ângulos: 

```rust

pub fn normalize_angle(angle: &mut f64) {
    *angle = angle.rem_euclid(2.0 * PI);
    if *angle < 0.0 {
        *angle += 2.0 * PI;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_normalize_angle() {
        // positive angle normalization
        let mut angle = 3.0 * PI;
        normalize_angle(&mut angle);
        assert_eq!(angle, PI);

        // negative angle normalization
        let mut angle = -PI;
        normalize_angle(&mut angle);
        assert_eq!(angle, PI);

        // angle within the range
        let mut angle = 0.5 * PI;
        normalize_angle(&mut angle);
        assert_eq!(angle, 0.5 * PI);
    }
```

#### Window

Por fim, o módulo window armazena todas as constantes que se relacionam ao tamanho da janela, largura do campo de visão e quantidade de raios a serem renderizados.

Vale à pena notar que fiz uso da biblioteca lazy_static para criar uma variável de armazenamento estático cujos valores de inicialização seriam decididos apenas em tempo de execução:

```rust
use lazy_static::lazy_static;
lazy_static! {
    pub static ref DISTANCE_PROJ_PLANE: f64 = (WINDOW_WIDTH as f64 / 2.0) / (FOV / 2.0).tan();
}
```

### O desafio

Embora a princípio tudo parecesse correr bem, logo me deparei com o desafio principal decorrente da escolha de Rust como a tecnologia principal.

Como dito anteriormente, eu gostaria de encapsular toda a funcionalidade da aplicação em um struct App. Entretanto, fazê-lo mostrou-se uma tarefa não trivial: 

Na biblioteca [rust-sdl2](https://github.com/Rust-SDL2/rust-sdl2) há um tipo particularmente problemático, a tal ponto que na documentação temos (tradução livre):

"Sobre o recurso unsafe_textures

No módulo sdl2::render, a Texture tem, por padrão, tempos de vida para evitar que viva mais do que seu pai, TextureCreator. Esses tempos de vida às vezes são muito difíceis de se lidar com em Rust e, portanto, você tem a opção de ativar o recurso unsafe_textures.

Isso remove os tempos de vida das Texturas, ao custo do gerenciamento manual opcional da memória. Se você quiser destruir manualmente as Texturas utilizadas, poderá chamar o método destroy de suas Texturas, mas lembre-se de que ele não deve ser chamado se nenhum dos pais (Canvas ou TextureCreator) ainda não tiver sido destruído. Se este método não for invocado, a memória será simplesmente liberada quando o último Canvas ou o último TextureCreator forem destruídos."

Uma das partes fundamentais da struct App é o campo "color_buffer", entretanto, para que o color buffer possa fazer seu trabalho corretamente, ele precisa criar texturas:

```rust
pub struct ColorBuffer<'a> {
    pub buffer: Vec<u32>,
    pub texture_creator: &'a TextureCreator<WindowContext>,
    pub texture: Texture<'a>,
}


impl<'a> ColorBuffer<'a> {
    pub fn new(texture_creator: &'a TextureCreator<WindowContext>) -> Result<Self, String> {
        let buffer = vec![0; (WINDOW_WIDTH * WINDOW_HEIGHT) as usize];

        let texture = match texture_creator.create_texture_streaming(
            PixelFormatEnum::ARGB8888,
            WINDOW_WIDTH,
            WINDOW_HEIGHT,
        ) {
            Ok(texture) => texture,
            Err(_) => return Err(String::from("Failed to create texture")),
        };

        Ok(Self {
            buffer,
            texture_creator,
            texture,
        })
    }
...
}
```
Assim sendo, App deveria ter uma instância de texture creator que seria passada para instanciar o ColorBuffer no construtor. O problema é, dadas as regras de "ownership & borrowing" anteriormente explicadas. Se eu tentasse fazer com que o campo texture_creator da struct App fosse um "owned type" e criasse a instância do TextureCreator no construtor, seu valor seria liberado ao fim da função. Estratégias aparentemente óbvias como colocar a instância do TextureCreator em uma RefCell também não solucionariam o problema, além de incorrer em impactos de performance. 

Embora a solução fosse simples, simplesmente seguir a sugestão imediata do erro de complição, gerava outro erro de compilação.

A solução foi, compreender bem a idea por trás de parâmetros genéricos de tempo de vida e
utilizar anotações explícitas, garantindo que nenhuma das partes, video_subsytstem, sdl_context e canvas iriam continuar vivendo depois que a minha instância de App fosse destruída.

Para tanto foi criada uma nova struct cujo único propósito era ser dona de todos os tipos que fossem necessários ser referenciados em App e receber o parâmetro de tempo de vida do App, garantindo que o programa não teria referências pendentes. 

```rust
pub struct TextureOwner {
    pub sdl_context: sdl2::Sdl,
    pub video_subsystem: sdl2::VideoSubsystem,
    pub canvas: sdl2::render::Canvas<sdl2::video::Window>,
    pub texture_creator: sdl2::render::TextureCreator<WindowContext>,
}

pub fn build_app<'b>(&'b mut self) -> Result<App<'b>, String> {
        let app = App::new(
            &self.sdl_context,
            &self.video_subsystem,
            &mut self.canvas,
            &self.texture_creator,
        )?;
        Ok(app)
    }
...
}
```

```rust
pub struct App<'a> {
    pub game: Game,
    pub player: Player,
    pub sdl_context: &'a sdl2::Sdl,
    pub video_subsystem: &'a sdl2::VideoSubsystem,
    pub texture_creator: &'a TextureCreator<WindowContext>,
    pub color_buffer: ColorBuffer<'a>,
    pub canvas: &'a mut Canvas<sdl2::video::Window>,
    pub event_pump: sdl2::EventPump,
    pub timekeeper: TimeKeeper,
    pub is_running: bool,
}

impl<'a> App<'a> {
    pub fn new(
        sdl_context: &'a sdl2::Sdl,
        video_subsystem: &'a sdl2::VideoSubsystem,
        canvas: &'a mut Canvas<sdl2::video::Window>,
        texture_creator: &'a TextureCreator<WindowContext>,
    ) -> Result<Self, String> {
        let event_pump = sdl_context.event_pump()?;
        let color_buffer = ColorBuffer::new(&texture_creator)?;

        Ok(App {
            game: Game::default(),
            player: Player::default(),
            sdl_context,
            video_subsystem,
            canvas,
            texture_creator,
            color_buffer,
            event_pump,
            timekeeper: TimeKeeper::default(),
            is_running: true,
        })
    }
}
```

Isso quer dizer que no processo de instanciação do App é preciso instanciar antes um TextureOwner e que a instanciação do App agora foi abstraída para um método builder de dentro do TextureOwner. 

```rust
pub fn main() -> Result<(), String> {
    let mut owner = TextureOwner::new()?;
    let mut app = owner.build_app()?;

    while app.is_running {
        app.process_input();
        app.update();
        app.render()?;
    }
    Ok(())
}
```


### Conclusão

*"Prefira composição a herança"* é um lema tão forte que linguagens como Go e Rust não possuem herança. . A abordagem de composição oferece vantagens claras na criação de código mais flexível, sustentável e reutilizável. Entretanto, devido à complexidade do sistema de tipos de Rust e o fato de que tempos de vida são parte desse sistema, por vezes criar objetos complexos se mostra uma tarefa não trivial.

Por exemplo, ao desenvolver um construtor para criar uma instância de App devidamente inicializada, foi necessário coordenar cuidadosamente os tempos de vida de várias estruturas de dados que compõem o App. Isso exigiu uma compreensão precisa de como os parâmetros de tempo de vida são utilizados e quando os objetos são desalocados em relação uns aos outros.

No entanto, o resultado final compensa esses desafios, resultando em um código consideravelmente mais robusto e seguro. Com a garantia de ausência de referências pendentes ou inválidas em tempo de execução, a abordagem de composição em Rust oferece uma base sólida para o desenvolvimento de sistemas complexos e confiáveis.

Desenvolver o motor de raycasting em Rust foi uma excelente maneira de me reacostumar com a linguagem e aprofundar meu conhecimento em um conceito que, embora não seja frequentemente manipulado diretamente, tem uma influência profunda no sistema de tipos da linguagem.

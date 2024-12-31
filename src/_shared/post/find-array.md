Apresente um Problema Comum (Que `as const` Resolve)

Eu mudei totalmente como crio meus tipos no TypeScript depois de conhecer `as const`.  
Por quê? Vamos lá. O jeito tradicional de criar um `enum` seria assim:

```tsx
enum KageTitles {
  Hokage = "Hokage",
  Kazekage = "Kazekage",
  Raikage = "Raikage",
  Mizukage = "Mizukage",
  Tsuchikage = "Tsuchikage",
}

function describeKage(kage: KageTitles): void {
  console.log(kage);
}

describeKage(KageTitles.Hokage);
describeKage('Hokage'); // Error: Argument of type '"Hokage"' is not assignable to parameter of type 'KageTitles'.
```

Como pode ver, dessa forma funciona. Maaaass, achei muito verboso. Então, encontrei um padrão que resolveu isso. Não sei se tem um nome oficial, mas o chamei de `as const`.

Antes de explicar como ele funciona, vou mostrar os problemas que ele pode evitar:

```tsx
const KageTitlesWithoutConst = [
  "Hokage",
  "Kazekage",
  "Raikage",
  "Mizukage",
  "Tsuchikage",
];

type KageTitle = (typeof KageTitlesWithoutConst)[number];

function describeKage(kage: KageTitle): void {
  console.log(kage);
}

describeKage('Raikage'); // OK
describeKage('Mizukage'); // OK
describeKage('Naruto'); // OK, mas não deveria funcionar!
```

Esse método tem alguns problemas. Primeiro, ele não reconhece valores inválidos:

```tsx
describeKage('Naruto'); // OK, mas não deveria funcionar!
```

Como você pode ver, ele não gera erro em nível de compilação quando insiro um título que não é um Kage. Mesmo assim, o código não acusa o erro.

Além disso, ele não oferece **autocompletar** no editor, o que prejudica a usabilidade.

![not alto complete](https://i.ibb.co/VYp3CVF/02.png)

Por isso, essa abordagem pode ser inviável, pois abre brechas de segurança onde qualquer valor aleatório é aceito. Agora entra o `as const`.

## Como Funciona o `as const`

```tsx
const KageTitlesConst = [
  "Hokage", 
  "Kazekage", 
  "Raikage", 
  "Mizukage", 
  "Tsuchikage"
] as const;
```

O `as const` no final do array "trava" os dados, tornando o array imutável e fixando os valores como literais. Isso significa que:

- O array não pode ser modificado.
- Os valores são tratados como literais específicos.

```tsx
const KageTitlesConst = ["Hokage", "Kazekage", "Raikage", "Mizukage", "Tsuchikage"] as const;
type KageTitle = (typeof KageTitlesConst)[number];

function describeKage(kage: KageTitle): void {
  console.log(kage);
}

describeKage('sdfas'); // Dá erro em tempo de compilação
describeKage(''); // Mostra auto complete no editor
describeKage('Mizukage'); // Funciona perfeitamente
```
Além de ser menos verboso, funciona muito bem com o **autocompletar** do VSCode.

![alto complete](https://i.ibb.co/85WmZcf/01.png)

### Conclusão


| Aspecto                     | **enum**                                                                              | **as const**                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Facilidade de Leitura**   | Define nomes e valores diretamente, mas cria um objeto em tempo de execução.          | Simples e direto, sem criar objetos em tempo de execução.                           |
| **Imutabilidade**           | Não é automaticamente imutável; valores podem ser sobrescritos no código.             | Totalmente imutável por padrão, garantindo maior segurança.                         |
| **Segurança de Tipos**      | Valores limitados aos definidos no \`enum\`, mas o controle pode ser mais permissivo. | Mais rigoroso, limita explicitamente os valores ao conjunto literal definido.       |
| **Performance**             | Cria um objeto adicional em tempo de execução.                                        | Apenas uma declaração de tipo e valor, sem impacto em tempo de execução.            |
| **Extensão**                | Fácil de adicionar novos itens ao \`enum\`.                                           | Fácil de adicionar novos itens, mas a declaração precisa ser expandida manualmente. |
| **Uso de Strings Literais** | Usa strings literais nos valores, mas os nomes podem ser dissociados do valor.        | Garante que os valores sejam consistentes e fixos como literais.                    |


Agora que você viu como `enum` e `as const` funcionam, a escolha depende do seu projeto. Se precisa de algo mais tradicional e fácil de usar em tempo de execução, vá de `enum`. Mas se quer tipos imutáveis, simples e seguros, `as const` é o caminho.

Se você já conhecia, prefere o `as const` ou o tradicional `enum`?

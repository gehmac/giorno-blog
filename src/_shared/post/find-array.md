## Vamos falar sobre outro truque insano do TypeScript: `Array[number]`
Imagine que você tem um array de strings representando tipos de papéis (roles):

```typescript
const roles = ["admin", "editor", "contributor"] as const;
```

Aqui estamos declarando que o array `roles` é uma tupla com valores constantes. Isso significa que cada elemento de `roles` é um literal, e o TypeScript irá tratá-los como tipos literais específicos.  
Usamos o operador `typeof` para pegar o tipo do array `roles`:

```typescript
type RolesAsType = typeof roles;
```

Agora podemos criar um novo tipo usando a expressão `Array[number]`. Isso significa: "pegue os tipos dos valores contidos no array".

```typescript
type Role = RolesAsType[number];
```

O resultado do tipo `Role` é uma união de literais:

```typescript
type Role = "admin" | "editor" | "contributor";
```

Parece insanidade, mas é extremamente útil. Vamos entender por quê:

## 1. Validação Automática

Com esse tipo, você pode garantir que apenas valores válidos para `roles` sejam usados em seu código.

```typescript
const assignRole = (role: Role) => {
  console.log(`Role assigned: ${role}`);
};

assignRole("admin"); // Ok
assignRole("guest"); // Erro: "guest" não é uma Role válida
```

## 2. Manutenção Simplificada

Se você precisar adicionar ou remover valores do array `roles`, o tipo `Role` será atualizado automaticamente, reduzindo chances de inconsistências.

## 3. Segurança de Tipos

Isso ajuda a evitar bugs relacionados a valores inesperados em funções ou propriedades.

---

Então, da próxima vez que você encontrar `Array[number]` no TypeScript, lembre-se: é uma ferramenta poderosa para extrair tipos literais de arrays, mantendo seu código mais seguro e fácil de manter.

# 🧪 Exercício 1 - Classificação de Triângulos

Este projeto foi desenvolvido em **TypeScript** utilizando **Jest** para testes unitários. Ele classifica triângulos com base nos três lados informados, podendo ser:

- **Equilátero** – todos os lados iguais
- **Isósceles** – dois lados iguais
- **Escaleno** – todos os lados diferentes
- **Inválido** – não forma um triângulo válido

---

## 📁 Estrutura do Projeto
```
exercicio1/ 
├── src/ 
│ └── triangulo.ts
├── tests/ 
│ └── triangulo.test.ts
├── .gitignore 
├── jest.config.js 
├── tsconfig.json 
└── package.json
```
---

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install
```
### 2. Execute os testes
```bash
npm test
```

## ✅ Casos de Teste Implementados
- Triângulo equilátero válido

- Triângulo isósceles válido (com permutações)

- Triângulo escaleno válido

- Lados inválidos (zero, negativos)

- Soma de dois lados igual ou menor que o terceiro (com permutações)

- Todos os lados iguais a zero


---

# 🧪 Exercício 2 - Validação de Pessoa (TDD)

Este exercício segue a abordagem de **Test Driven Development (TDD)** para validar um objeto do tipo `Person`. A validação é realizada através da função `isValidToInclude`, que retorna uma lista de erros com base nas seguintes regras:

### ✅ Regras de Validação

- O **nome** deve:
  - Conter **pelo menos duas palavras**
  - Ser composto **apenas por letras**

- A **idade** deve estar no intervalo de **1 a 200**

- A pessoa deve ter **pelo menos um email associado**

- Cada **email** deve seguir o formato:

```
_____@____._____
```

---

## 📁 Estrutura do Projeto
```
exercicio2/ 
├── src/ 
│ ├── person.ts
│ ├── email.ts 
│ └── validator.ts 
├── tests/ 
│ └── validator.test.ts
├── .gitignore 
├── jest.config.js 
├── tsconfig.json 
└── package.json
```

---

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install
```
### 2. Execute os testes
```bash
npm test
```

## ✅ Casos de Teste Cobertos
- Pessoa válida

- Nome com apenas uma palavra

- Nome com números ou caracteres inválidos

- Idade menor que 1 ou maior que 200

- Pessoa sem emails

- Email com formato inválido


---

# 🧮 Exercício 3 - Calculadora de Salário Líquido (TDD)

Este exercício implementa uma **calculadora de salário líquido** utilizando a técnica de **Test Driven Development (TDD)**. O salário líquido é calculado com base no **cargo** e **salário base** do funcionário.

---

## ⚙️ Regras de Desconto por Cargo

| Cargo         | Salário ≥ valor base    | Salário < valor base    |
|---------------|--------------------------|--------------------------|
| DESENVOLVEDOR | Desconto de 20% (≥ 3000) | Desconto de 10% (< 3000) |
| DBA           | Desconto de 25% (≥ 2000) | Desconto de 15% (< 2000) |
| TESTADOR      | Desconto de 25% (≥ 2000) | Desconto de 15% (< 2000) |
| GERENTE       | Desconto de 30% (≥ 5000) | Desconto de 20% (< 5000) |

---

## 📁 Estrutura do Projeto
```
exercicio3/ 
├── src/ 
│ ├── funcionario.ts 
│ └── calculadoraSalario.ts 
├── tests/ 
│ └── calculadoraSalario.test.ts 
├── .gitignore 
├── jest.config.js 
├── tsconfig.json 
└── package.json
```

---

## 🚀 Como executar

### 1. Instale as dependências

```bash
npm install
```
### 1. Execute os testes
```bash
npm test
```

## ✅ Casos de Teste Cobertos
- Desenvolvedor com salário acima e abaixo de 3000

- DBA com salário acima e abaixo de 2000

- Testador com salário acima e abaixo de 2000

- Gerente com salário acima e abaixo de 5000

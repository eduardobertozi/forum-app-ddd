# Aprendendo DDD com aplicação de Fórum
O objetivo deste projeto é aprender DDD de forma prática, entendendo o papel
de cada artefado do design de software. O plano de fundo é uma aplicação de
fórum para uma empresa de ensino online.

## Ambiente
A ideia central do projeto é traduzir a linguagem ubíqua em código, sem
a preocupação com tecnologias. Todas as dependências usadas no commit inicial,
são para a escrita do código com linguagem pura, escrever e rodar testes, fazer linting do código, e padronizar
de commits.

  ### Dependências
  - typescript
  - rocketseat/eslint-config
  - commitlint
  - commitzen
  - cz-conventional-changelog
  - husky
  - vitest

## Histórias de um Domain Expert
- Muita dificuldade em saber as dúvidas dos alunos
- Eu Tenho que responder alunos, e me perco em quais dúvidas foram respondidas

## Subdomínios
- Core: O que dá dinheiro
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa, mas não é tão importante

Exemplos em uma aplicação de e-commerce

### Core
- Compra
- Catálogo
- Pagamento
- Entrega
- Faturamento

### Supporting

- Estoque

### Generic

- Notificação ao cliente
- Promoções
- Chat
# Website

Esta documentação foi construída com [Docusaurus 2](https://docusaurus.io/).

### Instalação

```
$ yarn
```

### Desenvolvimento local

```
$ yarn start
```

Este comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações são refletidas ao vivo sem a necessidade de reiniciar o servidor.

### Build

```
$ yarn build
```

Este comando gera conteúdo estático no diretório `build` e pode ser servido usando qualquer serviço de hospedagem de conteúdo estático.

### Estrutura

Esta biblioteca possui vários pacotes, esta estrutura se reflete estrutura da documentação, portanto, dentro da pasta `docs` são distribuídas as documentações pertinentes a biblioteca.

As _sidebars_ refletem a mesma lógica, estão separadas por bibliotecas dentro da pasta `sidebars`.

Portanto, para adicionar uma nova documentação, você precisará inserir a página dentro da pasta `docs` e popular o arquivo da sidebar pertinente à documentação em questão.

### Roadmap

- Current version 0.6.0

- Form
  [x] - Button
  [x] - Input
  [x] - Checkbox
  [x] - Radio
  [x] - Switch
  [x] - Select
  [x] - Badge
  [x] - Tag
  [x] - Typography
  [x] - Datepicker
  [x] - Textarea
  [] - Toast
  [] - Link

- Styled System
  [x] - Style Props
  - Default Theme
    [x] - Colors
    [x] - Typography
    [x] - Spacing
    [x] - Sizes
    [x] - Border Radius
    [x] - Border Width

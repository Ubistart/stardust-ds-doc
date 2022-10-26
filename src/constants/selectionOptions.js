const COLORS = [
  {
    label: "Azul",
    value: "azul",
  },
  {
    label: "Verde",
    value: "verde",
  },
  {
    label: "Preto",
    value: "preto",
  },
  {
    label: "Vermelho",
    value: "vermelo",
  },
];

const CITIES = [
  {
    label: "São Paulo",
    value: "sao_paulo",
  },
  {
    label: "Rio de Janeiro",
    value: "rio_de_janeiro",
  },
  {
    label: "Curitiba",
    value: "curitiba",
  },
  {
    label: "Vermelho",
    value: "vermelo",
  },
];

const SECTIONS = [
  {
    section: "Cores",
    options: COLORS,
  },
  {
    section: "Cidades",
    options: CITIES,
  },
];

export default Object.freeze({ COLORS, CITIES, SECTIONS });

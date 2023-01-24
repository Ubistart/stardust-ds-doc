/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const gettingStarted = "react-js/getting-started";
const styledSystem = "react-js/styled-system";
const components = "react-js/components";
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const sidebar = [
  {
    type: "category",
    label: "Primeiros passos",
    collapsed: false,
    link: {
      type: "doc",
      id: "react-js/getting-started/index",
    },
    items: [
      `${gettingStarted}/installation`,
      `${gettingStarted}/customize-theme`,
      `${gettingStarted}/adding-types`,
      `${gettingStarted}/usage`,
    ],
  },
  {
    type: "category",
    label: "Sistema de estilização",
    collapsed: false,
    items: [`${styledSystem}/style-props`, `${styledSystem}/default-theme`],
  },
  {
    type: "category",
    label: "Componentes",
    collapsed: true,
    items: [
      `${components}/badge`,
      `${components}/button`,
      `${components}/checkbox`,
      `${components}/datepicker`,
      `${components}/input`,
      `${components}/radio`,
      `${components}/select`,
      `${components}/switch`,
      `${components}/tag`,
      `${components}/typography`,
    ],
  },
];

module.exports = sidebar;

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const gettingStarted = "react-native/getting-started";
const components = "react-native/components";

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const sidebar = [
  {
    type: "category",
    label: "Primeiros passos",
    collapsed: false,
    link: {
      type: "doc",
      id: `${gettingStarted}/index`,
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
    label: "Componentes",
    collapsed: true,
    items: [`${components}/button`],
  },
];
module.exports = sidebar;

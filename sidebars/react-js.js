/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const sidebar = [
  {
    type: 'category',
    label: 'Primeiros passos',
    collapsed: false,
    link: {
      type: 'doc',
      id: 'react-js/getting-started/index',
    },
    items: [
      'react-js/getting-started/installation',
      'react-js/getting-started/usage',
    ]
  },
  {
    type: 'category',
    label: 'Componentes',
    collapsed: true,
    items: [
      'react-js/components/button',
    ]
  }
];

module.exports = sidebar;

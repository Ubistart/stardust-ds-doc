// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stardust',
  tagline: 'Biblioteca de componentes UI desenvolvido por Ubistart',
  url: 'https://locahost:3000',
  baseUrl: '/stardust-ds-doc',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ubistart', // Usually your GitHub org/user name.
  projectName: 'stardust-ds-doc', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars/index.js'),
          remarkPlugins: [require('./plugins/remark-snackplayer')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false
        }
      },
      navbar: {
        logo: {
          alt: 'Stardust',
          src: 'img/single-logo.png',
        },
        items: [
          { to: 'docs/react-js/getting-started', label: 'React JS', position: 'left' },
          { to: 'docs/react-native/getting-started', label: 'React Native', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Stardust, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;

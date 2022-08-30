/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Siemens iX',
  tagline: 'Siemens iX',
  url: 'https://siemens-ix.***REMOVED***/siemens-ix/',
  baseUrl: '/siemens-ix/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Siemens AG',
  projectName: 'ix',
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://***REMOVED***/siemens-ix/siemens-ix/edit/main/packages/documentation/',
        },
        theme: {
          customCss: [
            require.resolve(
              './../../node_modules/@siemens/ix/dist/siemens-ix/siemens-ix.css'
            ),
            require.resolve(
              './../../node_modules/@siemens/ix-icons/dist/css/ix-icons.css'
            ),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/search.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Siemens iX',
        logo: {
          alt: 'Siemens AG',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Siemens iX',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        theme2: require('prism-react-renderer/themes/dracula'),
      },
    }),
  // plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
};

module.exports = config;

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
            'https://www.github.com/siemens/ix/edit/main/packages/documentation/',
        },
        theme: {
          customCss: [
            require.resolve('@siemens/ix/dist/siemens-ix/siemens-ix.css'),
            // Insert additional theme (DO NOT REMOVE THIS LINE)
            require.resolve('@siemens/ix-icons/dist/css/ix-icons.css'),
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

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

let withBrandTheme = false;

const libCss = [
  require.resolve('@siemens/ix/dist/siemens-ix/siemens-ix.css'),
  require.resolve('@siemens/ix-icons/dist/css/ix-icons.css'),
];

try {
  const path = require.resolve(
    '@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css'
  );
  console.log('Found optionalDependency @siemens/ix-brand-theme.');
  libCss.push(path);
  withBrandTheme = true;
} catch (e) {
  console.warn('optionalDependency @siemens/ix-brand-theme not found!');
}

const customCss = [
  ...libCss,
  require.resolve('./src/css/custom.css'),
  require.resolve('./src/css/search.css'),
  require.resolve('./src/css/api-table.css'),
  require.resolve('./src/css/cards.css'),
];

const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Siemens Industrial Experience',
  tagline: 'Siemens Industrial Experience',
  url: 'https://ix.siemens.io',
  baseUrl: baseUrl,
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
        debug: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://www.github.com/siemens/ix/edit/main/packages/documentation/',
        },
        theme: {
          customCss,
        },
      }),
    ],
  ],
  customFields: {
    withBrandTheme,
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'siemens-ix, ix, stenciljs, angular, webcomponent, react, siemens, ix, siemens, industrial, experience, vue',
        },
        {
          name: 'description',
          content:
            'Siemens Industrial Experience is an open-source design system for designers and developers to consistently create the perfect digital experience for partners and customers',
        },
      ],
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Siemens Industrial Experience',
        logo: {
          alt: 'Siemens AG',
          src: 'img/logo.svg',
        },
        items: [
          // Remove docs version until library needs to publish an major release
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        copyright: `© Siemens 1996 - ${new Date().getFullYear()}`,
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/siemens/ix',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Corporate Information',
                href: 'https://www.siemens.com/corporate-information',
              },
              {
                label: 'Privacy Notice',
                href: 'https://www.siemens.com/privacy-notice',
              },
              {
                label: 'Cookie notice',
                href: 'https://www.siemens.com/cookie-notice',
              },
              {
                label: 'Terms of use',
                href: 'https://www.siemens.com/terms-of-use',
              },
              {
                label: 'Digital ID',
                href: 'https://www.siemens.com/digital-id',
              },
            ],
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        theme2: require('prism-react-renderer/themes/dracula'),
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [
      require.resolve('docusaurus-lunr-search'),
      {
        excludeRoutes: [
          '/docs/auto-generated/**/*',
          '/docs/installation/CHANGELOG',
        ],
      },
    ],
  ],
};

module.exports = config;

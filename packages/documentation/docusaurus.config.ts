/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type * as Preset from '@docusaurus/preset-classic';
import type { Config, PluginConfig } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import figmaPlugin from 'figma-plugin';
import path from 'path';
import fs from 'fs';
import versions from './version-deployment.json' with { type: 'json '};

let withBrandTheme = false;

const libCss = [
  require.resolve('@siemens/ix/dist/siemens-ix/siemens-ix.css'),
  require.resolve('@siemens/ix/dist/siemens-ix/theme/legacy-classic-dark.css'),
  require.resolve('@siemens/ix/dist/siemens-ix/theme/legacy-classic-light.css'),
];

const useFastStart = !!process.env.FAST_START;

const isDeployPreview = process.env.CONTEXT === 'deploy-preview';
const isDevPreview = process.env.CONTEXT === 'dev';

const plugins: PluginConfig[] = [
  'docusaurus-plugin-sass',
]

if (useFastStart) {
  console.warn('🚧 🚧 🚧 🚧 🚧 🚧');
  console.warn('🚧 🚧 🚧 🚧 🚧 🚧');
  console.warn('Fast start enabled');
  console.warn('No figma plugin enabled');
  console.warn('No search plugin enabled');
  console.warn('🚧 🚧 🚧 🚧 🚧 🚧');
  console.warn('🚧 🚧 🚧 🚧 🚧 🚧');
}

if (!useFastStart) {
  plugins.push([
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en'],
      excludeRoutes: ['**/installation/CHANGELOG', '**/auto-generated/**/*'],
    },
  ],)
}

function getAnnouncementBarConfig() {
  if (versions.currentVersion !== versions.latestVersion) {
    return {
      announcementBar: {
        content:
          '<span style="font-size: 1rem">OLD VERSION!!!!. Visit <a style="font-weight: bold;" href="https://ix.siemens.io">https://ix.siemens.io</a> for the latest version.</span>',
        isCloseable: false,
        backgroundColor: 'var(--theme-color-warning)',
      },
    };
  }

  if (isDevPreview) {
    return {
      announcementBar: {
        content:
          '<span style="font-size: 1rem">This is the development documentation for Siemens Industrial Experience. Visit <a style="font-weight: bold;" href="https://ix.siemens.io">https://ix.siemens.io</a> for the latest version.</span>',
        isCloseable: false,
        backgroundColor: 'var(--theme-color-warning)',
      },
    };
  }

  if (isDeployPreview) {
    return {
      announcementBar: {
        content:
          '<span style="font-size: 1rem">This is the preview documentation for Siemens Industrial Experience. Visit <a style="font-weight: bold;" href="https://ix.siemens.io">https://ix.siemens.io</a> for the latest version.</span>',
        isCloseable: false,
        backgroundColor: 'var(--theme-color-warning)',
      },
    };
  }
}

if (!process.env.CI) {
  try {
    // Check if theme is existing inside node_modes
    const path = require.resolve(
      '@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css'
    );
    console.log('Found optionalDependency @siemens/ix-brand-theme.');
    libCss.push(path);
    withBrandTheme = true;
  } catch (e) {
    console.warn('optionalDependency @siemens/ix-brand-theme not found!');
  }
} else {
  const themeCssFile = path.join(
    __dirname,
    '.build-temp',
    'package',
    'dist',
    'ix-brand-theme',
    'ix-brand-theme.css'
  );

  if (fs.existsSync(themeCssFile)) {
    libCss.push(themeCssFile);
    withBrandTheme = true;
    console.log('Found optionalDependency @siemens/ix-brand-theme.');
  } else {
    console.warn('optionalDependency @siemens/ix-brand-theme not found!');
  }
}

const customCss = [
  ...libCss,
  require.resolve('./src/css/custom.scss'),
  require.resolve('./src/css/search.scss'),
  require.resolve('./src/css/api-table.scss'),
  require.resolve('./src/css/cards.scss'),
];

const baseUrl = process.env.BASE_URL || '/';

console.log('Using BASE_URL', baseUrl);

const config: Config = {
  title: 'Siemens Industrial Experience',
  tagline: 'Siemens Industrial Experience',
  url: 'https://ix.siemens.io',
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Siemens AG',
  projectName: 'ix',
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://www.github.com/siemens/ix/edit/main/packages/documentation/',
          remarkPlugins: useFastStart ? [] : [
            figmaPlugin({
              baseUrl: `${baseUrl}figma`,
              figmaFolder: `${path.join(__dirname, 'static', 'figma')}`,
              error_image: path.join('..', 'img', 'figma_error.png'),
              apiToken: process.env.FIGMA_API_TOKEN!,
              rimraf: true,
            }),
          ],
        },
        theme: {
          customCss,
        },
      } satisfies Preset.Options,
    ],
  ],
  customFields: {
    withBrandTheme,
  },
  themeConfig: {
    ...getAnnouncementBarConfig(),
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
        {
          type: 'dropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          label: versions.currentVersion,
          items: versions.versions.filter(version => version.label !== versions.currentVersion)
        },
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
            {
              label: 'iX Community',
              href: 'https://community.siemens.com/c/ix',
            },
            {
              label: 'Siemens Xcelerator Developer Portal',
              href: 'https://developer.siemens.com',
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
              href: '/cookie-notice',
            },
            {
              html: '<a class="footer__link-item" href="javascript:void(0)" onClick="UC_UI.showSecondLayer();">Privacy Settings</a>',
            },
            {
              label: 'Terms of use',
              href: 'https://www.siemens.com/terms-of-use',
            },
            {
              label: 'Digital ID',
              href: 'https://www.siemens.com/digital-id',
            },
            {
              label: 'Contact us',
              to: 'docs/contact-us',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: '<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /> </a>',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: plugins,
};

module.exports = config;

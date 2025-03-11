/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
import versionDeployment from './version-deployment.json' with { type: 'json '};
import type { NormalizedSidebarItem, SidebarItemConfig, SidebarItemsGeneratorArgs } from '@docusaurus/plugin-content-docs/lib/sidebars/types';

// Copied from https://github.com/THEOplayer/documentation/blob/f4dd44ed1fea8f0c58fc95a51982bfd8af584227/src/plugin/sidebarItemsGenerator.ts#L3
interface PostProcessArgs extends Omit<SidebarItemsGeneratorArgs, 'item'> {
  item: NormalizedSidebarItem & {
    customProps?: {
      additionalItems?: Array<
        SidebarItemConfig & {
          position?: number;
        }
      >;
    };
  };
}

// Copied from https://github.com/THEOplayer/documentation/blob/f4dd44ed1fea8f0c58fc95a51982bfd8af584227/src/plugin/sidebarItemsGenerator.ts#L15
async function postProcess({ item, ...args }: PostProcessArgs) {
  if (item.type === 'category') {
    // Recurse through children
    for (const childItem of item.items) {
      await postProcess({ item: childItem, ...args });
    }
    // Add additional items
    if (item.customProps?.additionalItems) {
      for (const { position, ...additionalItem } of item.customProps.additionalItems) {
        if (position !== undefined) {
          item.items.splice(position - 1, 0, additionalItem);
        } else {
          item.items.push(additionalItem);
        }
      }
    }
  }
}

// Docusaurus issue explaining custom generator: https://github.com/facebook/docusaurus/issues/5689#issuecomment-2034815211
// Copied from https://github.com/THEOplayer/documentation/blob/f4dd44ed1fea8f0c58fc95a51982bfd8af584227/src/plugin/sidebarItemsGenerator.ts#L34
export default async function sidebarItemsGenerator({ defaultSidebarItemsGenerator, item, ...args }: SidebarItemsGeneratorArgs) {
  const sidebarItems = await defaultSidebarItemsGenerator({ item, ...args });
  for (const item of sidebarItems) {
    await postProcess({ item, defaultSidebarItemsGenerator, ...args });
  }
  return sidebarItems;
}

type DocContext = 'prod' | 'dev' | (string & {});

let withBrandTheme = false;

const libCss = [
  require.resolve('@siemens/ix/dist/siemens-ix/siemens-ix.css'),
  require.resolve('@siemens/ix/dist/siemens-ix/theme/legacy-classic-dark.css'),
  require.resolve('@siemens/ix/dist/siemens-ix/theme/legacy-classic-light.css'),
];

const useFastStart = !!process.env.FAST_START;
const playgroundVersion = process.env.PLAYGROUND_VERSION || 'latest';
const docsContext: DocContext = process.env.DOCS_CONTEXT || 'prod';
const docsContextValue: string | undefined = process.env.DOCS_CONTEXT_VALUE;

const plugins: PluginConfig[] = [
  'docusaurus-plugin-sass',
  [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          to: '/docs/controls/forms/forms-validation',
          from: '/docs/controls/validation',
        },
        {
          to: '/docs/legacy/basic-navigation',
          from: '/docs/controls/application-frame/basic-navigation',
        },
        {
          to: '/docs/legacy/map-navigation',
          from: '/docs/controls/application-frame/map-navigation',
        },
      ]
    }
  ]
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

console.log('Playground version:', playgroundVersion)

checkDocsContext();

function checkDocsContext() {
  if (docsContext === 'dev') {
    const devLabel = docsContextValue ?? 'Development'
    versionDeployment.versions.unshift({
      id: 'dev',
      href: '#',
      label: devLabel
    });
    versionDeployment.currentVersion = 'dev';
  }
}

function getAnnouncementBarConfig() {
  const latestVersion = versionDeployment.versions.find(version => version.id === versionDeployment.currentVersion);

  if (versionDeployment.currentVersion !== versionDeployment.latestVersion) {
    return {
      announcementBar: {
        content:
          `<span style="font-size: 1rem">You are viewing the documentation for version ${latestVersion?.label}. To access the documentation for the latest release please visit <a style="font-weight: bold;" href="https://ix.siemens.io">https://ix.siemens.io</a>.</span>`,
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
          sidebarItemsGenerator: sidebarItemsGenerator,
          // Please change this to your repo.
          editUrl:
            'https://www.github.com/siemens/ix/edit/main/packages/documentation/',
          remarkPlugins: [
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
    versionDeployment,
    playgroundVersion
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
      }
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
      items: [],
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

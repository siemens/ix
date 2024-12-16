import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import figmaPlugin from 'figma-plugin';
import path from 'path';

const baseUrl = process.env.BASE_URL || '/';

const config: Config = {
  title: 'Siemens Industrial Experience',
  tagline: 'Siemens Industrial Experience',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'siemens', // Usually your GitHub org/user name.
  projectName: 'Siemens Industrial Experience', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/siemens/ix/tree/main/packages/documentation',
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/scss/theme.tmp/ix-brand-theme.css',
            './src/scss/custom.scss',
            './node_modules/@siemens/ix/scss/_common-variables.scss',
            './node_modules/@siemens/ix/scss/components/form/_input.scss',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    async function tailwindCSSConfigPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'My Site Logo',
        src: `logos/siemens-dark.svg`,
        srcDark: `logos/siemens.svg`,
        height: 24,
        href: '/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'home',
          position: 'left',
          label: 'Home',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidelines',
          position: 'left',
          label: 'Guidelines',
        },
        {
          type: 'docSidebar',
          sidebarId: 'components',
          position: 'left',
          label: 'Components',
        },
        {
          type: 'docSidebar',
          sidebarId: 'icons',
          position: 'left',
          label: 'Icons',
        },
        {
          type: 'docSidebar',
          sidebarId: 'styles',
          position: 'left',
          label: 'Styles',
        },
        // TODO: Clarify if blog is needed
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator" aria-hidden></div>',
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<a href="https://github.com/siemens/ix" target="_blank" class="icon-link icon-link-github" alt="Rounded avatar"></a>',
        },
      ],
    },
    footer: {
      style: 'dark',
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
              to: 'docs/home/support/contact-us',
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

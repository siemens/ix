import type { StorybookConfig } from '@storybook/web-components-vite';
import path, { join, dirname } from 'path';
import fs from 'fs-extra';

function copyAdditionalThemeIfPresent() {
  try {
    const additionalTheme = require.resolve('@siemens-ix/corporate-theme');

    const basePath = path.join(additionalTheme, '..', '..');
    const targetPath = path.join(__dirname, '..', 'public', 'themes');
    const distPath = path.join(basePath, 'dist');

    fs.ensureDirSync(targetPath);
    fs.copySync(distPath, path.join(targetPath, 'dist'));

    return true;
  } catch (e) {
    console.log('Skip injecting additional theme');
    return false;
  }
}

const hasAdditionalTheme = copyAdditionalThemeIfPresent();

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    config.plugins!.push({
      name: 'vite-plugin-load-ix-brand-theme',
      transformIndexHtml: {
        order: 'post',
        handler: async (html: string) => {
          if (!hasAdditionalTheme) {
            return html;
          }

          return html.replace(
            /_%INSERT%_/g,
            `
            <script type="module">
              import './themes/dist/index.js';
            </script>
            `
          );
        },
      },
    });
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@utils': path.resolve(__dirname, '../src/stories/utils'),
        },
      },
    });
  },

  previewHead: (head) => {
    const newHead = `${head}\n`;

    if (hasAdditionalTheme) {
      return `${newHead}
      <link rel="stylesheet" href="themes/dist/css/brand-theme.css" />
      <script type="module">
        window.hasAdditionalTheme = true;
      </script>
      _%INSERT%_
      `;
    }

    return head;
  },
};
export default config;

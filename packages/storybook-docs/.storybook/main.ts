import type { StorybookConfig } from '@storybook/web-components-vite';
import path, { join, dirname } from 'path';
import fs from 'fs-extra';

function copyAdditionalThemeIfPresent() {
  try {
    const additionalTheme = require.resolve('@siemens/ix-brand-theme');
    const sourcePath = path.resolve(
      additionalTheme,
      '..',
      '..',
      'dist',
      'ix-brand-theme',
      'ix-brand-theme.css'
    );
    const targetPath = path.resolve(__dirname, '..', 'public', 'themes');

    fs.ensureDirSync(targetPath);
    fs.copyFileSync(sourcePath, path.resolve(targetPath, 'ix-brand-theme.css'));

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
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  async viteFinal(config) {
    return config;
  },
  previewHead: (head) => {
    const newHead = `${head}\n`;

    if (hasAdditionalTheme) {
      return `${newHead}
      <link rel="stylesheet" href="themes/ix-brand-theme.css" />
      <script>
        window.hasAdditionalTheme = true;
      </script>`;
    }

    return head;
  },
};
export default config;

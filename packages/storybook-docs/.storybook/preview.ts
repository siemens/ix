import type { Preview } from '@storybook/web-components';
import { withThemeByClassName } from '@storybook/addon-themes';
import { defineCustomElements } from '@siemens/ix-icons/loader';
import './define-custom-elements';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import './preview.css';
defineCustomElements();

const additionalTheme = {};

async function addAdditionalThemeIfExist() {
  const hasAdditionalTheme = window['hasAdditionalTheme'];

  if (hasAdditionalTheme) {
    additionalTheme['brand-dark'] = 'theme-brand-dark';
    additionalTheme['brand-light'] = 'theme-brand-light';
    try {
      const { defineCustomElements: defineAdditionalComponents } = await import(
        '@siemens/ix-brand-theme/loader'
      );
      defineAdditionalComponents();
    } catch (e) {
      // Fail silently
    }
  }

  return hasAdditionalTheme;
}

const hasAdditionalTheme = await addAdditionalThemeIfExist();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      root: '#root-inner',
      removeComments: true,
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: hasAdditionalTheme ? 'brand-dark' : 'classic-dark',
      themes: {
        'classic-dark': 'theme-classic-dark',
        'classic-light': 'theme-classic-light',
        ...additionalTheme,
      },
      parentSelector: 'body',
    }),
  ],
};

export default preview;

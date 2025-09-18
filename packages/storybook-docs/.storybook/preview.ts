import type { Preview } from '@storybook/web-components-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { defineCustomElement } from '@siemens/ix-icons/components/ix-icon.js';
import './define-custom-elements';
import { preloadIcons } from './preload-icons';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import './preview.css';

preloadIcons();
defineCustomElement();

const additionalTheme = {};

function addAdditionalThemeIfExist() {
  const hasAdditionalTheme = window['hasAdditionalTheme'];

  if (hasAdditionalTheme) {
    additionalTheme['brand-dark'] = 'theme-brand-dark';
    additionalTheme['brand-light'] = 'theme-brand-light';
  }

  return hasAdditionalTheme;
}

const hasAdditionalTheme = addAdditionalThemeIfExist();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // TODO(IX-3023): Set test runner to throw errors for accessibility violations
      // test: 'error',
      rules: [
        // TODO(IX-3236): Remove rule if all components pass the aria-valid-attr rule
        {
          id: 'aria-valid-attr',
          enabled: false,
        },
      ],
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

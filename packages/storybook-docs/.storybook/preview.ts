import type { Preview } from '@storybook/web-components';
import { withThemeByClassName } from '@storybook/addon-themes';
import { defineCustomElements } from '@siemens/ix-icons/loader';
import './define-custom-elements';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: 'classic-dark',
      themes: {
        'classic-dark': 'theme-classic-dark',
        'classic-light': 'theme-classic-light',
      },
      parentSelector: 'body',
    }),
  ],
};

export default preview;

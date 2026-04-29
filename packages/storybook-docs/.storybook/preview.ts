import type { Preview } from '@storybook/web-components-vite';
import { defineCustomElement } from '@siemens/ix-icons/components/ix-icon.js';
import './define-custom-elements';
import './define-internal-custom-elements';
import { preloadIcons } from './preload-icons';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import './preview.css';

declare const window: Window & {
  hasAdditionalTheme?: boolean;
};

preloadIcons();
defineCustomElement();

const additionalThemes: string[] = [];
const colorSchemas = ['dark', 'light'] as const;

function addAdditionalThemeIfExist() {
  const hasAdditionalTheme = window['hasAdditionalTheme'];

  if (hasAdditionalTheme) {
    additionalThemes.push('brand');
  }

  return hasAdditionalTheme;
}

const hasAdditionalTheme = addAdditionalThemeIfExist();
const themes = ['classic', ...additionalThemes];
const defaultTheme = hasAdditionalTheme ? 'brand' : 'classic';

const preview: Preview = {
  globalTypes: {
    ixTheme: {
      name: 'Theme',
      description: 'IX theme name',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: themes.map((theme) => ({
          title: theme,
          value: theme,
        })),
      },
    },
    ixColorSchema: {
      name: 'Color schema',
      description: 'IX color schema',
      toolbar: {
        icon: 'contrast',
        dynamicTitle: true,
        items: colorSchemas.map((colorSchema) => ({
          title: colorSchema,
          value: colorSchema,
        })),
      },
    },
  },
  initialGlobals: {
    ixTheme: defaultTheme,
    ixColorSchema: 'dark',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // TODO(IX-3023): Set test runner to throw errors for accessibility violations
      test: 'todo',
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
    (Story, context) => {
      const theme =
        typeof context.globals['ixTheme'] === 'string'
          ? context.globals['ixTheme']
          : defaultTheme;
      const colorSchema =
        context.globals['ixColorSchema'] === 'light' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-ix-theme', theme);
      document.documentElement.setAttribute(
        'data-ix-color-schema',
        colorSchema
      );

      return Story();
    },
  ],
};

export default preview;

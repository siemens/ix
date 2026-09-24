import dedent from 'dedent';
import { z } from 'zod';
import { ToolDefinition } from './types';

const ixSetupName = 'ix_setup' as const;
const ixSetupSchema = z.object({});

export const setupTools: ToolDefinition[] = [
  {
    name: ixSetupName,
    description:
      'Use this tool to get a checklist of common steps to set up your development environment for Siemens IX development. This includes installing dependencies, setting up code editors, and other important configuration steps. Make sure to run this tool before starting development to ensure your environment is properly configured.',
    schema: ixSetupSchema,
    handler: (_, context) => {
      let frameworkDependency = '';

      switch (context.framework) {
        case 'react':
          frameworkDependency = ', @siemens/ix-react';
          break;
        case 'angular':
          frameworkDependency = ', @siemens/ix-angular';
          break;
        case 'vue':
          frameworkDependency = ', @siemens/ix-vue';
          break;
        default:
          frameworkDependency = '';
      }

      const frameworkHint =
        frameworkDependency !== ''
          ? dedent`Important: It is not necessary to call any \`defineCustomElements\` or \`defineCustomElement\` from the package "@siemens/ix/loader"`
          : '';

      return {
        content: [
          {
            type: 'text',
            text: dedent`## Siemens IX Setup Checklist

          ${frameworkHint}

          - [ ] Install all required dependencies: @siemens/ix, @siemens/ix-icons${frameworkDependency}
          - [ ] If you want to use aggrid theme or echarts theme you need to install: @siemens/ix-aggrid or @siemens/ix-echarts
          - [ ] Import ix styles in your main entry file:
              With CSS:
              \`\`\`css
              @import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
              \`\`\`

              or with JavaScript/TypeScript:
              \`\`\`ts
              import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
              \`\`\`

          - [ ] If its a fresh project like created with vite template or ng new, you have also the option to cleanup the default styles from the template before you continue.
          - [ ] Create a small application shell (ix-application, ix-application-header, ix-menu, ix-menu-item,ix-content) to verify that everything is working correctly and to have a starting point for your application.
          - [ ] Check for linting errors or warnings
          - [ ] Check for TypeScript errors
          `,
          },
        ],
      };
    },
  },
];

import dedent from 'dedent';
import { z } from 'zod';
import { ToolDefinition } from './types';
import { usageAngular, usageReact } from '../prompts/icons';

const searchIxIconsName = 'search_ix_icons' as const;
const searchIxIconsSchema = z.object({
  component: z.string().describe('The search query string for the icon'),
});

export const iconTools: ToolDefinition[] = [
  {
    name: searchIxIconsName,
    description: 'Search the ix icons for a specific icon',
    schema: searchIxIconsSchema,
    handler: async (_args, context) => {
      return {
        content: [
          {
            type: 'text',
            text: dedent`The Ix Icons can be found inside the node_modules folder of your project.
            Location is node_modules/@siemens/ix-icons/dist/sample.json
            The icons are listed as "add-shield-half" in ${
              context.framework
            } you have to import the icons like this:

            ${context.framework === 'react' && usageReact}
            ${context.framework === 'vue' && usageReact}
            ${context.framework === 'angular' && usageAngular}

            ${context.promptNodeModulesExcluded}
            `,
          },
        ],
      };
    },
  },
];

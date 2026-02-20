import dedent from 'dedent';
import { z } from 'zod';
import { ToolDefinition } from './types';

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
      const usageReact = dedent`\`\`\`tsx
            import { iconAddShieldHalf } from '@siemens/ix-icons/icons';

            <IxIcon name={iconAddShieldHalf}></IxIcon>
            \`\`\``;

      const usageAngular = dedent`

      The usage in Angular is as follows:

      "addIcons" is also not necessary if the svg folder is provided as asset in the angular.json file like:
      \`\`\`
      "assets": [
        "src/favicon.ico",
        "src/assets",
        {
        "glob": "**/*.svg",
        "input": "node_modules/@siemens/ix-icons/svg",
        "output": "./svg"
        }
      ],
      \`\`\`

      Important: Preferred solution is using the icon import as class property, but keep it consistent with your project style.

      \`\`\`import { Component } from '@angular/core';
            import { IxIcon } from '@siemens/ix-angular/standalone';
            import { addIcons } from '@siemens/ix-icons';
            import { iconStar } from '@siemens/ix-icons/icons';

            @Component({
              selector: 'app-example',
              template: \`
                <ix-icon [name]="icons.iconStar"></ix-icon>
                <ix-icon name="star"></ix-icon>
              \`,
              styleUrls: ['./add-icons.css'],
              imports: [IxIcon],
            })
            export default class AddIcons {
              // Make the icons available as class property for usage in the template
              readonly icons = { iconStar, iconStarFilled };

              constructor() {
                // Register the icons you want to use in your application as string name
                addIcons({ iconStar, iconStarFilled });
              }
            }\`\`\``;

      return {
        content: [
          {
            type: 'text',
            text: dedent`The Ix Icons can be found inside the node_modules folder of your project.
            Location is node_modules/@siemens/ix-icons/dist/sample.json
            The icons are listed as "add-shield-half" in ${context.framework} you have to import the icons like this:
            ${context.framework === 'react' && usageReact}
            ${context.framework === 'angular' && usageAngular}

            ${context.promptNodeModulesExcluded}
            `,
          },
        ],
      };
    },
  },
];

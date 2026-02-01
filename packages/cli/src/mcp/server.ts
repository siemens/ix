/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Server } from '@modelcontextprotocol/sdk/server';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import dedent from 'dedent';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { Framework } from '../detect';

export const createServer = (framework: Framework) => {
  const server = new Server(
    {
      name: 'siemens-ix',
      version: '1.0.0',
    },
    {
      capabilities: {
        resources: {},
        tools: {},
      },
    }
  );

  const searchComponentApiName = 'search_component_api' as const;
  const searchComponentApiSchema = z.object({
    component: z.string().describe('The search query string'),
  });

  const searchIxIcons = 'search_ix_icons';
  const searchIxIconsSchema = z.object({
    component: z.string().describe('The search query string for the icon'),
  });

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: searchComponentApiName,
          description:
            'Search the ix component API documentation for a specific siemens ix component',
          inputSchema: zodToJsonSchema(searchComponentApiSchema),
        },
        {
          name: searchIxIcons,
          description: 'Search the ix icons for a specific icon',
          inputSchema: zodToJsonSchema(searchIxIconsSchema),
        },
      ],
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    try {
      if (!request.params.arguments) {
        throw new Error('No tool arguments provided.');
      }

      switch (request.params.name) {
        case searchIxIcons: {
          const inputSchema = searchIxIconsSchema;
          const args = inputSchema.parse(request.params.arguments);

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
                The icons are listed as "add-shield-half" in ${framework} you have to import the icons like this:
                ${framework === 'react' && usageReact}
                ${framework === 'angular' && usageAngular}
                `,
              },
            ],
          };
        }
        case searchComponentApiName: {
          const inputSchema = searchComponentApiSchema;
          const args = inputSchema.parse(request.params.arguments);

          return {
            content: [
              {
                type: 'text',
                text: dedent`The component API can be found inside the node_modules folder of your project.

                Location is node_modules/@siemens/ix/api-docs/components
                Important is that the prefix ${
                  framework === 'react' ? 'Ix' : 'ix-'
                } is not part of the folder name. For example for the component "${
                  framework === 'react' ? 'IxButton' : 'ix-button'
                }" the folder name is "button".
                Inside each component folder you find a "readme.md" file which contains the API documentation for the component.

                Examples for ${
                  args.component
                } can be found in the node_modules/@siemens/ix-${framework}/component-examples folder as tsx files. Each tsx file contains multiple components.
                The component you are looking for is used inside those files.
                `,
              },
            ],
          };
        }
        default:
          throw new Error(`Tool ${request.params.name} not found`);
      }
    } catch (error) {
      throw new Error(`Error executing tool ${request.params.name}: ${error}`);
    }
  });
  return server;
};

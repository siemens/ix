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
import { searchBlocks } from '../search';
import { fetchBlockDefinition } from '../registry';

const promptNodeModulesExcluded = dedent`Important:
node_modules is excluded by default in VS Code search settings.
You needed to use includeIgnoredFiles: true in the grep_search tool.
`;

export const createServer = (framework: Framework, registryUrl: string) => {
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

  const searchBlocksName = 'search_blocks' as const;
  const searchBlocksSchema = z.object({
    query: z
      .string()
      .describe(
        'Search query to find blocks (searches name, source code, dependencies, and files)'
      ),
    limit: z
      .number()
      .optional()
      .describe('Maximum number of results to return (default: 10)'),
  });

  const auditChecklist = 'audit_checklist' as const;

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
        {
          name: searchBlocksName,
          description:
            'Search the Siemens IX blocks registry. Searches across block names, source code, dependencies, and file paths to find matching UI blocks/components.',
          inputSchema: zodToJsonSchema(searchBlocksSchema),
        },
        {
          name: auditChecklist,
          description:
            'After creating new blocks or generating new code files, use this tool for a quick checklist to verify that everything is working as expected. Make sure to run the tool after all required steps have been completed.',
          inputSchema: zodToJsonSchema(z.object({})),
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
        case auditChecklist: {
          return {
            content: [
              {
                type: 'text',
                text: dedent`## Component Audit Checklist

              After adding or generating components, check the following common issues:

              - [ ] Ensure imports are correct i.e named vs default imports
              - [ ] Ensure all dependencies are installed.
              - [ ] Check for linting errors or warnings
              - [ ] Check for TypeScript errors
              `,
              },
            ],
          };
        }
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

                ${promptNodeModulesExcluded}
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

                Tell the developer that there are also blocks available which are reusable components with predefined functionality.
                You can search for blocks using the "search_blocks" tool (description "Search the Siemens IX blocks registry").

                ${promptNodeModulesExcluded}
                `,
              },
            ],
          };
        }
        case searchBlocksName: {
          const inputSchema = searchBlocksSchema;
          const args = inputSchema.parse(request.params.arguments);

          try {
            const results = await searchBlocks({
              baseUrl: registryUrl,
              query: args.query,
              framework,
              limit: args.limit || 10,
            });

            if (results.length === 0) {
              return {
                content: [
                  {
                    type: 'text',
                    text: dedent`No blocks found matching "${args.query}".

                    Try different search terms like:
                    - Component names (button, form, modal)
                    - Functionality keywords (upload, navigation, chart)
                    `,
                  },
                ],
              };
            }

            const resultsList = results
              .map(
                (r, i) =>
                  `${i + 1}. **${r.name}** (score: ${r.score.toFixed(
                    2
                  )})\n   - Frameworks: ${r.frameworks}\n   - Path: ${r.path}`
              )
              .join('\n\n');

            const topResult = results[0];
            let blockDetails = '';

            try {
              const blockDef = await fetchBlockDefinition(
                registryUrl,
                topResult.path
              );
              const variants = Object.keys(blockDef.variants).join(', ');
              const frameworkVariant =
                blockDef.variants[framework] ||
                Object.values(blockDef.variants)[0];

              if (frameworkVariant) {
                const files = frameworkVariant.files
                  .map((f: { target: string }) => `  - ${f.target}`)
                  .join('\n');
                const deps = frameworkVariant.dependencies
                  ? frameworkVariant.dependencies
                      .map(
                        (d: { name: string; version: string }) =>
                          `  - ${d.name}@${d.version}`
                      )
                      .join('\n')
                  : '  None';

                blockDetails = dedent`

                **Top Result Details: ${blockDef.name}**
                - Available frameworks: ${variants}
                - Files:
                ${files}
                - Dependencies:
                ${deps}
                `;
              }
            } catch (err) {
              console.error('Could not fetch block details:', err);
            }

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Found ${results.length} block(s) matching "${args.query}" for ${framework}:

                  ${resultsList}
                  ${blockDetails}

                  Use the block name with the 'add' command to install it to your project.
                  e.g: npx ix-cli add ${topResult.name}
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error searching blocks: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Please ensure the blocks registry is accessible and properly configured.
                  `,
                },
              ],
            };
          }
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

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
import { searchBlocks, searchExamples } from '../search';
import {
  fetchBlockDefinition,
  listAllBlocks,
  fetchExampleDefinition,
  getExampleCode,
} from '../registry';
import {
  searchComponents,
  getComponentDetails,
  getComponentMarkdownPath,
  listAllComponents,
  getFigmaComponentMapping,
  listComponentsWithFigmaIds,
} from '../component-search';

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
    query: z
      .string()
      .describe('Search query for component name or functionality'),
    limit: z
      .number()
      .optional()
      .describe('Maximum number of results to return (default: 10)'),
  });

  const getComponentDetailsName = 'get_component_details' as const;
  const getComponentDetailsSchema = z.object({
    componentTag: z
      .string()
      .describe('The component tag (e.g., "ix-button", "ix-modal")'),
  });

  const listAllComponentsName = 'list_all_components' as const;
  const listAllComponentsSchema = z.object({});

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

  const listAllBlocksName = 'list_all_blocks' as const;
  const listAllBlocksSchema = z.object({});

  const searchExamplesName = 'search_examples' as const;
  const searchExamplesSchema = z.object({
    query: z
      .string()
      .describe(
        'Search query to find examples for components. Searches across example names, source code, and component tags.'
      ),
    limit: z
      .number()
      .optional()
      .describe('Maximum number of results to return (default: 10)'),
  });

  const getExampleCodeName = 'get_example_code' as const;
  const getExampleCodeSchema = z.object({
    exampleName: z
      .string()
      .describe(
        'The name of the example (e.g., "button", "modal", "avatar"). Use the name from search_examples results.'
      ),
  });

  const getFigmaComponentMappingName = 'get_figma_component_mapping' as const;
  const getFigmaComponentMappingSchema = z.object({
    query: z
      .string()
      .describe(
        'Either a Figma main component ID (e.g., "42365:39459" or "42365-39459") or an IX component tag (e.g., "ix-button" or "button")'
      ),
  });

  const listComponentsWithFigmaIdsName =
    'list_components_with_figma_ids' as const;
  const listComponentsWithFigmaIdsSchema = z.object({});

  const auditChecklist = 'audit_checklist' as const;

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: searchComponentApiName,
          description:
            'Search Siemens IX components by name, category, or functionality. Returns a list of matching components with descriptions. Use this for discovery and overview.',
          inputSchema: zodToJsonSchema(searchComponentApiSchema),
        },
        {
          name: getComponentDetailsName,
          description:
            'Get complete API documentation for a specific IX component including props, events, methods, and slots. Use this after finding a component via search.',
          inputSchema: zodToJsonSchema(getComponentDetailsSchema),
        },
        {
          name: listAllComponentsName,
          description:
            'List all available Siemens IX components with their descriptions. Use this to get a complete overview of available components.',
          inputSchema: zodToJsonSchema(listAllComponentsSchema),
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
          name: listAllBlocksName,
          description:
            'List all available Siemens IX blocks for the current framework. Use this to get a complete overview of available blocks.',
          inputSchema: zodToJsonSchema(listAllBlocksSchema),
        },
        {
          name: searchExamplesName,
          description:
            'Search for Siemens IX component examples. Use this to find usage examples for specific components or patterns. Returns code examples with file paths.',
          inputSchema: zodToJsonSchema(searchExamplesSchema),
        },
        {
          name: getExampleCodeName,
          description:
            'Get the complete source code for a specific example. Use the example name from search_examples results. Returns all source files with their content.',
          inputSchema: zodToJsonSchema(getExampleCodeSchema),
        },
        {
          name: getFigmaComponentMappingName,
          description:
            'Map between Figma main component IDs and Siemens IX components. Provide either a Figma main component ID (e.g., "42365:39459") to find the corresponding IX component, or an IX component tag (e.g., "ix-button") to get its Figma main component IDs.',
          inputSchema: zodToJsonSchema(getFigmaComponentMappingSchema),
        },
        {
          name: listComponentsWithFigmaIdsName,
          description:
            'List all Siemens IX components that have Figma main component ID mappings. Use this to discover which components are linked to Figma designs.',
          inputSchema: zodToJsonSchema(listComponentsWithFigmaIdsSchema),
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
        case searchComponentApiName: {
          const inputSchema = searchComponentApiSchema;
          const args = inputSchema.parse(request.params.arguments);

          try {
            const results = await searchComponents(args.query, {
              limit: args.limit || 10,
            });

            if (results.length === 0) {
              return {
                content: [
                  {
                    type: 'text',
                    text: dedent`No components found matching "${args.query}".

                    Try different search terms like:
                    - Component types (button, input, modal, select)
                    - Categories (Actions, Inputs, Overlays, Navigation)
                    - Functionality keywords (form, dialog, menu, chart)
                    `,
                  },
                ],
              };
            }

            const resultsList = results
              .map(
                (r, i) =>
                  `${i + 1}. **${r.tag}**\n   ${
                    r.description
                  }\n   (score: ${r.score.toFixed(2)})`
              )
              .join('\n\n');

            const topResult = results[0];
            const mdPath = getComponentMarkdownPath(topResult.tag);

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Found ${results.length} component(s) matching "${args.query}":

                  ${resultsList}

                  **Next Steps:**
                  - Use "get_component_details" with tag "${topResult.tag}" for complete API documentation
                  - Read the full documentation at: ${mdPath}
                  - Use "search_examples" to find examples related to this component

                  ${promptNodeModulesExcluded}
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error searching components: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Make sure @siemens/ix is installed in your project.
                  `,
                },
              ],
            };
          }
        }

        case getComponentDetailsName: {
          const inputSchema = getComponentDetailsSchema;
          const args = inputSchema.parse(request.params.arguments);

          try {
            const details = await getComponentDetails(args.componentTag);

            if (!details) {
              return {
                content: [
                  {
                    type: 'text',
                    text: `Component "${args.componentTag}" not found.`,
                  },
                ],
              };
            }

            const propsList =
              details.props && details.props.length > 0
                ? details.props
                    .map(
                      (p) =>
                        `- **${p.name}**: \`${p.type}\`${
                          p.default ? ` (default: ${p.default})` : ''
                        }\n  ${p.docs || ''}`
                    )
                    .join('\n\n')
                : 'No props';

            const eventsList =
              details.events && details.events.length > 0
                ? details.events
                    .map(
                      (e) => `- **${e.name}**: ${e.docs || 'No description'}`
                    )
                    .join('\n')
                : 'No events';

            const methodsList =
              details.methods && details.methods.length > 0
                ? details.methods
                    .map(
                      (m) =>
                        `- **${m.name}**: \`${m.signature}\`\n  ${m.docs || ''}`
                    )
                    .join('\n\n')
                : 'No public methods';

            const slotsList =
              details.slots && details.slots.length > 0
                ? details.slots
                    .map(
                      (s) => `- **${s.name}**: ${s.docs || 'No description'}`
                    )
                    .join('\n')
                : 'No slots';

            const depsList = details.dependencies?.length
              ? details.dependencies.map((d) => `- ${d}`).join('\n')
              : 'None';

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`# ${details.tag} API Documentation

                  ## Properties
                  ${propsList}

                  ## Events
                  ${eventsList}

                  ## Methods
                  ${methodsList}

                  ## Slots
                  ${slotsList}

                  ## Dependencies
                  ${depsList}

                  **Framework Usage (${framework}):**
                  ${
                    framework === 'react'
                      ? `\`\`\`tsx\nimport { ${details.tag
                          .split('-')
                          .map((w, i) =>
                            i === 0
                              ? 'Ix'
                              : w.charAt(0).toUpperCase() + w.slice(1)
                          )
                          .join('')} } from '@siemens/ix-react';\n\`\`\``
                      : ''
                  }
                  ${
                    framework === 'angular'
                      ? `\`\`\`typescript\nimport { ${details.tag
                          .split('-')
                          .map((w, i) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(
                            ''
                          )} } from '@siemens/ix-angular/standalone';\n\`\`\``
                      : ''
                  }
                  ${
                    framework === 'vue'
                      ? `\`\`\`vue\n<${details.tag}></${details.tag}>\n\`\`\``
                      : ''
                  }

                  For usage examples, search in node_modules/@siemens/ix-${framework}/component-examples/

                  ${promptNodeModulesExcluded}
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error loading component details: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Make sure @siemens/ix is installed and the component tag is correct.
                  `,
                },
              ],
            };
          }
        }

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

        case listAllComponentsName: {
          try {
            const components = await listAllComponents();

            const componentsList = components
              .map((c, i) => `${i + 1}. **${c.tag}** - ${c.description}`)
              .join('\n');

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`# All Siemens IX Components (${components.length} total)

                  ${componentsList}

                  **Next Steps:**
                  - Use "search_component_api" to find specific components
                  - Use "get_component_details" with a component tag for full API documentation
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error listing components: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Make sure @siemens/ix is installed in your project.
                  `,
                },
              ],
            };
          }
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
                    - Use "list_all_blocks" to get a complete list of available blocks
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
                  )})\n   - Path: ${r.path}`
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
        case listAllBlocksName: {
          try {
            const blocks = await listAllBlocks(registryUrl, framework);

            if (blocks.length === 0) {
              return {
                content: [
                  {
                    type: 'text',
                    text: dedent`No blocks available for ${framework}.

                    The blocks registry may be empty or unavailable.
                    `,
                  },
                ],
              };
            }

            const blocksList = blocks
              .map((b, i) => `${i + 1}. **${b.name}**`)
              .join('\n');

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`# All Siemens IX Blocks for ${framework} (${blocks.length} total)

                  ${blocksList}

                  **Next Steps:**
                  - Use "search_blocks" to find specific blocks
                  - Use the block name with the 'add' command to install it
                    e.g: npx ix-cli add ${blocks[0].name}
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error listing blocks: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Please ensure the blocks registry is accessible and properly configured.
                  `,
                },
              ],
            };
          }
        }

        case searchExamplesName: {
          const inputSchema = searchExamplesSchema;
          const args = inputSchema.parse(request.params.arguments);

          try {
            // Map framework to include standalone variant
            const examplesFramework =
              framework === 'angular'
                ? ('angular-standalone' as const)
                : framework;

            const results = await searchExamples({
              baseUrl: registryUrl,
              query: args.query,
              framework: examplesFramework,
              limit: args.limit || 10,
            });

            if (results.length === 0) {
              return {
                content: [
                  {
                    type: 'text',
                    text: dedent`No examples found matching "${args.query}" for ${framework}.

                    Try different search terms like:
                    - Component names (button, input, modal, select)
                    - Patterns (form, validation, layout)
                    `,
                  },
                ],
              };
            }

            const resultsList = results
              .map(
                (r, i) =>
                  `${i + 1}. **${r.name}** (score: ${r.score.toFixed(2)})`
              )
              .join('\n');

            const topResult = results[0];
            let exampleDetails = '';

            try {
              const exampleDef = await fetchExampleDefinition(
                registryUrl,
                topResult.path
              );
              const variant = exampleDef.variants[examplesFramework];

              if (variant) {
                const files = variant.files
                  .map((f: { target: string }) => `  - ${f.target}`)
                  .join('\n');
                const deps = variant.dependencies
                  ? variant.dependencies
                      .map(
                        (d: { name: string; version: string }) =>
                          `  - ${d.name}@${d.version}`
                      )
                      .join('\n')
                  : '  None';

                exampleDetails = dedent`

                **Top Result Details: ${exampleDef.name}**
                - Files:
                ${files}
                - Dependencies:
                ${deps}
                `;
              }
            } catch (err) {
              console.error('Could not fetch example details:', err);
            }

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Found ${results.length} example(s) matching "${args.query}" for ${framework}:

                  ${resultsList}
                  ${exampleDetails}

                  **Next Steps:**
                  - Use "get_example_code" with exampleName "${topResult.name}" to see the complete source code
                  - Examples show practical usage of IX components

                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error searching examples: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Please ensure the examples registry is accessible and properly configured.
                  `,
                },
              ],
            };
          }
        }

        case getExampleCodeName: {
          const inputSchema = getExampleCodeSchema;
          const args = inputSchema.parse(request.params.arguments);

          try {
            // Map framework to include standalone variant
            const examplesFramework =
              framework === 'angular'
                ? ('angular-standalone' as const)
                : framework;

            // Construct the example path
            const examplePath = `examples/${args.exampleName}.json`;

            const exampleCode = await getExampleCode(
              registryUrl,
              examplePath,
              examplesFramework
            );

            // Format the source code files
            const filesContent = exampleCode.files
              .map(
                (file) => `**${file.path}**\n\`\`\`\n${file.content}\n\`\`\``
              )
              .join('\n\n---\n\n');

            const depsList = exampleCode.dependencies
              .map((d) => `  - ${d.name}@${d.version}`)
              .join('\n');

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`# Example: ${exampleCode.name} (${framework})

                  ## Dependencies
                  ${depsList}

                  ## Source Files

                  ${filesContent}

                  You can use these files as a reference or starting point for implementing similar functionality.
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error getting example code: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Make sure the example name is correct (use the name from search_examples results).
                  Example names should be in the format: "button", "modal", "avatar", etc.
                  `,
                },
              ],
            };
          }
        }

        case getFigmaComponentMappingName: {
          const inputSchema = getFigmaComponentMappingSchema;
          const args = inputSchema.parse(request.params.arguments);

          try {
            const mapping = await getFigmaComponentMapping(args.query);

            if (mapping.results.length === 0) {
              if (mapping.queryType === 'figma-id') {
                return {
                  content: [
                    {
                      type: 'text',
                      text: dedent`No IX component found for Figma main component ID "${args.query}".

                      The Figma main component ID may not be mapped yet, or the format may be incorrect.
                      Figma main component IDs should be in the format "12345:67890" or "12345-67890".

                      Use "list_components_with_figma_ids" to see all available Figma main component mappings.
                      `,
                    },
                  ],
                };
              } else {
                return {
                  content: [
                    {
                      type: 'text',
                      text: dedent`Component "${args.query}" not found or has no Figma main component ID mappings.

                      Use "search_component_api" to find available components.
                      `,
                    },
                  ],
                };
              }
            }

            if (mapping.queryType === 'figma-id') {
              const componentsList = mapping.results
                .map((r) => {
                  const figmaIds = r.figmaMainComponentIds
                    .map((id) => `  - ${id}`)
                    .join('\n');
                  return dedent`**${r.componentTag}**
                  Figma Main Component IDs:
                  ${figmaIds}`;
                })
                .join('\n\n');

              return {
                content: [
                  {
                    type: 'text',
                    text: dedent`Found ${mapping.results.length} IX component(s) for Figma main component ID "${args.query}":

                    ${componentsList}

                    **Next Steps:**
                    - Use "get_component_details" with tag "${mapping.results[0].componentTag}" for API documentation
                    - Use "search_examples" to find usage examples
                    `,
                  },
                ],
              };
            } else {
              const result = mapping.results[0];
              if (result.figmaMainComponentIds.length === 0) {
                return {
                  content: [
                    {
                      type: 'text',
                      text: dedent`Component "${result.componentTag}" has no Figma main component ID mappings.

                      This component may not be available in Figma yet.
                      `,
                    },
                  ],
                };
              }

              const figmaIds = result.figmaMainComponentIds
                .map((id) => `  - ${id}`)
                .join('\n');

              return {
                content: [
                  {
                    type: 'text',
                    text: dedent`Component "${result.componentTag}" Figma mappings:

                    Figma Main Component IDs:
                    ${figmaIds}

                    You can use these Figma main component IDs to reference the design in Figma.
                    `,
                  },
                ],
              };
            }
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error getting Figma main component mapping: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Make sure @siemens/ix is installed in your project.
                  `,
                },
              ],
            };
          }
        }

        case listComponentsWithFigmaIdsName: {
          try {
            const components = await listComponentsWithFigmaIds();

            if (components.length === 0) {
              return {
                content: [
                  {
                    type: 'text',
                    text: 'No components have Figma main component ID mappings yet.',
                  },
                ],
              };
            }

            const componentsList = components
              .map((c) => {
                const figmaIds = c.figmaMainComponentIds.join(', ');
                return `- **${c.componentTag}**: ${figmaIds}`;
              })
              .join('\n');

            return {
              content: [
                {
                  type: 'text',
                  text: dedent`# Components with Figma Main Component Mappings (${components.length} total)

                  ${componentsList}

                  **Next Steps:**
                  - Use "get_figma_component_mapping" with a component tag or Figma main component ID to get detailed mappings
                  - Use "get_component_details" for API documentation of any component
                  `,
                },
              ],
            };
          } catch (error) {
            return {
              content: [
                {
                  type: 'text',
                  text: dedent`Error listing components with Figma main component IDs: ${
                    error instanceof Error ? error.message : String(error)
                  }

                  Make sure @siemens/ix is installed in your project.
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

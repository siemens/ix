import dedent from 'dedent';
import { z } from 'zod';
import {
  searchComponents,
  getComponentDetails,
  listAllComponents,
} from '../../component-search';
import { ToolDefinition } from './types';

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

export const componentTools: ToolDefinition[] = [
  {
    name: searchComponentApiName,
    description:
      'Search Siemens IX components by name, category, or functionality. Returns a list of matching components with descriptions. Use this for discovery and overview.',
    schema: searchComponentApiSchema,
    handler: async (args, context) => {
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

        return {
          content: [
            {
              type: 'text',
              text: dedent`Found ${results.length} component(s) matching "${args.query}":

              ${resultsList}

              **Next Steps:**
              - Use "get_component_details" with tag "${topResult.tag}" for complete API documentation
              - Use "search_examples" to find examples related to this component

              ${context.promptNodeModulesExcluded}
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
    },
  },
  {
    name: getComponentDetailsName,
    description:
      'Get complete API documentation for a specific IX component including usage guideline, do and donts, props, events, methods, and slots. Use this after finding a component via search.',
    schema: getComponentDetailsSchema,
    handler: async (args, context) => {
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
                .map((e) => `- **${e.name}**: ${e.docs || 'No description'}`)
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
                .map((s) => `- **${s.name}**: ${s.docs || 'No description'}`)
                .join('\n')
            : 'No slots';

        const depsList = details.dependencies?.length
          ? details.dependencies.map((d) => `- ${d}`).join('\n')
          : 'None';

        let docSection = '';
        if (
          details.documentationContent &&
          details.documentationContent.length > 0
        ) {
          docSection = dedent`
          ## Documentation

          ${details.documentationContent.join('\n\n---\n\n')}
          `;
        }
        return {
          content: [
            {
              type: 'text',
              text: dedent`# ${details.tag} Documentation
              ${docSection}

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

              **Framework Usage (${context.framework}):**
              ${
                context.framework === 'react'
                  ? `\`\`\`tsx\nimport { ${details.tag
                      .split('-')
                      .map((w, i) =>
                        i === 0 ? 'Ix' : w.charAt(0).toUpperCase() + w.slice(1)
                      )
                      .join('')} } from '@siemens/ix-react';\n\`\`\``
                  : ''
              }
              ${
                context.framework === 'angular'
                  ? `\`\`\`typescript\nimport { ${details.tag
                      .split('-')
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(
                        ''
                      )} } from '@siemens/ix-angular/standalone';\n\`\`\``
                  : ''
              }
              ${
                context.framework === 'vue'
                  ? `\`\`\`vue\n<${details.tag}></${details.tag}>\n\`\`\``
                  : ''
              }
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
    },
  },
  {
    name: listAllComponentsName,
    description:
      'List all available Siemens IX components with their descriptions. Use this to get a complete overview of available components.',
    schema: listAllComponentsSchema,
    handler: async () => {
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
    },
  },
];

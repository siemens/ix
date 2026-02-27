import dedent from 'dedent';
import { z } from 'zod';
import {
  getFigmaComponentMapping,
  listComponentsWithFigmaIds,
} from '../../component-search';
import { ToolDefinition } from './types';

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

export const figmaTools: ToolDefinition[] = [
  {
    name: getFigmaComponentMappingName,
    description:
      'Map between Figma main component IDs and Siemens IX components. Provide either a Figma main component ID (e.g., "42365:39459") to find the corresponding IX component, or an IX component tag (e.g., "ix-button") to get its Figma main component IDs.',
    schema: getFigmaComponentMappingSchema,
    handler: async (args) => {
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
          }

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

        if (mapping.queryType === 'figma-id') {
          const componentsList = mapping.results
            .map((r) => {
              const figmaIds = r.figmaMainComponentIds
                .map((id) => `  - ${id}`)
                .join('\n');
              const docSection =
                r.documentation.length > 0
                  ? `\nDocumentation:\n${r.documentation.map((url) => `  - ${url}`).join('\n')}`
                  : '';
              return dedent`**${r.componentTag}**
              Figma Main Component IDs:
              ${figmaIds}${docSection}`;
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
        }

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

        const docSection =
          result.documentation.length > 0
            ? `\nDocumentation guide available:\n${result.documentation.map((url) => `  - ${url}`).join('\n')}`
            : '\nNo documentation guide available for this component.';

        return {
          content: [
            {
              type: 'text',
              text: dedent`Component "${result.componentTag}" Figma mappings:

              Figma Main Component IDs:
              ${figmaIds}
              ${docSection}

              You can use these Figma main component IDs to reference the design in Figma.
              `,
            },
          ],
        };
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
    },
  },
  {
    name: listComponentsWithFigmaIdsName,
    description:
      'List all Siemens IX components that have Figma main component ID mappings. Use this to discover which components are linked to Figma designs.',
    schema: listComponentsWithFigmaIdsSchema,
    handler: async () => {
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
            const docNote =
              c.documentation.length > 0
                ? ` — [docs](${c.documentation[0]})`
                : '';
            return `- **${c.componentTag}**: ${figmaIds}${docNote}`;
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
    },
  },
];

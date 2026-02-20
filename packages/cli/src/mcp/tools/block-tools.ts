import dedent from 'dedent';
import { z } from 'zod';
import { searchBlocks } from '../../search';
import { fetchBlockDefinition, listAllBlocks } from '../../registry';
import { ToolDefinition } from './types';

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

export const blockTools: ToolDefinition[] = [
  {
    name: searchBlocksName,
    description:
      'Search the Siemens IX blocks registry. Searches across block names, source code, dependencies, and file paths to find matching UI blocks/components.',
    schema: searchBlocksSchema,
    handler: async (args, context) => {
      try {
        const results = await searchBlocks({
          baseUrl: context.registryUrl,
          query: args.query,
          framework: context.framework,
          version: context.registryRef,
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
            context.registryUrl,
            topResult.path
          );
          const variants = Object.keys(blockDef.variants).join(', ');
          const frameworkVariant =
            blockDef.variants[context.framework] ||
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
              text: dedent`Found ${results.length} block(s) matching "${args.query}" for ${context.framework}:

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
    },
  },
  {
    name: listAllBlocksName,
    description:
      'List all available Siemens IX blocks for the current framework. Use this to get a complete overview of available blocks.',
    schema: listAllBlocksSchema,
    handler: async (_args, context) => {
      try {
        const blocks = await listAllBlocks(
          context.registryUrl,
          context.framework,
          context.registryRef
        );

        if (blocks.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: dedent`No blocks available for ${context.framework}.

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
              text: dedent`# All Siemens IX Blocks for ${context.framework} (${blocks.length} total)

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
    },
  },
];

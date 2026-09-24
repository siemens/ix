import dedent from 'dedent';
import { z } from 'zod';
import { searchPatterns } from '../../search';
import { fetchPatternDefinition, listAllPatterns } from '../../registry';
import { ToolDefinition } from './types';

const searchPatternsName = 'search_patterns' as const;
const searchPatternsSchema = z.object({
  query: z
    .string()
    .describe(
      'Search query to find patterns (searches name, description, keywords, source code, and files)'
    ),
  limit: z
    .number()
    .optional()
    .describe('Maximum number of results to return (default: 10)'),
});

const listAllPatternsName = 'list_all_patterns' as const;
const listAllPatternsSchema = z.object({});

export const patternTools: ToolDefinition[] = [
  {
    name: searchPatternsName,
    description:
      'Search the Siemens IX patterns registry. Searches across pattern names, descriptions, keywords, source code, and file paths to find matching UI patterns/components.',
    schema: searchPatternsSchema,
    handler: async (args, context) => {
      try {
        const parsedArgs = searchPatternsSchema.parse(args);

        const results = await searchPatterns({
          baseUrl: context.registryUrl,
          query: parsedArgs.query,
          framework: context.framework,
          version: context.registryRef,
          limit: parsedArgs.limit || 10,
        });

        if (results.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: dedent`No patterns found matching "${parsedArgs.query}".

                Try different search terms like:
                - Component names (button, form, modal)
                - Functionality keywords (upload, navigation, chart)
                - Use "list_all_patterns" to get a complete list of available patterns
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
              )})\n   - Description: ${
                r.description || 'No description'
              }\n   - Keywords: ${r.keywords || 'None'}\n   - Path: ${r.path}`
          )
          .join('\n\n');

        const topResult = results[0];
        let patternDetails = '';

        try {
          const patternDef = await fetchPatternDefinition(
            context.registryUrl,
            topResult.path
          );
          const variants = Object.keys(patternDef.variants).join(', ');
          const frameworkVariant =
            patternDef.variants[context.framework] ||
            Object.values(patternDef.variants)[0];

          if (frameworkVariant) {
            const files = frameworkVariant.files
              .map((f: { path: string }) => `  - ${f.path}`)
              .join('\n');

            patternDetails = dedent`

            **Top Result Details: ${patternDef.name}**
            - Description: ${patternDef.description || 'No description'}
            - Keywords: ${patternDef.keywords?.join(', ') || 'None'}
            - Available frameworks: ${variants}
            - Files:
            ${files}
            `;
          }
        } catch (err) {
          console.error('Could not fetch pattern details:', err);
        }

        return {
          content: [
            {
              type: 'text',
              text: dedent`Found ${results.length} pattern(s) matching "${parsedArgs.query}" for ${context.framework}:

              ${resultsList}
              ${patternDetails}

              Use the pattern name with the 'add' command to install it to your project.
              e.g: ix add ${topResult.name}
              `,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: dedent`Error searching patterns: ${
                error instanceof Error ? error.message : String(error)
              }

              Please ensure the patterns registry is accessible and properly configured.
              `,
            },
          ],
        };
      }
    },
  },
  {
    name: listAllPatternsName,
    description:
      'List all available Siemens IX patterns for the current framework. Use this to get a complete overview of available patterns.',
    schema: listAllPatternsSchema,
    handler: async (_args, context) => {
      try {
        const patterns = await listAllPatterns(
          context.registryUrl,
          context.framework,
          context.registryRef
        );

        if (patterns.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: dedent`No patterns available for ${context.framework}.

                The patterns registry may be empty or unavailable.
                `,
              },
            ],
          };
        }

        const patternsList = patterns
          .map((pattern, i) => `${i + 1}. **${pattern.name}**`)
          .join('\n');

        return {
          content: [
            {
              type: 'text',
              text: dedent`# All Siemens IX Patterns for ${context.framework} (${patterns.length} total)

              ${patternsList}

              **Next Steps:**
              - Use "search_patterns" to find specific patterns
              - Use the pattern name with the 'add' command to install it
                e.g: ix add ${patterns[0].name}
              `,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: dedent`Error listing patterns: ${
                error instanceof Error ? error.message : String(error)
              }

              Please ensure the patterns registry is accessible and properly configured.
              `,
            },
          ],
        };
      }
    },
  },
];

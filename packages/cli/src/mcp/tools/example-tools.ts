import dedent from 'dedent';
import { z } from 'zod';
import { searchExamples } from '../../search';
import {
  fetchExampleDefinition,
  fetchExamplesRegistryIndex,
  getExampleCode,
  resolveRegistryVersion,
} from '../../registry';
import { ToolDefinition } from './types';

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

export const exampleTools: ToolDefinition[] = [
  {
    name: searchExamplesName,
    description:
      'Search for Siemens IX component examples. Use this to find usage examples for specific components or patterns. Returns code examples with file paths.',
    schema: searchExamplesSchema,
    handler: async (args, context) => {
      try {
        const examplesFramework =
          context.framework === 'angular'
            ? ('angular-standalone' as const)
            : context.framework;

        const results = await searchExamples({
          baseUrl: context.registryUrl,
          query: args.query,
          framework: examplesFramework,
          version: context.registryRef,
          limit: args.limit || 10,
        });

        if (results.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: dedent`No examples found matching "${args.query}" for ${context.framework}.

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
            (r, i) => `${i + 1}. **${r.name}** (score: ${r.score.toFixed(2)})`
          )
          .join('\n');

        const topResult = results[0];
        let exampleDetails = '';

        try {
          const exampleDef = await fetchExampleDefinition(
            context.registryUrl,
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
              text: dedent`Found ${results.length} example(s) matching "${args.query}" for ${context.framework}:

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
    },
  },
  {
    name: getExampleCodeName,
    description:
      'Get the complete source code for a specific example. Use the example name from search_examples results. Returns all source files with their content.',
    schema: getExampleCodeSchema,
    handler: async (args, context) => {
      try {
        const examplesFramework =
          context.framework === 'angular'
            ? ('angular-standalone' as const)
            : context.framework;

        const examplesRegistry = await fetchExamplesRegistryIndex(
          context.registryUrl
        );
        const selectedVersion = resolveRegistryVersion(
          examplesRegistry,
          context.registryRef
        );
        const exampleEntry = examplesRegistry.versions[
          selectedVersion
        ]?.examples.find((example) => example.name === args.exampleName);

        if (!exampleEntry) {
          throw new Error(
            `Example '${args.exampleName}' not found for version '${selectedVersion}'`
          );
        }

        const exampleCode = await getExampleCode(
          context.registryUrl,
          exampleEntry.path,
          examplesFramework
        );

        const filesContent = exampleCode.files
          .map((file) => `**${file.path}**\n\`\`\`\n${file.content}\n\`\`\``)
          .join('\n\n---\n\n');

        const depsList = exampleCode.dependencies
          .map((d) => `  - ${d.name}@${d.version}`)
          .join('\n');

        return {
          content: [
            {
              type: 'text',
              text: dedent`# Example: ${exampleCode.name} (${context.framework})

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
    },
  },
];

import dedent from 'dedent';
import { z } from 'zod';
import { ToolDefinition } from './types';

const auditChecklistName = 'audit_checklist' as const;
const auditChecklistSchema = z.object({});

export const auditTools: ToolDefinition[] = [
  {
    name: auditChecklistName,
    description:
      'After creating new blocks or generating new code files, use this tool for a quick checklist to verify that everything is working as expected. Make sure to run the tool after all required steps have been completed.',
    schema: auditChecklistSchema,
    handler: () => ({
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
    }),
  },
];

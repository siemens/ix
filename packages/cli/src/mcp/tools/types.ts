import { z } from 'zod';
import { Framework } from '../../detect';

type ToolResponse = {
  content: Array<{
    type: 'text';
    text: string;
  }>;
};

export type ToolContext = {
  framework: Framework;
  registryUrl: string;
  registryRef: string;
  promptNodeModulesExcluded: string;
};

export type ToolDefinition<TSchema extends z.ZodTypeAny = z.ZodTypeAny> = {
  name: string;
  description: string;
  schema: TSchema;
  handler: (
    args: z.infer<TSchema>,
    context: ToolContext
  ) => Promise<ToolResponse> | ToolResponse;
};

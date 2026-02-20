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
import { zodToJsonSchema } from 'zod-to-json-schema';
import { Framework } from '../detect';
import { auditTools } from './tools/audit-tools';
import { blockTools } from './tools/block-tools';
import { componentTools } from './tools/component-tools';
import { exampleTools } from './tools/example-tools';
import { figmaTools } from './tools/figma-tools';
import { iconTools } from './tools/icon-tools';
import { ToolContext, ToolDefinition } from './tools/types';

const promptNodeModulesExcluded = dedent`Important:
node_modules is excluded by default in VS Code search settings.
You needed to use includeIgnoredFiles: true in the grep_search tool.
`;

export const createServer = (
  framework: Framework,
  registryUrl: string,
  registryRef: string = 'latest'
) => {
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

  const context: ToolContext = {
    framework,
    registryUrl,
    registryRef,
    promptNodeModulesExcluded,
  };

  const tools: ToolDefinition[] = [
    ...componentTools,
    ...iconTools,
    ...blockTools,
    ...exampleTools,
    ...figmaTools,
    ...auditTools,
  ];

  const toolMap = new Map(tools.map((tool) => [tool.name, tool]));

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: tools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        inputSchema: zodToJsonSchema(tool.schema),
      })),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    try {
      const tool = toolMap.get(request.params.name);

      if (!tool) {
        throw new Error(`Tool ${request.params.name} not found`);
      }

      if (!request.params.arguments) {
        throw new Error('No tool arguments provided.');
      }

      const args = tool.schema.parse(request.params.arguments);
      return await tool.handler(args, context);
    } catch (error) {
      throw new Error(`Error executing tool ${request.params.name}: ${error}`);
    }
  });
  return server;
};

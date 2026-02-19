/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Command, Option } from 'commander';
import { initVSCodeMCPConfig } from '../mcp/config';
import { detectFramework } from '../detect';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from '../mcp/server';
import { defaultRegistry } from '../config';

const mcpCommand = new Command('mcp').description(
  'MCP server and configuration commands'
);

const registryOption = new Option('-r, --registry <url>', 'Registry base URL');
registryOption.default(defaultRegistry);
const tagOption = new Option(
  '-t, --tag <tag>',
  'Registry tag/version (e.g. latest, main, v4.3.0)'
).default('latest');

const mcpRunReactMcpCommand = new Command('run-react')
  .description('Run the React MCP server')
  .addOption(registryOption)
  .addOption(tagOption)
  .action(async (options: { registry: string; tag: string }) => {
    try {
      const transport = new StdioServerTransport();
      const server = createServer('react', options.registry, options.tag);
      await server.connect(transport);
    } catch (error) {
      console.error('Error starting MCP server:', error);
    }
  });

const mcpRunAngularMcpCommand = new Command('run-angular')
  .description('Run the Angular MCP server')
  .addOption(registryOption)
  .addOption(tagOption)
  .action(async (options: { registry: string; tag: string }) => {
    try {
      const transport = new StdioServerTransport();
      const server = createServer('angular', options.registry, options.tag);
      await server.connect(transport);
    } catch (error) {
      console.error('Error starting MCP server:', error);
    }
  });

const mcpInitCommand = new Command('init')
  .description('Initialize MCP configuration in the current directory')
  .action(async () => {
    const framework = await detectFramework(process.cwd());
    const configPath = await initVSCodeMCPConfig(framework);
    console.log(`MCP configuration initialized in ${configPath}`);
  });

mcpCommand.addCommand(mcpInitCommand);
mcpCommand.addCommand(mcpRunReactMcpCommand);
mcpCommand.addCommand(mcpRunAngularMcpCommand);

export { mcpCommand };

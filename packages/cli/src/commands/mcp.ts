/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Command } from 'commander';
import { initVSCodeMCPConfig } from '../mcp/config';
import { detectFramework } from '../detect';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from '../mcp/server';

const mcpCommand = new Command('mcp').description(
  'MCP server and configuration commands'
);

const mcpRunReactMcpCommand = new Command('run-react')
  .description('Run the React MCP server')
  .action(async () => {
    try {
      const transport = new StdioServerTransport();
      const server = createServer('react');
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

export { mcpCommand };

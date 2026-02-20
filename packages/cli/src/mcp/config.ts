/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'node:path';
import deepmerge from 'deepmerge';
import { Framework } from '../detect';

const CLI = './../../ix/packages/cli@latest'; // @siemens/ix-cli@latest

const overwriteMerge = (_: any[], sourceArray: any[]) => sourceArray;

export type MCPConfigName = 'claude' | 'cursor' | 'vscode';

type MCPConfig = {
  name: MCPConfigName;
  label: string;
  configPath: string;
  config: Record<string, unknown>;
};

const getMCPConfigs = (framework: Framework): MCPConfig[] => [
    {
      name: 'claude',
      label: 'Claude Code',
      configPath: '.mcp.json',
      config: {
        mcpServers: {
          shadcn: {
            command: 'npx',
            args: [CLI, 'mcp', `run-${framework}`],
          },
        },
      },
    },
    {
      name: 'cursor',
      label: 'Cursor',
      configPath: '.cursor/mcp.json',
      config: {
        mcpServers: {
          shadcn: {
            command: 'npx',
            args: [CLI, 'mcp', `run-${framework}`],
          },
        },
      },
    },
    {
      name: 'vscode',
      label: 'VS Code',
      configPath: '.vscode/mcp.json',
      config: {
        servers: {
          siemensix: {
            command: 'npx',
            args: [CLI, 'mcp', `run-${framework}`],
          },
        },
      },
    },
  ];

export const getMCPConfigChoices = (framework: Framework) =>
  getMCPConfigs(framework).map(({ name, label }) => ({ name, label }));

export const initMCPConfig = async (
  framework: Framework,
  configName: MCPConfigName
) => {
  const config = getMCPConfigs(framework).find(
    (item) => item.name === configName
  );

  if (!config) {
    throw new Error(`Unknown MCP config '${configName}'`);
  }

  const dirname = path.dirname(config.configPath);
  await fs.ensureDir(dirname);

  let existingConfig = {};
  try {
    const content = await fs.readFile(config.configPath, 'utf-8');
    existingConfig = JSON.parse(content);
  } catch {}

  const mergedConfig = deepmerge(
    config.config as Record<string, unknown>,
    existingConfig,
    { arrayMerge: overwriteMerge }
  );

  await fs.writeFile(
    config.configPath,
    JSON.stringify(mergedConfig, null, 2) + '\n',
    'utf-8'
  );

  return config.configPath;
};

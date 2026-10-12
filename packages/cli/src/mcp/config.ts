/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import deepmerge from 'deepmerge';
import dedent from 'dedent';
import { Framework } from '../detect';
import { usageAngular, usageReact, usageVue } from './prompts/icons';

const overwriteMerge = (_: unknown[], sourceArray: unknown[]) => sourceArray;

export type MCPConfigName = 'claude' | 'cursor' | 'vscode';

type MCPServerConfig = {
  command: string;
  args: string[];
};

type MCPConfig = {
  name: MCPConfigName;
  label: string;
  configPath: string;
  serverKey: 'servers' | 'mcpServers';
  instructionPath: string;
  instructionContent: string;
};

const INSTRUCTION_START_MARKER = '<!-- ix-mcp-instructions:start -->';
const INSTRUCTION_END_MARKER = '<!-- ix-mcp-instructions:end -->';

function getLocalMCPServer(framework: Framework): MCPServerConfig {
  const modulePath = fileURLToPath(import.meta.url);
  const runArgs = ['mcp', `run-${framework}`];

  if (path.extname(modulePath) === '.ts') {
    const require = createRequire(import.meta.url);
    return {
      command: process.execPath,
      args: [
        require.resolve('tsx/cli'),
        fileURLToPath(new URL('../cli.ts', import.meta.url)),
        ...runArgs,
      ],
    };
  }

  // The bundled build inlines this module into dist/cli.mjs.
  return {
    command: process.execPath,
    args: [modulePath, ...runArgs],
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  );
}

async function readOptionalText(filePath: string): Promise<string | undefined> {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return undefined;
    }
    throw new Error(
      `Unable to read ${filePath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
      { cause: error }
    );
  }
}

async function readMCPConfig(
  configPath: string
): Promise<Record<string, unknown>> {
  const content = await readOptionalText(configPath);
  if (content === undefined) return {};

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Invalid JSON in ${configPath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
      { cause: error }
    );
  }
  if (!isRecord(parsed)) {
    throw new Error(
      `Invalid MCP configuration in ${configPath}: expected a JSON object.`
    );
  }
  return parsed;
}

const instructionContent = (withFrontmatter = false, framework?: Framework) => {
  const iconUsage =
    framework === 'angular'
      ? usageAngular
      : framework === 'vue'
      ? usageVue
      : usageReact;
  const content = dedent`
    ${INSTRUCTION_START_MARKER}
    ## Siemens iX code generation

    The official Siemens iX documentation is available at https://ix.siemens.io and provides a llms.txt file following the llmstxt.org standard at https://ix.siemens.io/llms.txt. Use this resource to get an overview of available documentation and additional information regarding components.

    When generating ix code follow the rules:

    - For each iX component, validate generated code with \`mcp_siemensix_search_examples\`.
    - Copilot MUST call \`mcp_siemensix_get_component_details\` by default.

    When you generate code and a figma resource is included:

    - Most IX components have mapped Figma components. Use \`mcp_siemensix_get_figma_component_mapping\` for a specific component or Figma ID, and \`mcp_siemensix_list_components_with_figma_ids\` to list all available mappings.

    Regarding icon usage, take the following usage into account:
    ${iconUsage}

    After codegeneration:

    - [ ] Ensure that there are no typescript errors
    - [ ] Ensure that there are no linting errors
    ${INSTRUCTION_END_MARKER}
  `;

  if (!withFrontmatter) {
    return content;
  }

  return dedent`
    ---
    description: When generating ix code
    ---

    ${content}
  `;
};

const getMCPConfigs = (framework: Framework): MCPConfig[] => [
  {
    name: 'vscode',
    label: 'VS Code',
    configPath: '.vscode/mcp.json',
    serverKey: 'servers',
    instructionPath: '.github/copilot-instructions.md',
    instructionContent: instructionContent(false, framework),
  },
  {
    name: 'claude',
    label: 'Claude Code',
    configPath: '.mcp.json',
    serverKey: 'mcpServers',
    instructionPath: 'CLAUDE.md',
    instructionContent: instructionContent(false, framework),
  },
  {
    name: 'cursor',
    label: 'Cursor',
    configPath: '.cursor/mcp.json',
    serverKey: 'mcpServers',
    instructionPath: '.cursor/rules/siemens-ix.mdc',
    instructionContent: instructionContent(true, framework),
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

  const [existingConfig, instructionText] = await Promise.all([
    readMCPConfig(config.configPath),
    readOptionalText(config.instructionPath),
  ]);
  const existingInstructions = instructionText ?? '';
  const server = getLocalMCPServer(framework);
  const existingServers = existingConfig[config.serverKey];
  if (isRecord(existingServers)) {
    const existingServer = existingServers.siemensix;
    if (
      isRecord(existingServer) &&
      existingServer.command === 'npx' &&
      isStringArray(existingServer.args) &&
      existingServer.args[0] === '@siemens/ix-cli@latest' &&
      existingServer.args[1] === 'mcp' &&
      /^run-(react|angular|vue)$/.test(existingServer.args[2])
    ) {
      existingServers.siemensix = {
        ...existingServer,
        ...server,
        args: [...server.args, ...existingServer.args.slice(3)],
      };
    }
  }

  const mergedConfig = deepmerge<Record<string, unknown>>(
    { [config.serverKey]: { siemensix: server } },
    existingConfig,
    { arrayMerge: overwriteMerge }
  );

  const writeInstructions = !existingInstructions.includes(
    INSTRUCTION_START_MARKER
  );
  await fs.ensureDir(path.dirname(config.configPath));
  if (writeInstructions) {
    await fs.ensureDir(path.dirname(config.instructionPath));
  }

  await fs.writeFile(
    config.configPath,
    JSON.stringify(mergedConfig, null, 2) + '\n',
    'utf-8'
  );

  if (writeInstructions) {
    const normalized = existingInstructions.trim();
    const mergedInstructions = normalized
      ? `${normalized}\n\n${config.instructionContent}\n`
      : `${config.instructionContent}\n`;

    await fs.writeFile(config.instructionPath, mergedInstructions, 'utf-8');
  }

  return {
    configPath: config.configPath,
    instructionPath: config.instructionPath,
  };
};

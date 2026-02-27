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
import dedent from 'dedent';
import { Framework } from '../detect';
import { usageAngular, usageReact } from './prompts/icons';

const CLI = './../../ix/packages/cli'; // @siemens/ix-cli@latest

const overwriteMerge = (_: any[], sourceArray: any[]) => sourceArray;

export type MCPConfigName = 'claude' | 'cursor' | 'vscode';

type MCPConfig = {
  name: MCPConfigName;
  label: string;
  configPath: string;
  config: Record<string, unknown>;
  instructionPath: string;
  instructionContent: string;
};

const INSTRUCTION_START_MARKER = '<!-- ix-mcp-instructions:start -->';
const INSTRUCTION_END_MARKER = '<!-- ix-mcp-instructions:end -->';

const instructionContent = (withFrontmatter = false, framework?: Framework) => {
  const iconUsage = framework === 'angular' ? usageAngular : usageReact;
  const content = dedent`
    ${INSTRUCTION_START_MARKER}
    ## Siemens iX code generation

    The official Siemens iX documentation is available at https://ix.siemens.io and provides a llms.txt file following the llmstxt.org standard at https://ix.siemens.io/llms.txt. Use this resource to get an overview of available documentation and additional information regarding components.

    When generating ix code follow the rules:

    - For each iX component, validate generated code with \`mcp_siemensix_search_examples\`.
    - Copilot MUST call \`mcp_siemensix_get_component_details\` by default.

    When you generate code and a figma resource is included::

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
    instructionPath: '.github/copilot-instructions.md',
    instructionContent: instructionContent(false, framework),
    config: {
      servers: {
        siemensix: {
          command: 'npx',
          args: [CLI, 'mcp', `run-${framework}`],
        },
      },
    },
  },
  {
    name: 'claude',
    label: 'Claude Code',
    configPath: '.mcp.json',
    instructionPath: 'CLAUDE.md',
    instructionContent: instructionContent(false, framework),
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
    instructionPath: '.cursor/rules/siemens-ix.mdc',
    instructionContent: instructionContent(true, framework),
    config: {
      mcpServers: {
        shadcn: {
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

  const instructionDirname = path.dirname(config.instructionPath);
  await fs.ensureDir(instructionDirname);

  let existingInstructions = '';
  try {
    existingInstructions = await fs.readFile(config.instructionPath, 'utf-8');
  } catch {}

  if (!existingInstructions.includes(INSTRUCTION_START_MARKER)) {
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

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import fsExtra from 'fs-extra';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { initMCPConfig } from '../src/mcp/config';

const localCliArgs = [
  createRequire(import.meta.url).resolve('tsx/cli'),
  fileURLToPath(new URL('../src/cli.ts', import.meta.url)),
];
const targets = [
  {
    name: 'vscode',
    configPath: '.vscode/mcp.json',
    serverKey: 'servers',
    instructionPath: '.github/copilot-instructions.md',
    framework: 'react',
  },
  {
    name: 'claude',
    configPath: '.mcp.json',
    serverKey: 'mcpServers',
    instructionPath: 'CLAUDE.md',
    framework: 'angular',
  },
  {
    name: 'cursor',
    configPath: '.cursor/mcp.json',
    serverKey: 'mcpServers',
    instructionPath: '.cursor/rules/siemens-ix.mdc',
    framework: 'vue',
  },
] as const;

async function withProject(action: (root: string) => Promise<void>) {
  const originalCwd = process.cwd();
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-config-'));
  try {
    process.chdir(root);
    await action(root);
  } finally {
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
}

async function writeProjectFile(filePath: string, content: string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');
}

for (const target of targets) {
  test(
    `${target.name} config launches the local ${target.framework} MCP server from another project`,
    { timeout: 20_000 },
    async () => {
      await withProject(async (root) => {
        await initMCPConfig(target.framework, target.name);
        const config = JSON.parse(await fs.readFile(target.configPath, 'utf8'));
        const server = config[target.serverKey].siemensix;
        assert.deepEqual(server, {
          command: process.execPath,
          args: [...localCliArgs, 'mcp', `run-${target.framework}`],
        });

        const client = new Client({
          name: 'ix-mcp-config-test',
          version: '1.0.0',
        });
        const transport = new StdioClientTransport({
          command: server.command,
          args: server.args,
          cwd: root,
          stderr: 'pipe',
        });
        try {
          await client.connect(transport);
          const { tools } = await client.listTools();
          for (const toolName of [
            'get_component_details',
            'get_example_code',
            'get_figma_component_mapping',
          ]) {
            assert.ok(tools.some((tool) => tool.name === toolName));
          }
        } finally {
          await client.close();
        }

        const instructions = await fs.readFile(target.instructionPath, 'utf8');
        await initMCPConfig(target.framework, target.name);
        assert.deepEqual(
          JSON.parse(await fs.readFile(target.configPath, 'utf8')),
          config
        );
        assert.equal(
          await fs.readFile(target.instructionPath, 'utf8'),
          instructions
        );
      });
    }
  );

  test(`${target.name} init preserves files when existing configuration is invalid`, async () => {
    await withProject(async () => {
      const instructions = 'Keep these existing instructions.\n';
      await writeProjectFile(target.instructionPath, instructions);
      for (const invalidConfig of [
        '{"existing":',
        '',
        'null',
        '[]',
        '"not an object"',
        '42',
      ]) {
        await writeProjectFile(target.configPath, invalidConfig);
        await assert.rejects(
          initMCPConfig(target.framework, target.name),
          (error: unknown) => {
            assert.ok(error instanceof Error);
            assert.match(error.message, /Invalid (JSON|MCP configuration)/);
            assert.ok(error.message.includes(target.configPath));
            return true;
          }
        );
        assert.equal(
          await fs.readFile(target.configPath, 'utf8'),
          invalidConfig
        );
        assert.equal(
          await fs.readFile(target.instructionPath, 'utf8'),
          instructions
        );
      }
    });
  });

  for (const unreadablePath of [target.configPath, target.instructionPath]) {
    test(`${target.name} init aborts without writes when ${unreadablePath} cannot be read`, async (context) => {
      await withProject(async () => {
        const config = JSON.stringify({
          [target.serverKey]: { existing: { command: 'existing-server' } },
        });
        const instructions = 'Keep these existing instructions.\n';
        await writeProjectFile(target.configPath, config);
        await writeProjectFile(target.instructionPath, instructions);
        const originalReadFile = fsExtra.readFile;
        context.mock.method(fsExtra, 'readFile', async (filePath: string) => {
          if (filePath === unreadablePath) {
            throw Object.assign(new Error('EACCES: permission denied'), {
              code: 'EACCES',
            });
          }
          return originalReadFile(filePath, 'utf-8');
        });

        await assert.rejects(
          initMCPConfig(target.framework, target.name),
          (error: unknown) => {
            assert.ok(error instanceof Error);
            assert.match(error.message, /Unable to read/);
            assert.ok(error.message.includes(unreadablePath));
            assert.match(error.message, /EACCES/);
            return true;
          }
        );
        assert.equal(await fs.readFile(target.configPath, 'utf8'), config);
        assert.equal(
          await fs.readFile(target.instructionPath, 'utf8'),
          instructions
        );
      });
    });
  }

  test(`${target.name} init upgrades legacy npx entries without losing server options`, async () => {
    await withProject(async () => {
      const registryArgs = [
        '--registry',
        'https://registry.example/custom',
        '--tag',
        'v4.3.0',
      ];
      const environment = { IX_SETTING: 'preserve-me' };
      const otherServer = { command: 'other-server', args: ['serve'] };
      const inputs = [{ id: 'existing-input', type: 'promptString' }];
      await writeProjectFile(
        target.configPath,
        JSON.stringify({
          inputs,
          [target.serverKey]: {
            other: otherServer,
            siemensix: {
              command: 'npx',
              args: [
                '@siemens/ix-cli@latest',
                'mcp',
                'run-react',
                ...registryArgs,
              ],
              env: environment,
            },
          },
        })
      );

      await initMCPConfig(target.framework, target.name);
      const config = JSON.parse(await fs.readFile(target.configPath, 'utf8'));
      assert.deepEqual(config.inputs, inputs);
      assert.deepEqual(config[target.serverKey].other, otherServer);
      assert.deepEqual(config[target.serverKey].siemensix, {
        command: process.execPath,
        args: [
          ...localCliArgs,
          'mcp',
          `run-${target.framework}`,
          ...registryArgs,
        ],
        env: environment,
      });
    });
  });

  test(`${target.name} init preserves customized IX server commands`, async () => {
    await withProject(async () => {
      const customServer = {
        command: 'custom-ix-server',
        args: ['--tag', 'custom-tag'],
        env: { IX_SETTING: 'preserve-me' },
      };
      await writeProjectFile(
        target.configPath,
        JSON.stringify({ [target.serverKey]: { siemensix: customServer } })
      );

      await initMCPConfig(target.framework, target.name);
      const config = JSON.parse(await fs.readFile(target.configPath, 'utf8'));
      assert.deepEqual(config[target.serverKey].siemensix, customServer);
    });
  });
}

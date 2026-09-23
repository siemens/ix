/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { Command, Option } from 'commander';
import { defaultRegistry } from '../src/config';
import { explicitComponentRegistryOptions } from '../src/commands/mcp';
import { createServer } from '../src/mcp/server';

function parsedRegistryOptions(args: string[]) {
  const command = new Command();
  command.addOption(new Option('--registry <url>').default(defaultRegistry));
  command.addOption(new Option('--tag <ref>').default('latest'));
  command.parse(args, { from: 'user' });
  const options = command.opts<{ registry: string; tag: string }>();
  return {
    options,
    componentRegistry: explicitComponentRegistryOptions(command, options),
  };
}

async function withMcpClient(
  framework: 'react' | 'angular',
  args: string[],
  action: (
    callTool: (
      name: string,
      arguments_: Record<string, unknown>
    ) => Promise<string>
  ) => Promise<void>
) {
  const { options, componentRegistry } = parsedRegistryOptions(args);
  const server = createServer(
    framework,
    options.registry,
    options.tag,
    componentRegistry
  );
  const client = new Client({ name: 'ix-cli-test', version: '1.0.0' });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);
    await action(async (name, arguments_) => {
      const response = await client.callTool({ name, arguments: arguments_ });
      assert.ok('content' in response && Array.isArray(response.content));
      const content = response.content as Array<{
        type: string;
        text?: string;
      }>;
      return content
        .map((entry) => (entry.type === 'text' ? entry.text : ''))
        .join('\n');
    });
  } finally {
    await client.close();
    await server.close();
  }
}

test('React and Angular default MCP metadata tools use installed package data', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-local-'));
  const packageRoot = path.join(root, 'node_modules', '@siemens', 'ix');
  try {
    await fs.mkdir(packageRoot, { recursive: true });
    await fs.writeFile(
      path.join(packageRoot, 'package.json'),
      '{"version":"1.0.0"}'
    );
    await fs.writeFile(
      path.join(packageRoot, 'component-doc.json'),
      JSON.stringify({
        components: [
          {
            tag: 'ix-button',
            docs: 'Installed API',
            props: [{ name: 'installedProp', docs: 'Installed API' }],
            docsTags: [{ name: 'figma-main-component-id', text: '123:456' }],
          },
        ],
      })
    );
    await fs.writeFile(
      path.join(packageRoot, 'component-related-examples.json'),
      '{}'
    );
    process.chdir(root);
    globalThis.fetch = (async () => {
      throw new Error('Default metadata tools must not fetch the registry');
    }) as typeof fetch;

    assert.deepEqual(parsedRegistryOptions([]).componentRegistry, {
      baseUrl: undefined,
      version: undefined,
    });
    for (const framework of ['react', 'angular'] as const) {
      await withMcpClient(framework, [], async (callTool) => {
        assert.match(
          await callTool('get_component_details', {
            componentTag: 'ix-button',
          }),
          /Installed API/
        );
        assert.match(await callTool('list_all_components', {}), /ix-button/);
        assert.match(
          await callTool('get_figma_component_mapping', { query: 'ix-button' }),
          /123:456/
        );
        assert.match(
          await callTool('list_components_with_figma_ids', {}),
          /123:456/
        );
      });
    }
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('MCP explicitly passed defaults still select remote metadata for both frameworks', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-explicit-'));
  const requests: string[] = [];
  const optionsArgs = ['--registry', defaultRegistry, '--tag', 'latest'];
  try {
    process.chdir(root);
    assert.deepEqual(parsedRegistryOptions(optionsArgs).componentRegistry, {
      baseUrl: defaultRegistry,
      version: 'latest',
    });
    assert.deepEqual(
      parsedRegistryOptions(['--tag', 'latest']).componentRegistry,
      {
        baseUrl: undefined,
        version: 'latest',
      }
    );
    assert.deepEqual(
      parsedRegistryOptions(['--registry', defaultRegistry]).componentRegistry,
      {
        baseUrl: defaultRegistry,
        version: undefined,
      }
    );
    globalThis.fetch = (async (input: string | URL | Request) => {
      const url = input.toString();
      requests.push(url);
      if (url.endsWith('/registry.json')) {
        return new Response(
          JSON.stringify({
            name: 'ix',
            'dist-tags': { latest: '2.0.0' },
            versions: {
              '2.0.0': {
                patterns: [],
                examples: [],
                components: {
                  componentDoc: '2.0.0/ix/component-doc.json',
                  componentRelatedExamples:
                    '2.0.0/ix/component-related-examples.json',
                },
                documentationSearchIndex:
                  '2.0.0/documentation-search-index.json',
              },
            },
          })
        );
      }
      if (url.endsWith('/component-related-examples.json')) {
        return new Response('{}');
      }
      return new Response(
        JSON.stringify({
          components: [
            {
              tag: 'ix-remote',
              docs: 'Remote API',
              props: [{ name: 'remoteProp', docs: 'Remote API' }],
              docsTags: [{ name: 'figma-main-component-id', text: '123:456' }],
            },
          ],
        })
      );
    }) as typeof fetch;
    for (const framework of ['react', 'angular'] as const) {
      await withMcpClient(framework, optionsArgs, async (callTool) => {
        assert.match(
          await callTool('get_component_details', {
            componentTag: 'ix-remote',
          }),
          /Remote API/
        );
        assert.match(await callTool('list_all_components', {}), /ix-remote/);
        assert.match(
          await callTool('get_figma_component_mapping', { query: 'ix-remote' }),
          /123:456/
        );
        assert.match(
          await callTool('list_components_with_figma_ids', {}),
          /ix-remote/
        );
      });
    }
    assert.ok(requests.includes(`${defaultRegistry}/registry.json`));
    assert.ok(
      requests.includes(`${defaultRegistry}/2.0.0/ix/component-doc.json`)
    );
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('both Figma error paths identify the configured registry URL and ref', async () => {
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const url = 'https://registry.example/custom';
  console.error = () => undefined;
  globalThis.fetch = (async () =>
    new Response('not found', { status: 503 })) as typeof fetch;
  try {
    await withMcpClient(
      'react',
      ['--registry', url, '--tag', 'canary'],
      async (callTool) => {
        for (const [name, arguments_] of [
          ['get_figma_component_mapping', { query: 'ix-button' }],
          ['list_components_with_figma_ids', {}],
        ] as const) {
          const message = await callTool(name, arguments_);
          assert.match(message, /https:\/\/registry\.example\/custom/);
          assert.match(message, /canary/);
          assert.doesNotMatch(message, /Make sure @siemens\/ix is installed/);
        }
      }
    );
  } finally {
    console.error = originalError;
    globalThis.fetch = originalFetch;
  }
});

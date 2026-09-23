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
import {
  mcpCommand,
  selectedComponentRegistryOptions,
} from '../src/commands/mcp';
import { initMCPConfig } from '../src/mcp/config';
import { createServer } from '../src/mcp/server';

function parsedRegistryOptions(args: string[]) {
  const command = new Command();
  command.addOption(new Option('--registry <url>').default(defaultRegistry));
  command.addOption(new Option('--tag <ref>').default('latest'));
  command.parse(args, { from: 'user' });
  const options = command.opts<{ registry: string; tag: string }>();
  return {
    options,
    componentRegistry: selectedComponentRegistryOptions(options),
  };
}

test('MCP-generated instructions use a single colon before the Figma rules', async () => {
  const originalCwd = process.cwd();
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-instructions-'));
  try {
    process.chdir(root);
    const { instructionPath } = await initMCPConfig('react', 'vscode');
    const instructions = await fs.readFile(
      path.join(root, instructionPath),
      'utf8'
    );
    assert.match(
      instructions,
      /When you generate code and a figma resource is included:\n/
    );
    assert.doesNotMatch(
      instructions,
      /When you generate code and a figma resource is included::/
    );
  } finally {
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('generated MCP configs use siemensix and preserve existing shadcn servers', async () => {
  const originalCwd = process.cwd();
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-configs-'));
  const targets = [
    { name: 'claude', configPath: '.mcp.json', serverKey: 'mcpServers' },
    {
      name: 'cursor',
      configPath: '.cursor/mcp.json',
      serverKey: 'mcpServers',
    },
    { name: 'vscode', configPath: '.vscode/mcp.json', serverKey: 'servers' },
  ] as const;
  try {
    process.chdir(root);
    for (const target of targets) {
      const configPath = path.join(root, target.configPath);
      await fs.mkdir(path.dirname(configPath), { recursive: true });
      const shadcnConfig = {
        command: 'npx',
        args: ['shadcn-mcp', 'serve'],
      };
      await fs.writeFile(
        configPath,
        JSON.stringify({ [target.serverKey]: { shadcn: shadcnConfig } })
      );

      const { instructionPath } = await initMCPConfig('react', target.name);
      const config = JSON.parse(await fs.readFile(configPath, 'utf8'));
      const servers = config[target.serverKey];
      assert.deepEqual(servers.shadcn, shadcnConfig);
      assert.deepEqual(servers.siemensix, {
        command: 'npx',
        args: ['@siemens/ix-cli@latest', 'mcp', 'run-react'],
      });
      assert.deepEqual(Object.keys(servers).sort(), ['shadcn', 'siemensix']);

      const instructions = await fs.readFile(
        path.join(root, instructionPath),
        'utf8'
      );
      assert.match(instructions, /mcp_siemensix_search_examples/);
      assert.match(instructions, /mcp_siemensix_get_component_details/);
      assert.doesNotMatch(instructions, /mcp_shadcn_/);
    }
  } finally {
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('MCP init detects Vue projects and generates a runnable Vue server', async () => {
  const originalCwd = process.cwd();
  const originalLog = console.log;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-vue-'));
  try {
    process.chdir(root);
    await fs.writeFile(
      path.join(root, 'package.json'),
      JSON.stringify({
        dependencies: { react: '^18.0.0', vue: '^3.0.0' },
      })
    );
    console.log = () => undefined;
    await mcpCommand.parseAsync(['init', '--config', 'vscode'], {
      from: 'user',
    });

    const config = JSON.parse(
      await fs.readFile(path.join(root, '.vscode/mcp.json'), 'utf8')
    );
    assert.deepEqual(config.servers.siemensix.args, [
      '@siemens/ix-cli@latest',
      'mcp',
      'run-vue',
    ]);
    assert.ok(
      mcpCommand.commands.some((command) => command.name() === 'run-vue')
    );
    const instructions = await fs.readFile(
      path.join(root, '.github/copilot-instructions.md'),
      'utf8'
    );
    assert.match(instructions, /import \{ IxIcon \} from '@siemens\/ix-vue'/);
    assert.match(instructions, /<IxIcon :name="iconAddShieldHalf" \/>/);
    assert.doesNotMatch(instructions, /@siemens\/ix-react/);
  } finally {
    console.log = originalLog;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

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

test('get_example_code reports incomplete source as an MCP tool error', async () => {
  const originalFetch = globalThis.fetch;
  const requests: string[] = [];
  globalThis.fetch = (async (input: string | URL | Request) => {
    const url = input.toString();
    requests.push(url);
    if (url.endsWith('/registry.json')) {
      return new Response(
        JSON.stringify({
          name: 'ix',
          'dist-tags': { latest: 'v1' },
          versions: {
            v1: {
              examples: [{ name: 'broken', path: 'v1/examples/broken.json' }],
            },
          },
        })
      );
    }
    if (url.endsWith('/v1/examples/broken.json')) {
      return new Response(
        JSON.stringify({
          name: 'broken',
          variants: {
            react: {
              files: [{ path: 'react/App.tsx' }, { path: 'react/style.css' }],
            },
          },
        })
      );
    }
    if (url.endsWith('/v1/examples/react/App.tsx')) {
      return new Response('export const App = () => null;');
    }
    return new Response('missing', { status: 404 });
  }) as typeof fetch;

  const server = createServer(
    'react',
    defaultRegistry,
    'latest',
    { baseUrl: defaultRegistry, version: 'latest' }
  );
  const client = new Client({ name: 'ix-cli-test', version: '1.0.0' });
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  try {
    await server.connect(serverTransport);
    await client.connect(clientTransport);

    const response = await client.callTool({
      name: 'get_example_code',
      arguments: { exampleName: 'broken' },
    });
    assert.equal(response.isError, true);
    assert.ok('content' in response && Array.isArray(response.content));
    const text = response.content
      .map((entry) => (entry.type === 'text' ? entry.text : ''))
      .join('\n');
    assert.match(text, /Error getting example code/);
    assert.match(text, /react\/style\.css/);
    assert.doesNotMatch(text, /## Source Files/);
    assert.deepEqual(requests, [
      `${defaultRegistry}/registry.json`,
      `${defaultRegistry}/v1/examples/broken.json`,
      `${defaultRegistry}/v1/examples/react/App.tsx`,
      `${defaultRegistry}/v1/examples/react/style.css`,
    ]);
  } finally {
    globalThis.fetch = originalFetch;
    await client.close();
    await server.close();
  }
});

test('default MCP metadata tools follow registry latest instead of a conflicting installed version', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-local-'));
  const packageRoot = path.join(root, 'node_modules', '@siemens', 'ix');
  const requests: string[] = [];
  const registry = {
    name: 'ix',
    'dist-tags': { latest: '2.0.0' },
    versions: {
      '2.0.0': {
        patterns: [],
        examples: [],
        components: {
          componentDoc: '2.0.0/ix/component-doc.json',
          componentRelatedExamples: '2.0.0/ix/component-related-examples.json',
        },
        documentationSearchIndex: '2.0.0/documentation-search-index.json',
      },
    },
  };
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
            tag: 'ix-installed',
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
    globalThis.fetch = (async (input: string | URL | Request) => {
      const url = input.toString();
      requests.push(url);
      if (url.endsWith('/registry.json')) {
        return new Response(JSON.stringify(registry));
      }
      if (url.endsWith('/2.0.0/ix/component-doc.json')) {
        return new Response(
          JSON.stringify({
            components: [
              {
                tag: 'ix-default',
                docs: 'Default registry API',
                props: [{ name: 'defaultProp', docs: 'Default registry API' }],
                docsTags: [
                  { name: 'figma-main-component-id', text: '123:456' },
                ],
              },
            ],
          })
        );
      }
      if (url.endsWith('/2.0.0/ix/component-related-examples.json')) {
        return new Response('{}');
      }
      throw new Error(`Unexpected registry request: ${url}`);
    }) as typeof fetch;

    assert.deepEqual(parsedRegistryOptions([]).componentRegistry, {
      baseUrl: defaultRegistry,
      version: 'latest',
    });
    for (const framework of ['react', 'angular'] as const) {
      await withMcpClient(framework, [], async (callTool) => {
        assert.match(
          await callTool('get_component_details', {
            componentTag: 'ix-default',
          }),
          /Default registry API/
        );
        assert.match(await callTool('list_all_components', {}), /ix-default/);
        assert.match(
          await callTool('get_figma_component_mapping', {
            query: 'ix-default',
          }),
          /123:456/
        );
        assert.match(
          await callTool('list_components_with_figma_ids', {}),
          /123:456/
        );
      });
    }
    assert.ok(
      requests.includes(`${defaultRegistry}/2.0.0/ix/component-doc.json`)
    );
    assert.ok(requests.every((url) => url.startsWith(defaultRegistry)));
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    await fs.rm(root, { recursive: true, force: true });
  }
});

test('explicitly passed default registry and tag select remote metadata for both frameworks', async () => {
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
        baseUrl: defaultRegistry,
        version: 'latest',
      }
    );
    assert.deepEqual(
      parsedRegistryOptions(['--registry', defaultRegistry]).componentRegistry,
      {
        baseUrl: defaultRegistry,
        version: 'latest',
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

test('custom MCP metadata keeps registry provenance when its version matches the installed package', async () => {
  const originalCwd = process.cwd();
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-mcp-custom-'));
  const packageRoot = path.join(root, 'node_modules', '@siemens', 'ix');
  const registryUrl = 'https://registry.example/custom';
  const optionsArgs = [
    '--registry',
    registryUrl,
    '--tag',
    'matching-version',
  ];
  const requests: string[] = [];
  let includeRelatedExamples = true;
  const registry = () => ({
    name: 'custom',
    'dist-tags': { latest: '1.0.0', 'matching-version': '1.0.0' },
    versions: {
      '1.0.0': {
        patterns: [],
        examples: [],
        components: {
          componentDoc: '1.0.0/ix/component-doc.json',
          ...(includeRelatedExamples
            ? {
                componentRelatedExamples:
                  '1.0.0/ix/component-related-examples.json',
              }
            : {}),
        },
        documentationSearchIndex: '1.0.0/documentation-search-index.json',
      },
    },
  });

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
            tag: 'ix-installed',
            docs: 'Installed API',
            docsTags: [{ name: 'figma-main-component-id', text: '111:222' }],
          },
        ],
      })
    );
    await fs.writeFile(
      path.join(packageRoot, 'component-related-examples.json'),
      '{}'
    );
    process.chdir(root);
    console.error = () => undefined;
    globalThis.fetch = (async (input: string | URL | Request) => {
      const url = input.toString();
      requests.push(url);
      if (url.endsWith('/registry.json')) {
        return new Response(JSON.stringify(registry()));
      }
      if (url.endsWith('/1.0.0/ix/component-doc.json')) {
        return new Response(
          JSON.stringify({
            components: [
              {
                tag: 'ix-custom',
                docs: 'Custom registry API',
                props: [{ name: 'customProp', docs: 'Custom registry API' }],
                docsTags: [
                  { name: 'figma-main-component-id', text: '333:444' },
                ],
              },
            ],
          })
        );
      }
      if (
        url.endsWith('/1.0.0/ix/component-related-examples.json') &&
        includeRelatedExamples
      ) {
        return new Response('{}');
      }
      throw new Error(`Unexpected registry request: ${url}`);
    }) as typeof fetch;

    assert.deepEqual(
      parsedRegistryOptions(optionsArgs).componentRegistry,
      { baseUrl: registryUrl, version: 'matching-version' }
    );
    await withMcpClient('react', optionsArgs, async (callTool) => {
      assert.match(
        await callTool('get_component_details', {
          componentTag: 'ix-custom',
        }),
        /Custom registry API/
      );
      assert.match(await callTool('list_all_components', {}), /ix-custom/);
      assert.match(
        await callTool('get_figma_component_mapping', {
          query: 'ix-custom',
        }),
        /333:444/
      );
      assert.match(
        await callTool('list_components_with_figma_ids', {}),
        /ix-custom/
      );
    });
    assert.ok(
      requests.includes(`${registryUrl}/1.0.0/ix/component-doc.json`)
    );
    assert.ok(requests.every((url) => url.startsWith(registryUrl)));

    includeRelatedExamples = false;
    await withMcpClient('react', optionsArgs, async (callTool) => {
      const message = await callTool('get_component_details', {
        componentTag: 'ix-custom',
      });
      assert.match(
        message,
        /does not define component artifact 'componentRelatedExamples'/
      );
      assert.doesNotMatch(message, /Installed API/);
    });
  } finally {
    console.error = originalError;
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

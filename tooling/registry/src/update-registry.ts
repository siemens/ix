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
import { glob } from 'glob';

interface RegistryUpdateOptions {
  version: string;
  latestTag?: string;
  pathPrefix?: string;
}

type UnifiedRegistry = {
  versions: Record<
    string,
    {
      blocks?: Array<{ name: string; path: string }>;
      examples?: Array<{ name: string; path: string }>;
      components?: {
        componentDoc: string;
        componentIndex: string;
        componentSearchIndex: string;
        componentRelatedExamples: string;
      };
    }
  >;
  'dist-tags': {
    latest: string;
  };
};

interface ComponentsRegistryUpdateOptions extends RegistryUpdateOptions {
  components: {
    componentDoc: string;
    componentIndex: string;
    componentSearchIndex: string;
    componentRelatedExamples: string;
  };
}

function ensureVersionEntry(registry: UnifiedRegistry, version: string) {
  registry.versions ??= {};
  registry.versions[version] ??= {};
  return registry.versions[version];
}

/**
 * Update blocks registry.json with manual blocks only
 */
export async function updateBlocksRegistry(
  registryPath: string,
  blocksDir: string,
  options: RegistryUpdateOptions
): Promise<void> {
  console.log('📝 Updating registry.json blocks section...');

  const registry = (await fs.readJson(registryPath)) as UnifiedRegistry;

  const blocks: Array<{ name: string; path: string }> = [];

  const blockFiles = await glob(path.join(blocksDir, '*.json'), {
    absolute: false,
  });

  const normalizedPrefix = options.pathPrefix?.replace(/\/+$/g, '') || '';

  blocks.push(
    ...blockFiles.map((file) => {
      const name = path.basename(file, '.json');
      const blockPath = `blocks/${path.basename(file)}`;

      return {
        name,
        path: normalizedPrefix ? `${normalizedPrefix}/${blockPath}` : blockPath,
      };
    })
  );

  const versionEntry = ensureVersionEntry(registry, options.version);
  versionEntry.blocks = blocks.sort((a, b) => a.name.localeCompare(b.name));

  registry['dist-tags'] = {
    latest: options.latestTag ?? options.version,
  };

  await fs.writeJson(registryPath, registry, { spaces: 2 });

  console.log(`✅ Updated blocks registry with ${blocks.length} blocks`);
}

/**
 * Update examples registry.json with generated examples only
 */
export async function updateExamplesRegistry(
  registryPath: string,
  examplesDir: string,
  options: RegistryUpdateOptions
): Promise<void> {
  console.log('📝 Updating registry.json examples section...');

  const registry = (await fs.readJson(registryPath)) as UnifiedRegistry;
  const examples: Array<{ name: string; path: string }> = [];
  const normalizedPrefix = options.pathPrefix?.replace(/\/+$/g, '') || '';

  if (await fs.pathExists(examplesDir)) {
    const exampleFiles = await glob(path.join(examplesDir, '*.json'), {
      absolute: false,
    });

    examples.push(
      ...exampleFiles.map((file) => {
        const name = path.basename(file, '.json');
        const examplePath = `examples/${path.basename(file)}`;

        return {
          name,
          path: normalizedPrefix
            ? `${normalizedPrefix}/${examplePath}`
            : examplePath,
        };
      })
    );
  }

  const versionEntry = ensureVersionEntry(registry, options.version);
  versionEntry.examples = examples.sort((a, b) => a.name.localeCompare(b.name));

  registry['dist-tags'] = {
    latest: options.latestTag ?? options.version,
  };

  await fs.writeJson(registryPath, registry, { spaces: 2 });
  console.log(`✅ Updated examples registry with ${examples.length} examples`);
}

/**
 * Update registry.json with IX component metadata files
 */
export async function updateComponentsRegistry(
  registryPath: string,
  options: ComponentsRegistryUpdateOptions
): Promise<void> {
  console.log('📝 Updating registry.json components section...');

  const registry = (await fs.readJson(registryPath)) as UnifiedRegistry;
  const normalizedPrefix = options.pathPrefix?.replace(/\/+$/g, '') || '';

  const prefixedComponents = Object.fromEntries(
    Object.entries(options.components).map(([key, value]) => [
      key,
      normalizedPrefix ? `${normalizedPrefix}/${value}` : value,
    ])
  );

  const versionEntry = ensureVersionEntry(registry, options.version);
  versionEntry.components =
    prefixedComponents as ComponentsRegistryUpdateOptions['components'];

  registry['dist-tags'] = {
    latest: options.latestTag ?? options.version,
  };

  await fs.writeJson(registryPath, registry, { spaces: 2 });

  console.log('✅ Updated components registry with IX component metadata');
}

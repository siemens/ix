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

interface ComponentsRegistryUpdateOptions extends RegistryUpdateOptions {
  components: {
    componentDoc: string;
    componentIndex: string;
    componentSearchIndex: string;
  };
}

/**
 * Update blocks registry.json with manual blocks only
 */
export async function updateBlocksRegistry(
  registryPath: string,
  blocksDir: string,
  options: RegistryUpdateOptions
): Promise<void> {
  console.log('📝 Updating blocks registry.json...');

  // Read current registry
  const registry = await fs.readJson(registryPath);

  const blocks: Array<{ name: string; path: string }> = [];

  // Find all manual block JSON files
  const blockFiles = await glob(path.join(blocksDir, '*.json'), {
    absolute: false,
  });

  const normalizedPrefix = options.pathPrefix?.replace(/\/+$/g, '') || '';

  blocks.push(...blockFiles.map((file) => {
    const name = path.basename(file, '.json');
    const blockPath = `blocks/${path.basename(file)}`;

    return {
      name,
      path: normalizedPrefix ? `${normalizedPrefix}/${blockPath}` : blockPath,
    };
  }));

  // Update the registry with all blocks for a single dynamic version
  registry.versions = {
    [options.version]: {
      blocks: blocks.sort((a, b) => a.name.localeCompare(b.name)),
    },
  };

  registry['dist-tags'] = {
    latest: options.latestTag ?? options.version,
  };

  // Write updated registry
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
  console.log('📝 Updating examples registry.json...');

  // Read current registry
  const registry = await fs.readJson(registryPath);

  const examples: Array<{ name: string; path: string }> = [];

  const normalizedPrefix = options.pathPrefix?.replace(/\/+$/g, '') || '';

  // Find all generated example block JSON files
  if (await fs.pathExists(examplesDir)) {
    const exampleFiles = await glob(path.join(examplesDir, '*.json'), {
      absolute: false,
    });

    examples.push(...exampleFiles.map((file) => {
      const name = path.basename(file, '.json');
      const examplePath = `examples/${path.basename(file)}`;

      return {
        name,
        path: normalizedPrefix
          ? `${normalizedPrefix}/${examplePath}`
          : examplePath,
      };
    }));
  }

  // Update the registry with all examples for a single dynamic version
  registry.versions = {
    [options.version]: {
      examples: examples.sort((a, b) => a.name.localeCompare(b.name)),
    },
  };

  registry['dist-tags'] = {
    latest: options.latestTag ?? options.version,
  };

  // Write updated registry
  await fs.writeJson(registryPath, registry, { spaces: 2 });

  console.log(`✅ Updated examples registry with ${examples.length} examples`);
}

/**
 * Update components-registry.json with IX component metadata files
 */
export async function updateComponentsRegistry(
  registryPath: string,
  options: ComponentsRegistryUpdateOptions
): Promise<void> {
  console.log('📝 Updating components-registry.json...');

  const registry = await fs.readJson(registryPath);
  const normalizedPrefix = options.pathPrefix?.replace(/\/+$/g, '') || '';

  const prefixedComponents = Object.fromEntries(
    Object.entries(options.components).map(([key, value]) => [
      key,
      normalizedPrefix ? `${normalizedPrefix}/${value}` : value,
    ])
  );

  registry.versions = {
    [options.version]: {
      components: prefixedComponents,
    },
  };

  registry['dist-tags'] = {
    latest: options.latestTag ?? options.version,
  };

  await fs.writeJson(registryPath, registry, { spaces: 2 });

  console.log('✅ Updated components registry with IX component metadata');
}

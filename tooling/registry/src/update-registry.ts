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

/**
 * Update blocks registry.json with manual blocks only
 */
export async function updateBlocksRegistry(
  registryPath: string,
  blocksDir: string,
  version: string = '4.3.0'
): Promise<void> {
  console.log('📝 Updating blocks registry.json...');

  // Read current registry
  const registry = await fs.readJson(registryPath);

  const blocks: Array<{ name: string; path: string }> = [];

  // Find all manual block JSON files
  const blockFiles = await glob(path.join(blocksDir, '*.json'), {
    absolute: false,
  });

  blocks.push(...blockFiles.map((file) => {
    const name = path.basename(file, '.json');
    return {
      name,
      path: `blocks/${path.basename(file)}`,
    };
  }));

  // Update the registry with all blocks
  registry.versions[version] = {
    blocks: blocks.sort((a, b) => a.name.localeCompare(b.name)),
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
  version: string = '4.3.0'
): Promise<void> {
  console.log('📝 Updating examples registry.json...');

  // Read current registry
  const registry = await fs.readJson(registryPath);

  const examples: Array<{ name: string; path: string }> = [];

  // Find all generated example block JSON files
  if (await fs.pathExists(examplesDir)) {
    const exampleFiles = await glob(path.join(examplesDir, '*.json'), {
      absolute: false,
    });

    examples.push(...exampleFiles.map((file) => {
      const name = path.basename(file, '.json');
      return {
        name,
        path: `examples/${path.basename(file)}`,
      };
    }));
  }

  // Update the registry with all examples
  registry.versions[version] = {
    examples: examples.sort((a, b) => a.name.localeCompare(b.name)),
  };

  // Write updated registry
  await fs.writeJson(registryPath, registry, { spaces: 2 });

  console.log(`✅ Updated examples registry with ${examples.length} examples`);
}

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import MiniSearch from 'minisearch';
import fs from 'fs-extra';
import path from 'node:path';
import { glob } from 'glob';

interface BlockDocument {
  id: string;
  name: string;
  frameworks: string;
  sourceCode: string;
  dependencies: string;
  files: string;
  path: string;
}

/**
 * Build a search index for all blocks including their source code
 */
export async function buildSearchIndex(
  distDir: string,
  blocksDir: string,
  outputFileName: string = 'search-index.json'
): Promise<string> {
  const blockFiles = await glob(path.join(blocksDir, '*.json'), {
    absolute: true,
  });

  const documents: BlockDocument[] = [];

  // Get workspace root (go up from blocksDir which is typically dist/blocks)
  const workspaceRoot = path.join(blocksDir, '..', '..', '..');

  for (const blockFile of blockFiles) {
    const blockDef = await fs.readJson(blockFile);
    const blockName = blockDef.name;

    const sourceCodeParts: string[] = [];
    const frameworks: string[] = [];
    const dependencies: string[] = [];
    const files: string[] = [];

    for (const [framework, variant] of Object.entries(blockDef.variants || {})) {
      if (!variant || typeof variant !== 'object') continue;

      frameworks.push(framework);

      if (Array.isArray((variant as any).dependencies)) {
        for (const dep of (variant as any).dependencies) {
          dependencies.push(`${dep.name}@${dep.version}`);
        }
      }

      if (Array.isArray((variant as any).files)) {
        for (const file of (variant as any).files) {
          // Resolve source path from workspace root
          const sourcePath = path.join(workspaceRoot, file.source);
          files.push(file.target);

          try {
            if (await fs.pathExists(sourcePath)) {
              const content = await fs.readFile(sourcePath, 'utf-8');
              sourceCodeParts.push(content);
            } else {
              console.warn(
                `Source file not found: ${sourcePath} for block ${blockName}`
              );
            }
          } catch (err) {
            console.warn(
              `Could not read source file ${sourcePath} for block ${blockName}:`,
              err
            );
          }
        }
      }
    }

    documents.push({
      id: blockName,
      name: blockName,
      frameworks: frameworks.join(' '),
      sourceCode: sourceCodeParts.join('\n'),
      dependencies: dependencies.join(' '),
      files: files.join(' '),
      path: `blocks/${path.basename(blockFile)}`,
    });
  }

  const miniSearch = new MiniSearch<BlockDocument>({
    fields: ['name', 'frameworks', 'sourceCode', 'dependencies', 'files'],
    storeFields: ['id', 'name', 'frameworks', 'path'],
    searchOptions: {
      boost: { name: 3, frameworks: 2, files: 1.5 },
      fuzzy: 0.2,
      prefix: true,
    },
  });

  miniSearch.addAll(documents);

  const serialized = JSON.stringify(miniSearch.toJSON());
  const indexPath = path.join(distDir, outputFileName);
  await fs.writeFile(indexPath, serialized, 'utf-8');

  console.log(`✅ Created search index with ${documents.length} blocks at ${outputFileName}`);

  return indexPath;
}

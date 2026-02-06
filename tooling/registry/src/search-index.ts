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
  sourceCode: string;
  dependencies: string;
  files: string;
  path: string;
}

const FRAMEWORKS = [
  'html',
  'react',
  'angular',
  'angular-standalone',
  'vue',
] as const;
type Framework = (typeof FRAMEWORKS)[number];

/**
 * Build framework-specific search indexes for blocks/examples
 */
export async function buildSearchIndex(
  distDir: string,
  blocksDir: string,
  baseFileName: string = 'search-index'
): Promise<Record<Framework, string>> {
  const blockFiles = await glob(path.join(blocksDir, '*.json'), {
    absolute: true,
  });

  // Get workspace root (go up from blocksDir which is typically dist/blocks)
  const workspaceRoot = path.join(blocksDir, '..', '..', '..');

  // Create separate document collections for each framework
  const frameworkDocuments: Record<string, BlockDocument[]> = {
    html: [],
    react: [],
    angular: [],
    'angular-standalone': [],
    vue: [],
  };

  for (const blockFile of blockFiles) {
    const blockDef = await fs.readJson(blockFile);
    const blockName = blockDef.name;
    const blockPath = path.basename(blockFile);

    // Process each framework variant separately
    for (const [framework, variant] of Object.entries(
      blockDef.variants || {}
    )) {
      if (!variant || typeof variant !== 'object') continue;

      const sourceCodeParts: string[] = [];
      const dependencies: string[] = [];
      const files: string[] = [];

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
                `Source file not found: ${sourcePath} for ${framework} ${blockName}`
              );
            }
          } catch (err) {
            console.warn(
              `Could not read source file ${sourcePath} for ${framework} ${blockName}:`,
              err
            );
          }
        }
      }

      // Add document to the framework-specific collection
      if (frameworkDocuments[framework]) {
        frameworkDocuments[framework].push({
          id: blockName,
          name: blockName,
          sourceCode: sourceCodeParts.join('\n'),
          dependencies: dependencies.join(' '),
          files: files.join(' '),
          path: blockPath.includes('example')
            ? `examples/${blockPath}`
            : `blocks/${blockPath}`,
        });
      }
    }
  }

  // Create a separate MiniSearch index for each framework
  const indexPaths: Record<Framework, string> = {} as any;

  for (const framework of FRAMEWORKS) {
    const documents = frameworkDocuments[framework];

    if (documents.length === 0) {
      console.warn(`⚠️  No documents found for framework: ${framework}`);
      continue;
    }

    const miniSearch = new MiniSearch<BlockDocument>({
      fields: ['name', 'sourceCode', 'dependencies', 'files'],
      storeFields: ['id', 'name', 'path'],
      searchOptions: {
        boost: { name: 3, files: 1.5 },
        fuzzy: 0.2,
        prefix: true,
      },
    });

    miniSearch.addAll(documents);

    const serialized = JSON.stringify(miniSearch.toJSON());
    const fileName = `${baseFileName}-${framework}.json`;
    const indexPath = path.join(distDir, fileName);
    await fs.writeFile(indexPath, serialized, 'utf-8');

    indexPaths[framework as Framework] = fileName;
    console.log(
      `✅ Created ${framework} search index with ${documents.length} items at ${fileName}`
    );
  }

  return indexPaths;
}

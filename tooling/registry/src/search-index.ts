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

async function resolveWorkspaceRoot(startDir: string): Promise<string> {
  let currentDir = path.resolve(startDir);

  while (true) {
    const workspaceConfig = path.join(currentDir, 'pnpm-workspace.yaml');

    if (await fs.pathExists(workspaceConfig)) {
      return currentDir;
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      throw new Error(
        `Could not resolve workspace root from ${startDir}. Expected to find pnpm-workspace.yaml in an ancestor directory.`
      );
    }

    currentDir = parentDir;
  }
}

async function resolveSourcePath(
  source: string,
  blocksDir: string,
  distDir: string,
  workspaceRoot: string
): Promise<string | null> {
  const candidates = [
    path.resolve(blocksDir, source),
    path.resolve(distDir, source),
    path.resolve(workspaceRoot, source),
    path.resolve(workspaceRoot, 'blocks', source),
  ];

  for (const candidate of candidates) {
    if (await fs.pathExists(candidate)) {
      return candidate;
    }
  }

  return null;
}

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

  const workspaceRoot = await resolveWorkspaceRoot(blocksDir);

  const isExamples = baseFileName.includes('examples');
  const pathPrefix = isExamples ? 'examples' : 'blocks';

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
          files.push(file.target);

          try {
            const sourcePath = await resolveSourcePath(
              file.source,
              blocksDir,
              distDir,
              workspaceRoot
            );

            if (sourcePath) {
              const content = await fs.readFile(sourcePath, 'utf-8');
              sourceCodeParts.push(content);
            } else {
              console.warn(
                `Source file not found: ${file.source} for ${framework} ${blockName}`
              );
            }
          } catch (err) {
            console.warn(
              `Could not read source file ${file.source} for ${framework} ${blockName}:`,
              err
            );
          }
        }
      }

      if (frameworkDocuments[framework]) {
        frameworkDocuments[framework].push({
          id: blockName,
          name: blockName,
          sourceCode: sourceCodeParts.join('\n'),
          dependencies: dependencies.join(' '),
          files: files.join(' '),
          path: `${pathPrefix}/${blockPath}`,
        });
      }
    }
  }

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

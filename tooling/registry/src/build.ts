/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Listr } from 'listr2';
import path from 'node:path';
import fs from 'fs-extra';
import tsconfig from '../tsconfig.json' assert { type: 'json' };
import { glob } from 'glob';
import { buildSearchIndex } from './search-index';
import { generateExampleBlocks } from './generate-examples';
import {
  updateBlocksRegistry,
  updateExamplesRegistry,
} from './update-registry';

const __dirname = path.resolve();
const __node_modules = path.join(__dirname, 'node_modules');
const __react_blocks = path.join(__node_modules, 'react-blocks');
const __angular_blocks = path.join(__node_modules, 'angular-blocks');
const __examples_root = path.join(__dirname, '..', '..', 'examples');
const __registry_template = path.join(__dirname, 'registry.json');
const __examples_registry_template = path.join(__dirname, 'examples-registry.json');

interface Ctx {
  dist: string;
  registryVersion: string;
  registryPathPrefix: string;
  registryLatestTag: string;
  noRegistryMinify: boolean;
}

const task = new Listr<Ctx>([
  {
    title: 'Resolve build metadata',
    task: (ctx) => {
      ctx.dist = tsconfig.compilerOptions.outDir || 'dist';
      ctx.registryVersion = process.env.REGISTRY_VERSION?.trim() || '4.3.0';
      ctx.registryPathPrefix =
        process.env.REGISTRY_PATH_PREFIX?.trim() || ctx.registryVersion;
      ctx.registryLatestTag =
        process.env.REGISTRY_LATEST_TAG?.trim() || ctx.registryVersion;

      const noRegistryMinifyRaw = process.env.NO_REGISTRY_MINIFY?.trim();
      ctx.noRegistryMinify =
        noRegistryMinifyRaw === '1' ||
        noRegistryMinifyRaw === 'true' ||
        noRegistryMinifyRaw === 'yes';

      console.log(`📌 Registry version: ${ctx.registryVersion}`);
      console.log(`📂 Registry path prefix: ${ctx.registryPathPrefix}`);
      console.log(`🏷️  Registry latest tag: ${ctx.registryLatestTag}`);
    },
  },
  {
    title: 'Copy registry templates to dist',
    task: async (ctx) => {
      await fs.ensureDir(ctx.dist);
      await Promise.all([
        fs.copy(__registry_template, path.join(ctx.dist, 'registry.json'), {
          dereference: true,
        }),
        fs.copy(
          __examples_registry_template,
          path.join(ctx.dist, 'examples-registry.json'),
          {
            dereference: true,
          }
        ),
      ]);
    },
  },
  {
    title: 'Copy react blocks to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'blocks', 'react-blocks');
      await Promise.all([
        fs.copy(path.join(__react_blocks, 'dist'), path.join(dest, 'dist'), {
          dereference: true,
        }),
        fs.copy(path.join(__react_blocks, 'src'), path.join(dest, 'src'), {
          dereference: true,
        }),
      ]);
    },
  },
  {
    title: 'Copy angular blocks to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'blocks', 'angular-blocks');
      await Promise.all([
        fs.copy(path.join(__angular_blocks, 'dist'), path.join(dest, 'dist'), {
          dereference: true,
        }),
        fs.copy(path.join(__angular_blocks, 'src'), path.join(dest, 'src'), {
          dereference: true,
        }),
      ]);
    },
  },
  {
    title: 'Generate example block definitions',
    task: async (ctx) => {
      const examplesOutputDir = path.join(ctx.dist, 'examples');
      const examplesDir = path.join(__dirname, '..', '..', 'examples');
      await generateExampleBlocks(examplesOutputDir, examplesDir);
    },
  },
  {
    title: 'Copy example source files to dist',
    task: async (ctx) => {
      const frameworks = [
        'html-examples',
        'react-examples',
        'angular-examples',
        'angular-standalone-examples',
        'vue-examples',
      ];

      await Promise.all(
        frameworks.map(async (framework) => {
          const srcSourcePath = path.join(
            __examples_root,
            framework,
            'src',
            'preview-examples'
          );
          const srcDestPath = path.join(
            ctx.dist,
            'examples',
            framework,
            'src',
            'preview-examples'
          );

          if (await fs.pathExists(srcSourcePath)) {
            await fs.copy(srcSourcePath, srcDestPath, { dereference: true });
          } else {
            console.warn(`⚠️  Example source not found: ${srcSourcePath}`);
          }

          // Also copy dist folders if they exist (for previews)
          const distSourcePath = path.join(__examples_root, framework, 'dist');
          const distDestPath = path.join(
            ctx.dist,
            'examples',
            framework,
            'dist'
          );

          if (await fs.pathExists(distSourcePath)) {
            await fs.copy(distSourcePath, distDestPath, { dereference: true });
          }
        })
      );
    },
  },
  {
    title: 'Update blocks registry.json',
    task: async (ctx) => {
      const registryPath = path.join(ctx.dist, 'registry.json');
      const blocksDir = path.join(__dirname, '..', '..', 'blocks');
      await updateBlocksRegistry(registryPath, blocksDir, {
        version: ctx.registryVersion,
        latestTag: ctx.registryLatestTag,
        pathPrefix: ctx.registryPathPrefix,
      });
    },
  },
  {
    title: 'Update examples registry.json',
    task: async (ctx) => {
      const registryPath = path.join(ctx.dist, 'examples-registry.json');
      const examplesDir = path.join(ctx.dist, 'examples');
      await updateExamplesRegistry(registryPath, examplesDir, {
        version: ctx.registryVersion,
        latestTag: ctx.registryLatestTag,
        pathPrefix: ctx.registryPathPrefix,
      });
    },
  },
  {
    title: 'Copy block JSON files to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'blocks');
      const files = await glob(
        path.join(__dirname, '..', '..', 'blocks', '*.json'),
        { absolute: true }
      );
      await Promise.all(
        files.map((file) =>
          fs.copy(file, path.join(dest, path.basename(file)), {
            dereference: true,
          })
        )
      );
    },
  },
  {
    title: 'Copy schema JSON files to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'schemas');
      const files = await glob(path.join(__dirname, 'schemas', '*.json'), {
        absolute: true,
      });
      await Promise.all(
        files.map((file) =>
          fs.copy(file, path.join(dest, path.basename(file)), {
            dereference: true,
          })
        )
      );
    },
  },
  {
    title: 'Fix schema $schema paths for block JSON files',
    task: async (ctx) => {
      const blockDir = path.join(ctx.dist, 'blocks');
      const files = await glob(path.join(blockDir, '*.json'), {
        absolute: true,
      });
      await Promise.all(
        files.map(async (file) => {
          const content = await fs.readFile(file, 'utf-8');
          const json = JSON.parse(content);
          if (json.$schema) {
            json.$schema = '../schemas/block.schema.json';
            await fs.writeFile(file, JSON.stringify(json, null, 2), 'utf-8');
          }
        })
      );
    },
  },
  {
    title: 'Fix schema $schema paths for example JSON files',
    task: async (ctx) => {
      const examplesDir = path.join(ctx.dist, 'examples');
      const files = await glob(path.join(examplesDir, '*.json'), {
        absolute: true,
      });
      await Promise.all(
        files.map(async (file) => {
          const content = await fs.readFile(file, 'utf-8');
          const json = JSON.parse(content);
          if (json.$schema) {
            json.$schema = '../schemas/example.schema.json';
            await fs.writeFile(file, JSON.stringify(json, null, 2), 'utf-8');
          }
        })
      );
    },
  },
  {
    title: 'Build blocks search indexes',
    task: async (ctx) => {
      const blocksDir = path.join(ctx.dist, 'blocks');
      const indexPaths = await buildSearchIndex(
        ctx.dist,
        blocksDir,
        'search-index'
      );

      // Update registry.json with version-scoped search index paths
      const registryPath = path.join(ctx.dist, 'registry.json');
      const registry = await fs.readJson(registryPath);
      registry.versions ??= {};
      registry.versions[ctx.registryVersion] ??= { blocks: [] };
      registry.versions[ctx.registryVersion].searchIndex = indexPaths;
      delete registry.searchIndex;
      await fs.writeJson(registryPath, registry, { spaces: 2 });
    },
  },
  {
    title: 'Build examples search indexes',
    task: async (ctx) => {
      const examplesDir = path.join(ctx.dist, 'examples');
      const indexPaths = await buildSearchIndex(
        ctx.dist,
        examplesDir,
        'examples-search-index'
      );

      // Update examples-registry.json with version-scoped search index paths
      const registryPath = path.join(ctx.dist, 'examples-registry.json');
      const registry = await fs.readJson(registryPath);
      registry.versions ??= {};
      registry.versions[ctx.registryVersion] ??= { examples: [] };
      registry.versions[ctx.registryVersion].searchIndex = indexPaths;
      delete registry.searchIndex;
      await fs.writeJson(registryPath, registry, { spaces: 2 });
    },
  },
  {
    title: 'Minify JSON files in dist',
    task: async (ctx) => {
      if (ctx.noRegistryMinify) {
        console.log('🧾 JSON minification disabled (NO_REGISTRY_MINIFY)');
        return;
      }

      const jsonFiles = await glob(path.join(ctx.dist, '**', '*.json'), {
        absolute: true,
      });

      await Promise.all(
        jsonFiles.map(async (file) => {
          const json = await fs.readJson(file);
          await fs.writeFile(file, JSON.stringify(json), 'utf-8');
        })
      );
    },
  },
]);

async function main() {
  const context = await task.run();
  return context;
}

main().catch((err) => {
  console.error('❌ Error during build:', err);
  process.exit(1);
});

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

const __dirname = path.resolve();
const __node_modules = path.join(__dirname, 'node_modules');
const __react_blocks = path.join(__node_modules, 'react-blocks');
const __angular_blocks = path.join(__node_modules, 'angular-blocks');

interface Ctx {
  dist: string;
}

const task = new Listr<Ctx>([
  {
    title: 'Get outDir',
    task: (ctx) => {
      ctx.dist = tsconfig.compilerOptions.outDir || 'dist';
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
    title: 'Copy registry.json to dist',
    task: async (ctx) => {
      const src = path.join(__dirname, 'registry.json');
      const dest = path.join(ctx.dist, 'registry.json');
      await fs.copy(src, dest, { dereference: true });
    },
  },
  {
    title: 'Build search index',
    task: async (ctx) => {
      const blocksDir = path.join(ctx.dist, 'blocks');
      await buildSearchIndex(ctx.dist, blocksDir);
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

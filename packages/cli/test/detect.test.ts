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
import { detectFramework } from '../src/detect';

test('detects Vue and preserves deterministic precedence for mixed dependencies', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-framework-'));
  const projects = [
    {
      name: 'react',
      dependencies: { react: '^18.0.0' },
      expected: 'react',
    },
    {
      name: 'vue',
      dependencies: { vue: '^3.0.0' },
      expected: 'vue',
    },
    {
      name: 'nuxt',
      dependencies: { nuxt: '^3.0.0' },
      expected: 'vue',
    },
    {
      name: 'react-vue',
      dependencies: { react: '^18.0.0', vue: '^3.0.0' },
      expected: 'vue',
    },
    {
      name: 'angular-react',
      dependencies: { '@angular/core': '^19.0.0', react: '^18.0.0' },
      expected: 'angular',
    },
    {
      name: 'angular-vue-react',
      dependencies: {
        '@angular/core': '^19.0.0',
        vue: '^3.0.0',
        react: '^18.0.0',
      },
      expected: 'angular',
    },
  ] as const;

  try {
    for (const project of projects) {
      const cwd = path.join(root, project.name);
      await fs.mkdir(cwd);
      await fs.writeFile(
        path.join(cwd, 'package.json'),
        JSON.stringify({ dependencies: project.dependencies })
      );
      assert.equal(await detectFramework(cwd), project.expected, project.name);
    }
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});

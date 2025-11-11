/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { CopyTask, JsonDocs } from '@stencil/core/internal';
import fs from 'fs';
import path from 'path';

const isObject = (val: unknown): val is Record<string, unknown> =>
  typeof val === 'object' && val !== null && !Array.isArray(val);

interface TraverseOptions {
  normalizeKeys: Set<string>;
  deleteKeys: Set<string>;
  baseDir: string;
}
function traverse(value: unknown, opts: TraverseOptions): void {
  if (Array.isArray(value)) {
    for (const item of value) {
      traverse(item, opts);
    }
    return;
  }

  if (!isObject(value)) return;

  for (const [key, v] of Object.entries(value)) {
    if (isObject(v) || Array.isArray(v)) {
      traverse(v, opts);
    }

    if (opts.deleteKeys.has(key)) {
      delete value[key];
      continue;
    }

    if (opts.normalizeKeys.has(key)) {
      const current = value[key];
      if (typeof current === 'string' && current.length > 0) {
        try {
          const rel = path.relative(opts.baseDir, current);
          const posixPath = rel.split(path.sep).join('/');
          value[key] = posixPath;
        } catch {
          // Silently ignore values that cannot be normalized
        }
      }
    }
  }
}

export const customComponentDocGenerator = (docs: JsonDocs): void => {
  docs.timestamp = '';
  const docsJson = JSON.stringify(docs, null, 2);

  const parsed: JsonDocs = JSON.parse(docsJson);
  traverse(parsed, {
    normalizeKeys: new Set(['dirPath', 'filePath', 'usagesDir', 'path']),
    deleteKeys: new Set(['readme', 'readmePath']),
    baseDir: path.join(__dirname, '..', '..'),
  });

  fs.writeFileSync('component-doc.json', JSON.stringify(parsed, null, 2));
};

export const getDevAssets = () => {
  const copyAssets: CopyTask[] = [
    {
      src: './../node_modules/@siemens/ix-icons',
      dest: 'build',
      keepDirStructure: true,
    },
  ];

  try {
    const brandTheme = require.resolve('@siemens/ix-brand-theme');

    if (brandTheme) {
      const themeFolder = path.join(brandTheme, '..', '..');
      copyAssets.push({
        src: themeFolder,
        dest: 'build',
        keepDirStructure: true,
      });
    }
  } catch (e) {
    console.warn('No additional theme found');
  }

  return copyAssets;
};

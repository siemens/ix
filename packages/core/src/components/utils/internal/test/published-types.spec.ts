/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';

const distTypesDir = path.resolve(process.cwd(), 'dist/types');

const stencilModuleReference =
  /(?:from\s+|import\(\s*)["']@stencil\/core(?:\/internal)?["']/;

function collectDeclarationFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectDeclarationFiles(entryPath);
    }
    return entry.name.endsWith('.d.ts') ? [entryPath] : [];
  });
}

describe.skipIf(!existsSync(distTypesDir))(
  'published type declarations (dist/types)',
  () => {
    test('do not reference @stencil/core modules (issue #2730)', () => {
      const violations: string[] = [];

      for (const file of collectDeclarationFiles(distTypesDir)) {
        const lines = readFileSync(file, 'utf-8').split('\n');
        lines.forEach((line, index) => {
          const code = line.trim();
          if (code.startsWith('*') || code.startsWith('//')) {
            return;
          }
          if (stencilModuleReference.test(line)) {
            violations.push(
              `${path.relative(distTypesDir, file)}:${index + 1}: ${code}`
            );
          }
        });
      }

      expect(violations).toEqual([]);
    });
  }
);

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const componentsRoot = path.resolve('src/components');
const customPropertyDeclarationPattern = /(--ix-[a-z0-9-]+)\s*:/g;

const componentNameOverrides: Record<string, string> = {
  'progress-indicator/circular': 'progress-indicator',
  'progress-indicator/linear': 'progress-indicator',
};

function findFiles(directory: string, suffix: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    return entry.isDirectory()
      ? findFiles(entryPath, suffix)
      : entryPath.endsWith(suffix)
      ? [entryPath]
      : [];
  });
}

describe('component CSS custom properties', () => {
  it('uses the owning component namespace for local variables', () => {
    const violations = findFiles(componentsRoot, '.vars.scss').flatMap(
      (varsPath) => {
        const componentDirectory = path.dirname(varsPath);
        const varsName = path.basename(varsPath, '.vars.scss');
        const relativeComponentPath = path
          .relative(componentsRoot, path.join(componentDirectory, varsName))
          .replaceAll(path.sep, '/');
        const componentName =
          componentNameOverrides[relativeComponentPath] ?? varsName;
        const declarations = [
          ...fs
            .readFileSync(varsPath, 'utf8')
            .matchAll(customPropertyDeclarationPattern),
        ].map((match) => match[1]);

        return declarations
          .filter(
            (customProperty) =>
              !customProperty.startsWith(`--ix-${componentName}-`) &&
              !customProperty.startsWith(`--ix-${componentName}--`)
          )
          .map(
            (customProperty) =>
              `${path.relative(componentsRoot, varsPath)}: ${customProperty}`
          );
      }
    );

    expect(violations).toEqual([]);
  });

  it('declares each local variable once', () => {
    const duplicates = findFiles(componentsRoot, '.vars.scss').flatMap(
      (varsPath) => {
        const declarations = [
          ...fs
            .readFileSync(varsPath, 'utf8')
            .matchAll(customPropertyDeclarationPattern),
        ].map((match) => match[1]);

        return [...new Set(declarations)]
          .filter(
            (customProperty) =>
              declarations.indexOf(customProperty) !==
              declarations.lastIndexOf(customProperty)
          )
          .map(
            (customProperty) =>
              `${path.relative(componentsRoot, varsPath)}: ${customProperty}`
          );
      }
    );

    expect(duplicates).toEqual([]);
  });
});

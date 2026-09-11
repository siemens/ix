/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';

type ComponentDoc = {
  components: Array<{ tag: string }>;
};

const FORWARD_FILENAME = 'component-usage.json';
const REVERSE_FILENAME = 'component-usage-by-component.json';
const SUPPORTED_FILE_PATTERN = /\.(html?|jsx?|tsx?)$/;
const IX_TAG_PATTERN = /<\s*(ix-[a-z0-9-]+)(?=\s|\/|>)/g;
const REACT_IMPORT_PATTERN =
  /import\s+(?:type\s+)?{([^}]*)}\s+from\s+['"]@siemens\/ix-react['"]/g;
const JSX_TAG_PATTERN = /<\s*([A-Z][A-Za-z0-9]*)(?=\s|\/|>)/g;

const componentDoc = JSON.parse(
  readFileSync(
    path.resolve('node_modules/@siemens/ix/component-doc.json'),
    'utf8'
  )
) as ComponentDoc;
const availableComponentTags = new Set(
  componentDoc.components.map((component) => component.tag)
);

function toComponentTag(exportName: string): string {
  const componentName = exportName.startsWith('Ix')
    ? exportName.slice(2)
    : exportName;
  const kebabName = componentName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

  return `ix-${kebabName}`;
}

function reactImports(code: string): Map<string, string> {
  const imports = new Map<string, string>();

  for (const match of code.matchAll(REACT_IMPORT_PATTERN)) {
    for (const specifier of match[1].split(',')) {
      const [importedName, localName] = specifier
        .trim()
        .replace(/^type\s+/, '')
        .split(/\s+as\s+/);

      if (importedName) {
        imports.set(localName ?? importedName, importedName);
      }
    }
  }

  return imports;
}

function extractComponentTags(code: string): Set<string> {
  const tags = new Set<string>();

  for (const match of code.matchAll(IX_TAG_PATTERN)) {
    if (availableComponentTags.has(match[1])) {
      tags.add(match[1]);
    }
  }

  const imports = reactImports(code);
  if (imports.size === 0) {
    return tags;
  }

  for (const match of code.matchAll(JSX_TAG_PATTERN)) {
    const importedName = imports.get(match[1]);
    if (!importedName) {
      continue;
    }

    const componentTag = toComponentTag(importedName);
    if (availableComponentTags.has(componentTag)) {
      tags.add(componentTag);
    }
  }

  return tags;
}

function normalizeFileId(id: string): string | null {
  const filePath = id.split('?', 1)[0];
  if (!SUPPORTED_FILE_PATTERN.test(filePath)) {
    return null;
  }

  const relativePath = path.relative(process.cwd(), filePath);
  if (!relativePath || relativePath.startsWith('..')) {
    return null;
  }

  return `/${relativePath.replaceAll(path.sep, '/')}`;
}

function sortUsageMap(
  usage: Map<string, Set<string>>
): Record<string, string[]> {
  return Object.fromEntries(
    [...usage.entries()]
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, values]) => [key, [...values].sort()])
  );
}

function reverseUsageMap(
  usage: Map<string, Set<string>>
): Record<string, string[]> {
  const reverseUsage = new Map<string, Set<string>>();

  for (const [file, componentTags] of usage) {
    for (const componentTag of componentTags) {
      const files = reverseUsage.get(componentTag) ?? new Set<string>();
      files.add(file);
      reverseUsage.set(componentTag, files);
    }
  }

  return sortUsageMap(reverseUsage);
}

export function componentUsagePlugin() {
  const usage = new Map<string, Set<string>>();

  return {
    name: 'component-usage',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      const file = normalizeFileId(id);
      if (!file) {
        return null;
      }

      const componentTags = extractComponentTags(code);
      if (componentTags.size > 0) {
        usage.set(file, componentTags);
      } else {
        usage.delete(file);
      }

      return null;
    },
    async closeBundle() {
      await Promise.all([
        fs.writeFile(
          path.resolve(FORWARD_FILENAME),
          JSON.stringify(sortUsageMap(usage), null, 2),
          'utf8'
        ),
        fs.writeFile(
          path.resolve(REVERSE_FILENAME),
          JSON.stringify(reverseUsageMap(usage), null, 2),
          'utf8'
        ),
      ]);
    },
  };
}

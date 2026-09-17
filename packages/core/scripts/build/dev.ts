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

const compareBy =
  <T>(selector: (value: T) => string) =>
  (a: T, b: T) => {
    const valueA = selector(a);
    const valueB = selector(b);

    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  };

export const createComponentApi = (docs: JsonDocs) => ({
  components: [...docs.components]
    .sort(compareBy((component) => component.tag))
    .map((component) => ({
      tag: component.tag,
      deprecated: component.deprecation !== undefined,
      properties: [...component.props]
        .sort(compareBy((prop) => prop.name))
        .map((prop) => ({
          name: prop.name,
          attribute: prop.attr,
          type: prop.type,
          mutable: prop.mutable,
          reflectToAttribute: prop.reflectToAttr,
          default: prop.default,
          optional: prop.optional,
          required: prop.required,
          deprecated: prop.deprecation !== undefined,
        })),
      methods: [...component.methods]
        .sort(compareBy((method) => method.name))
        .map((method) => ({
          name: method.name,
          signature: method.signature,
          deprecated: method.deprecation !== undefined,
        })),
      events: [...component.events]
        .sort(compareBy((event) => event.event))
        .map((event) => ({
          name: event.event,
          detail: event.detail,
          bubbles: event.bubbles,
          cancelable: event.cancelable,
          composed: event.composed,
          deprecated: event.deprecation !== undefined,
        })),
      cssProperties: [...component.styles]
        .sort(compareBy((style) => style.name))
        .map((style) => ({
          name: style.name,
          annotation: style.annotation,
          mode: style.mode,
        })),
      slots: component.slots
        .map((slot) => slot.name || 'default')
        .sort(compareBy((slot) => slot)),
      cssParts: component.parts
        .map((part) => part.name)
        .sort(compareBy((part) => part)),
      cssStates: [...component.customStates]
        .sort(compareBy((state) => state.name))
        .map((state) => ({
          name: state.name,
          initialValue: state.initialValue,
        })),
    })),
});

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

  fs.writeFileSync(
    'component-api.json',
    `${JSON.stringify(createComponentApi(docs), null, 2)}\n`
  );
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

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'node:path';
import { compile, compileString } from 'sass';
import { describe, expect, it } from 'vitest';

const themeRoot = path.resolve('scss/theme/classic');
const scssRoot = path.resolve('scss');

const referenceUsagePattern = /var\((--si-ref-[a-zA-Z0-9-]+)\)/g;
const referenceDeclarationPattern = /^\s*(--si-ref-[a-zA-Z0-9-]+):/gm;
const systemDeclarationPattern = /^\s*(--si-sys-[a-zA-Z0-9-]+):/gm;
const legacySiemensPrefixPattern = /--theme-si-(?:ref|sys)-/;

describe('classic theme CSS', () => {
  it.each(['dark', 'light'] as const)(
    'builds a self-contained %s variant',
    (schema) => {
      const css = compile(path.join(themeRoot, schema, '_index.scss')).css;
      const usedReferenceTokens = new Set(
        [...css.matchAll(referenceUsagePattern)].map((match) => match[1])
      );
      const declaredReferenceTokens = new Set(
        [...css.matchAll(referenceDeclarationPattern)].map((match) => match[1])
      );
      const declaredSystemTokens = new Set(
        [...css.matchAll(systemDeclarationPattern)].map((match) => match[1])
      );
      const missingReferenceTokens = [...usedReferenceTokens].filter(
        (token) => !declaredReferenceTokens.has(token)
      );

      expect(usedReferenceTokens.size).toBeGreaterThan(0);
      expect(missingReferenceTokens).toEqual([]);
      expect(declaredSystemTokens.size).toBeGreaterThan(0);
      expect(css).not.toMatch(legacySiemensPrefixPattern);
      expect(css).toContain(
        `[data-ix-theme=classic][data-ix-color-schema=${schema}]`
      );
    }
  );

  it('emits shared reference tokens once in the combined theme', () => {
    const css = compileString(
      "@use 'theme' as classic;\n@include classic.theme;",
      {
        loadPaths: [themeRoot],
      }
    ).css;
    const referenceDeclarations = [
      ...css.matchAll(referenceDeclarationPattern),
    ].map((match) => match[1]);

    expect(referenceDeclarations.length).toBeGreaterThan(0);
    expect(referenceDeclarations).toEqual([...new Set(referenceDeclarations)]);
  });
});

describe('system Sass variables', () => {
  it('emits no CSS when loaded', () => {
    const css = compileString("@use 'theme/core/sys.variables';", {
      loadPaths: [scssRoot],
    }).css;

    expect(css).toBe('');
  });
});

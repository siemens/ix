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
import { compile, compileString } from 'sass';
import { describe, expect, it } from 'vitest';
import { readRemovedComponentTokens } from './removed-component-tokens';

const themeRoot = path.resolve('scss/theme/classic');
const scssRoot = path.resolve('scss');

const referenceUsagePattern = /var\((--si-ref-[a-zA-Z0-9-]+)\)/g;
const referenceDeclarationPattern = /^\s*(--si-ref-[a-zA-Z0-9-]+):/gm;
const systemDeclarationPattern = /^\s*(--si-sys-[a-zA-Z0-9-]+):/gm;
const themeDeclarationPattern = /^\s*(--theme-[a-zA-Z0-9-]+):/gm;
const obsoleteSystemColorPattern =
  /--si-sys-(background|border|text|effects|data|code)-/;
const legacySiemensPrefixPattern = /--theme-si-(?:ref|sys)-/;

function getThemeDeclarations(source: string) {
  return new Set(
    [...source.matchAll(themeDeclarationPattern)].map((match) => match[1])
  );
}

const removedComponentDeclarations = new Set(
  readRemovedComponentTokens().map((token) => token.name)
);

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
      expect([...declaredSystemTokens]).toEqual(
        expect.arrayContaining([
          '--si-sys-color-background-0',
          '--si-sys-color-border-1',
          '--si-sys-color-text-primary',
          '--si-sys-color-effects-focus',
          '--si-sys-color-data-categorical-1',
          '--si-sys-color-code-1',
        ])
      );
      expect(css).not.toMatch(obsoleteSystemColorPattern);
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
    expect(css).toContain(
      '[data-ix-theme=classic][data-ix-color-schema=system]'
    );
    expect(css).toContain('@media (prefers-color-scheme: dark)');
    expect(css).toContain('@media (prefers-color-scheme: light)');
  });

  it.each([
    'ix-foundation.scss',
    'ix.scss',
    'ix-globals.scss',
    'ix-legacy.scss',
    'ix-utilities.scss',
  ])('does not emit removed component aliases in %s', (entry) => {
    const css = compile(path.join(scssRoot, entry), {
      loadPaths: [scssRoot],
    }).css;
    const emittedDeclarations = getThemeDeclarations(css);
    const removedDeclarations = [...removedComponentDeclarations].filter(
      (declaration) => emittedDeclarations.has(declaration)
    );

    expect(removedComponentDeclarations.size).toBe(1557);
    expect(removedDeclarations).toEqual([]);
  });

  it('rejects imports of the removed deprecated component mixin', () => {
    expect(() =>
      compileString("@use 'deprecated/components';", {
        loadPaths: [scssRoot],
      })
    ).toThrow("Can't find stylesheet to import.");
  });
});

describe('system Sass variables', () => {
  it('emits no CSS rules when loaded', () => {
    const css = compileString("@use 'tokens/system';", {
      loadPaths: [scssRoot],
    }).css;

    expect(css).not.toMatch(/[{}]/);
  });

  it('exports the migrated color variables', () => {
    const system = fs.readFileSync(
      path.resolve('scss/tokens/_system.scss'),
      'utf8'
    );

    expect(system).toContain(
      '$si-sys-color-background-0: var(--si-sys-color-background-0)'
    );
    expect(system).toContain(
      '$si-sys-color-border-1: var(--si-sys-color-border-1)'
    );
    expect(system).toContain(
      '$si-sys-color-text-primary: var(--si-sys-color-text-primary)'
    );
    expect(system).toContain(
      '$si-sys-color-effects-focus: var(--si-sys-color-effects-focus)'
    );
    expect(system).toContain(
      '$si-sys-color-data-categorical-1: var(--si-sys-color-data-categorical-1)'
    );
    expect(system).toContain(
      '$si-sys-color-code-1: var(--si-sys-color-code-1)'
    );
    expect(system).not.toMatch(
      /\$si-sys-(background|border|text|effects|data|code)-/
    );
  });
});

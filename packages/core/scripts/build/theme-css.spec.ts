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

const themeRoot = path.resolve('scss/theme/classic');
const scssRoot = path.resolve('scss');
const deprecatedComponentsRoot = path.resolve('scss/deprecated/components');

const referenceUsagePattern = /var\((--si-ref-[a-zA-Z0-9-]+)\)/g;
const referenceDeclarationPattern = /^\s*(--si-ref-[a-zA-Z0-9-]+):/gm;
const systemDeclarationPattern = /^\s*(--si-sys-[a-zA-Z0-9-]+):/gm;
const themeDeclarationPattern = /^\s*(--theme-[a-zA-Z0-9-]+):/gm;
const obsoleteSystemColorPattern =
  /--si-sys-(background|border|text|effects|data|code)-/;
const legacySiemensPrefixPattern = /--theme-si-(?:ref|sys)-/;

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

function getThemeDeclarations(source: string) {
  return new Set(
    [...source.matchAll(themeDeclarationPattern)].map((match) => match[1])
  );
}

const deprecatedComponentDeclarations = new Set(
  findFiles(deprecatedComponentsRoot, '.scss').flatMap((sourcePath) => [
    ...getThemeDeclarations(fs.readFileSync(sourcePath, 'utf8')),
  ])
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

  it('does not emit deprecated component aliases in foundation CSS', () => {
    const css = compile(path.join(scssRoot, 'ix-foundation.scss'), {
      loadPaths: [scssRoot],
    }).css;
    const emittedDeclarations = getThemeDeclarations(css);
    const deprecatedDeclarations = [...deprecatedComponentDeclarations].filter(
      (declaration) => emittedDeclarations.has(declaration)
    );

    expect(deprecatedComponentDeclarations.size).toBeGreaterThan(0);
    expect(deprecatedDeclarations).toEqual([]);
  });

  it('emits deprecated component aliases through the opt-in Sass mixin', () => {
    const css = compileString(
      [
        "@use 'deprecated/components' as deprecated;",
        '[data-ix-theme] {',
        '  @include deprecated.setComponentVars;',
        '}',
      ].join('\n'),
      {
        loadPaths: [scssRoot],
      }
    ).css;

    expect([...getThemeDeclarations(css)].sort()).toEqual(
      [...deprecatedComponentDeclarations].sort()
    );
    expect(css).not.toMatch(obsoleteSystemColorPattern);
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

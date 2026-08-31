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
import postcss from 'postcss';
import { compile } from 'sass';
import { describe, expect, it } from 'vitest';

const scssRoot = path.resolve('scss');

function compileEntry(entry: string) {
  return compile(path.join(scssRoot, entry), {
    loadPaths: [scssRoot],
  }).css;
}

function getSelectors(css: string) {
  const selectors: string[] = [];

  postcss.parse(css).walkRules((rule) => {
    selectors.push(rule.selector);
  });

  return selectors;
}

function normalizeCss(css: string) {
  return css
    .replaceAll(/\/\*[\s\S]*?\*\//g, '')
    .replaceAll('@charset "UTF-8";', '')
    .replaceAll(/\s+/g, ' ')
    .replaceAll(/\s*([{}:,;])\s*/g, '$1')
    .trim();
}

describe('global CSS entry points', () => {
  it('keeps foundation free of optional global styles', () => {
    const selectors = getSelectors(compileEntry('ix-foundation.scss'));
    const selectorList = selectors.join(',');

    expect(selectorList).not.toContain('.typography-');
    expect(selectorList).not.toContain('.ix-table');
    expect(selectorList).not.toContain('.ix-form-control');
    expect(selectorList).not.toContain('[data-ix-scrollbars]');
  });

  it('includes the default utilities without opt-in global styles', () => {
    const selectors = getSelectors(compileEntry('ix.scss'));
    const selectorList = selectors.join(',');

    expect(selectorList).toContain('.typography-');
    expect(selectorList).toContain('.ix-table');
    expect(selectorList).toContain('.ix-button-group');
    expect(selectorList).toContain('a[href]');
    expect(selectorList).not.toContain('.input-group-label');
    expect(selectorList).not.toContain('.ix-form-control');
    expect(selectorList).not.toContain('[data-ix-scrollbars]');
  });

  it('includes document presentation defaults in foundation', () => {
    const foundationCss = compileEntry('ix-foundation.scss');
    const foundation = normalizeCss(foundationCss);

    expect(foundation).toContain('body{color:var(--si-sys-text-primary)');
    expect(foundation).toContain('background-color:var(--si-sys-background-0)');
    expect(foundation).toContain('font-family:Siemens Sans');
    expect(foundation).toContain(
      '--theme-font-family:"SiemensSans Pro VF","SiemensSans Pro",helvetica,arial,sans-serif'
    );
    expect(foundation).toContain('font-family:var(--theme-font-family)');
    expect(foundationCss).toContain('body:not(.disable-scrollbar)');
    expect(foundation).not.toContain('margin:0');
  });

  it('scopes the optional scrollbar stylesheet to an explicit subtree', () => {
    const selectors = getSelectors(compileEntry('ix-scrollbar.scss'));

    expect(selectors.length).toBeGreaterThan(0);
    expect(
      selectors.every((selector) => selector.includes('[data-ix-scrollbars]'))
    ).toBe(true);
    expect(selectors.join(',')).not.toContain('disable-scrollbar');
  });

  it('composes globals from the supported opt-in styles only', () => {
    const globals = compileEntry('ix-globals.scss');
    const granularStyles = [
      'ix-reset.scss',
      'ix-base.scss',
      'ix-scrollbar.scss',
      'ix-utilities.scss',
    ]
      .map(compileEntry)
      .join('\n');

    expect(normalizeCss(globals)).toBe(normalizeCss(granularStyles));
    expect(globals).not.toContain('.ix-form-control');
  });

  it('preserves previous native-element behavior in the legacy entry point', () => {
    const legacyCss = compileEntry('ix-legacy.scss');
    const legacy = normalizeCss(legacyCss);

    expect(legacy).toContain('.ix-form-control');
    expect(legacyCss).not.toContain('body:not(.disable-scrollbar)');
    expect(legacyCss).toContain('.ix-table');
    expect(legacy).toContain('box-sizing:border-box');
  });
});

describe('public style exports', () => {
  it('lists supported CSS and Sass entry points explicitly', () => {
    const packageJson = JSON.parse(
      fs.readFileSync(path.resolve('package.json'), 'utf8')
    ) as {
      exports: Record<string, unknown>;
    };
    const expectedExports = [
      './css/default.css',
      './css/foundation.css',
      './css/reset.css',
      './css/base.css',
      './css/scrollbar.css',
      './css/utilities.css',
      './css/globals.css',
      './css/legacy.css',
      './scss/default',
      './scss/foundation',
      './scss/reset',
      './scss/base',
      './scss/scrollbar',
      './scss/utilities',
      './scss/globals',
      './scss/legacy',
      './scss/tokens/system',
      './scss/tokens/legacy',
      './scss/misc/common-variables',
      './scss/deprecated/components',
    ];

    expect(Object.keys(packageJson.exports)).not.toContain('./scss/*');
    expect(Object.keys(packageJson.exports)).toEqual(
      expect.arrayContaining(expectedExports)
    );

    for (const exportName of expectedExports) {
      const exportPath = packageJson.exports[exportName];

      expect(typeof exportPath).toBe('string');
      expect(fs.existsSync(path.resolve(exportPath as string))).toBe(true);
    }
  });

  it('compiles every Sass export without repository load paths', () => {
    const packageJson = JSON.parse(
      fs.readFileSync(path.resolve('package.json'), 'utf8')
    ) as {
      exports: Record<string, unknown>;
    };

    for (const [exportName, exportPath] of Object.entries(
      packageJson.exports
    )) {
      if (!exportName.startsWith('./scss/')) {
        continue;
      }

      expect(typeof exportPath).toBe('string');
      expect(
        () => compile(path.resolve(exportPath as string)),
        exportName
      ).not.toThrow();
    }
  });
});

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'node:path';
import postcss from 'postcss';
import { compile, compileString } from 'sass';
import { describe, expect, it } from 'vitest';

const scssRoot = path.resolve('scss');

function compileInputMixin(module: string, mixin: string) {
  return compileString(
    `@use '${module}' as input;\n.control { @include input.${mixin}; }`,
    { loadPaths: [scssRoot] }
  ).css;
}

function getDeclarationValues(css: string, property: string) {
  const values: string[] = [];

  postcss.parse(css).walkDecls(property, (declaration) => {
    values.push(declaration.value.replaceAll(/\s+/g, ' ').trim());
  });

  return values;
}

describe('input shadow defaults', () => {
  it.each([
    ['mixins/input', 'element-input'],
    ['mixins/internal/input-control', 'input-control'],
  ])('uses no default shadow in %s', (module, mixin) => {
    const css = compileInputMixin(module, mixin);
    const shadows = getDeclarationValues(css, 'box-shadow');
    const unexpectedShadows = shadows.filter(
      (value) =>
        value !== 'none' && value !== 'var(--ix-input--box-shadow, none)'
    );

    expect(shadows.length).toBeGreaterThan(0);
    expect(shadows).toContain('var(--ix-input--box-shadow, none)');
    expect(unexpectedShadows).toEqual([]);
  });

  it.each(['legacy/components/input', 'legacy/components/forms'])(
    'uses no shadows in %s',
    (entry) => {
      const css = compileString(`@use '${entry}';`, {
        loadPaths: [scssRoot],
      }).css;
      const shadows = getDeclarationValues(css, 'box-shadow');

      expect(shadows.length).toBeGreaterThan(0);
      expect([...new Set(shadows)]).toEqual(['none']);
    }
  );

  it('keeps native inputs shadow-free in the legacy bundle', () => {
    const css = compileString("@use 'ix-legacy';", {
      loadPaths: [scssRoot],
    }).css;
    const inputRules: string[] = [];

    postcss.parse(css).walkRules((rule) => {
      if (rule.selector.includes('.ix-form-control')) {
        inputRules.push(rule.toString());
      }
    });

    const shadows = getDeclarationValues(inputRules.join('\n'), 'box-shadow');

    expect(shadows.length).toBeGreaterThan(0);
    expect([...new Set(shadows)]).toEqual(['none']);
  });

  it('uses no default shadow in select', () => {
    const css = compile(
      path.resolve('src/components/select/select.vars.scss'),
      { loadPaths: [scssRoot] }
    ).css;

    expect(getDeclarationValues(css, '--ix-select--box-shadow')).toEqual([
      'none',
    ]);
  });

  it('preserves the browser autofill background correction', () => {
    const css = compileInputMixin('mixins/input', 'element-input');

    expect(getDeclarationValues(css, '-webkit-box-shadow')).toEqual([
      '0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset',
    ]);
  });
});

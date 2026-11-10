/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Enforces the naming grammar for component CSS custom properties declared in
 * `src/components/**\/*.vars.scss`:
 *
 *   --ix-<component>[-<part>]--<property>[--<modifier>...]
 *
 * See `.github/instructions/component-vars.instructions.md`.
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const COMPONENTS_DIR = path.resolve(__dirname, '../../src/components');

/** Modifier categories in canonical order. */
const MODIFIER_CATEGORIES: string[][] = [
  // variant
  [
    'danger-primary',
    'danger-secondary',
    'danger-tertiary',
    'subtle-primary',
    'subtle-secondary',
    'subtle-tertiary',
    'primary',
    'secondary',
    'tertiary',
  ],
  // status / validation
  [
    'alarm',
    'danger',
    'critical',
    'warning',
    'caution',
    'information',
    'success',
    'neutral',
    'accent',
    'error',
    'paused',
    'base',
    'custom',
    'valid',
    'info',
    'invalid',
  ],
  // appearance
  [
    'outline',
    'filled',
    'contrast',
    'rounded',
    'emphasis',
    'initial',
    'with-icon',
    'no-icon',
  ],
  // size
  [
    'compact-break',
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'small',
    'medium',
    'large',
    'big',
    'compact',
    '12',
    '16',
    '20',
    '24',
    '32',
    '360',
    '480',
    '600',
    '720',
    '840',
  ],
  // context
  ['mobile', 'vertical', 'horizontal', 'alternating', 'stacked'],
  // state
  [
    'checked',
    'unchecked',
    'mixed',
    'on',
    'off',
    'selected',
    'expanded',
    'collapsed',
    'pressed',
    'range',
    'autofill',
    'dragover',
    'draggable',
    'divider',
    'separator',
    'checking',
    'end',
  ],
  // interaction
  ['hover', 'active', 'focus'],
  // disabled
  ['readonly', 'disabled'],
];

const MODIFIER_CATEGORY = new Map<string, number>();
MODIFIER_CATEGORIES.forEach((words, index) =>
  words.forEach((word) => {
    if (!MODIFIER_CATEGORY.has(word)) MODIFIER_CATEGORY.set(word, index);
  })
);

/** CSS properties plus approved custom (non-CSS) property names. */
const PROPERTIES = new Set(
  `animation-duration backdrop-filter background background-color block-size blur-radius border
  border-block-end-color border-bottom-color border-bottom-left-radius border-bottom-right-radius
  border-bottom-width border-color border-left-width border-radius border-radius-left border-radius-right
  border-style border-top-color border-top-left-radius border-top-right-radius border-top-width border-width
  bottom box-shadow box-shadow-color box-shadow-width color column-gap columns edge-inset elevation-filter fade-width fill filter
  flex flex-basis font font-size font-weight gap grid-template-columns grid-template-rows height inline-size
  inner-height inset left line-height margin margin-block margin-block-end margin-block-start margin-bottom
  margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top mask-duration mask-size
  max-height max-width min-block-size min-height min-inline-size min-width offset offset-x offset-y opacity
  outline outline-color outline-offset outline-width padding padding-block padding-block-end padding-block-start
  padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top
  perspective right rotate rotation-duration row-gap safe-area-left size status-color strip-height strip-width
  stroke stroke-width surface target-size text-underline-thickness tick-size top transform transition-delay transition-duration translate
  viewport-offset width x y z-index`
    .trim()
    .split(/\s+/)
);

/** Vars files whose stem is not the owning component name. */
const COMPONENT_ALIASES: Record<string, string> = {
  'ix-playground': 'playground',
};

const NAME =
  /^--ix-([a-z0-9]+(?:-[a-z0-9]+)*)--([a-z0-9]+(?:-[a-z0-9]+)*)((?:--[a-z0-9]+(?:-[a-z0-9]+)*)*)$/;

type Declaration = { file: string; name: string; component: string };

function findVarsFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findVarsFiles(full);
    return entry.name.endsWith('.vars.scss') ? [full] : [];
  });
}

function componentOf(file: string) {
  const stem = path.basename(file, '.vars.scss');
  return COMPONENT_ALIASES[stem] ?? stem;
}

function declarationsOf(file: string): Declaration[] {
  const source = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');
  return [...source.matchAll(/(?:^|[{;\s])(--[\w#{}$-]+)\s*:/g)].map(
    (match) => ({
      file: path.relative(COMPONENTS_DIR, file),
      component: componentOf(file),
      // Interpolated `@each` values are validated as a status modifier.
      name: match[1].replace(/#\{\$[\w-]+\}/g, 'danger'),
    })
  );
}

const files = findVarsFiles(COMPONENTS_DIR);
const components = new Set(files.map(componentOf));
const declarations = files.flatMap(declarationsOf);
const publicDeclarations = declarations.filter(({ name }) =>
  NAME.test(name)
);

function format({ file, name }: Declaration) {
  return `${file}: ${name}`;
}

function parse(name: string) {
  const [, block, property, modifiers] = NAME.exec(name)!;
  return {
    block,
    property,
    modifiers: modifiers ? modifiers.slice(2).split('--') : [],
  };
}

function owningComponent(block: string) {
  const words = block.split('-');
  for (let length = words.length; length > 0; length--) {
    const candidate = words.slice(0, length).join('-');
    if (components.has(candidate)) return candidate;
  }
  return undefined;
}

describe('component CSS custom properties', () => {
  it('finds vars files', () => {
    expect(files.length).toBeGreaterThan(50);
  });

  it('never declares private (--_ix-) properties in vars files', () => {
    const privates = declarations.filter(({ name }) => name.startsWith('--_'));
    expect(privates.map(format)).toEqual([]);
  });

  it('follows --ix-<component>[-<part>]--<property>[--<modifier>...]', () => {
    const invalid = declarations.filter(
      ({ name }) => !name.startsWith('--_') && !NAME.test(name)
    );
    expect(invalid.map(format)).toEqual([]);
  });

  it('prefixes every property with the owning component', () => {
    const foreign = publicDeclarations.filter(
      ({ name, component }) => owningComponent(parse(name).block) !== component
    );
    expect(foreign.map(format)).toEqual([]);
  });

  it('uses a known property name', () => {
    const unknown = publicDeclarations.filter(
      ({ name }) => !PROPERTIES.has(parse(name).property)
    );
    expect(unknown.map(format)).toEqual([]);
  });

  it('uses known modifiers in canonical order', () => {
    const invalid = publicDeclarations.filter(({ name }) => {
      const categories = parse(name).modifiers.map((modifier) =>
        MODIFIER_CATEGORY.get(modifier)
      );
      return categories.some(
        (category, index) =>
          category === undefined ||
          (index > 0 && category < (categories[index - 1] ?? 0))
      );
    });
    expect(invalid.map(format)).toEqual([]);
  });

  it('declares every property in exactly one vars file', () => {
    const owners = new Map<string, Set<string>>();
    for (const { file, name } of publicDeclarations) {
      owners.set(name, (owners.get(name) ?? new Set()).add(file));
    }
    const duplicates = [...owners]
      .filter(([, owningFiles]) => owningFiles.size > 1)
      .map(([name, owningFiles]) => `${name}: ${[...owningFiles].join(', ')}`);
    expect(duplicates).toEqual([]);
  });
});

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
 * and that every `var(--ix-*)` reference in the compiled component CSS resolves
 * to a declared property.
 *
 * See `.github/instructions/component-vars.instructions.md`.
 */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { compile } from 'sass';
import { describe, expect, it } from 'vitest';

const CORE_DIR = path.resolve(__dirname, '../..');
const COMPONENTS_DIR = path.join(CORE_DIR, 'src/components');

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
  fallback-width flex flex-basis font font-size font-weight gap grid-template-columns grid-template-rows height inline-size
  inner-height inset left line-height margin margin-block margin-block-end margin-block-start margin-bottom
  margin-inline margin-inline-end margin-inline-start margin-left margin-right margin-top mask-duration mask-size
  max-height max-width min-block-size min-height min-inline-size min-width offset offset-x offset-y opacity
  outline outline-color outline-offset outline-width overflow padding padding-block padding-block-end padding-block-start
  padding-bottom padding-inline padding-inline-end padding-inline-start padding-left padding-right padding-top
  perspective pulse-color right rotate rotation-duration row-gap safe-area-left size status-color strip-height strip-width
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

function findFiles(dir: string, extensions: string[]): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findFiles(full, extensions);
    return extensions.some((extension) => entry.name.endsWith(extension))
      ? [full]
      : [];
  });
}

function componentOf(file: string) {
  const stem = path.basename(file, '.vars.scss');
  return COMPONENT_ALIASES[stem] ?? stem;
}

function stripComments(source: string) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
}

function declarationsOf(file: string): Declaration[] {
  const source = stripComments(readFileSync(file, 'utf8'));
  return [...source.matchAll(/cv\.(?:define|declare)-var\(\s*'([^']+)'/g)].map(
    (match) => ({
      file: path.relative(COMPONENTS_DIR, file),
      component: componentOf(file),
      // Interpolated `@each` values are validated as a status modifier.
      name: `--ix-${match[1].replace(/#\{\$[\w-]+\}/g, 'danger')}`,
    })
  );
}

const files = findFiles(COMPONENTS_DIR, ['.vars.scss']);
const components = new Set(files.map(componentOf));
const declarations = files.flatMap(declarationsOf);
const publicDeclarations = declarations.filter(({ name }) => NAME.test(name));

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

  it('marks every vars file as internal API', () => {
    const missing = files
      .filter(
        (file) =>
          !readFileSync(file, 'utf8').includes(
            '// Internal: these CSS custom properties are implementation details'
          )
      )
      .map((file) => path.relative(COMPONENTS_DIR, file));
    expect(missing).toEqual([]);
  });

  it('uses only the --ix- prefix in component sources', () => {
    const sources = findFiles(COMPONENTS_DIR, ['.scss', '.tsx', '.ts']);
    const prefixed = sources.flatMap((file) =>
      [...readFileSync(file, 'utf8').matchAll(/--_ix-[\w-]+/g)].map(
        ([name]) => `${path.relative(COMPONENTS_DIR, file)}: ${name}`
      )
    );
    expect(prefixed).toEqual([]);
  });

  it('follows --ix-<component>[-<part>]--<property>[--<modifier>...]', () => {
    const invalid = declarations.filter(({ name }) => !NAME.test(name));
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

/** Global (non-component) properties declared in `scss/`. */
const GLOBAL_PROPERTY = /^--ix-safe-area-inset-/;

function styleEntries() {
  return findFiles(COMPONENTS_DIR, ['.tsx']).flatMap((file) =>
    [
      ...readFileSync(file, 'utf8').matchAll(
        /styleUrls?:\s*(\[[^\]]*\]|'[^']*')/g
      ),
    ].flatMap(([, urls]) =>
      [...urls.matchAll(/'([^']+\.scss)'/g)].map(([, url]) =>
        path.resolve(path.dirname(file), url)
      )
    )
  );
}

describe('component CSS custom property references', () => {
  const scssSources = findFiles(COMPONENTS_DIR, ['.scss']);
  const compiled = [...new Set(styleEntries())].map(
    (entry) => compile(entry, { loadPaths: [path.join(CORE_DIR, 'scss')] }).css
  );

  it('declares properties with define-var, declare-var or set-var', () => {
    const raw = scssSources.flatMap((file) =>
      [
        ...stripComments(readFileSync(file, 'utf8')).matchAll(
          /(?:^|[{;])\s*(--ix-[\w#{}$-]+)\s*:/g
        ),
      ]
        .filter(([, name]) => !GLOBAL_PROPERTY.test(name))
        .map(([, name]) => `${path.relative(COMPONENTS_DIR, file)}: ${name}`)
    );
    expect(raw).toEqual([]);
  });

  it('reads properties with get-var', () => {
    const raw = scssSources.flatMap((file) =>
      [
        ...stripComments(readFileSync(file, 'utf8')).matchAll(
          /var\(\s*(--ix-[\w#{}$-]+)/g
        ),
      ]
        .filter(([, name]) => !GLOBAL_PROPERTY.test(name))
        .map(([, name]) => `${path.relative(COMPONENTS_DIR, file)}: ${name}`)
    );
    expect(raw).toEqual([]);
  });

  // Custom property declarations and `var()` references per property.
  const declared = new Set<string>();
  const references = new Map<string, Set<string>>();
  const read = new Set<string>();
  for (const css of compiled) {
    for (const [, name, value] of css.matchAll(/(--ix-[\w-]+)\s*:([^;}]*)/g)) {
      declared.add(name);
      const targets = references.get(name) ?? new Set<string>();
      for (const [, target] of value.matchAll(/var\(\s*(--ix-[\w-]+)/g)) {
        targets.add(target);
      }
      references.set(name, targets);
    }
    const properties = css.replace(/--ix-[\w-]+\s*:[^;}]*/g, '');
    for (const [, name] of properties.matchAll(/var\(\s*(--ix-[\w-]+)/g)) {
      read.add(name);
    }
  }
  // Properties set or read at runtime from TSX (inline styles, setProperty,
  // getPropertyValue).
  const runtimeSources = findFiles(COMPONENTS_DIR, ['.tsx', '.ts']).filter(
    (file) => !file.split(path.sep).includes('test')
  );
  for (const file of runtimeSources) {
    for (const [match, name] of readFileSync(file, 'utf8').matchAll(
      /(?:var\(\s*)?(--ix-[\w-]+)/g
    )) {
      if (!match.startsWith('var(')) declared.add(name);
      read.add(name);
    }
  }

  it('resolves every var(--ix-*) in the compiled CSS', () => {
    const referenced = new Set([
      ...read,
      ...[...references.values()].flatMap((targets) => [...targets]),
    ]);
    const unresolved = [...referenced]
      .filter((name) => !declared.has(name) && !GLOBAL_PROPERTY.test(name))
      .sort();
    expect(unresolved).toEqual([]);
  });

  it('reads every declared property', () => {
    const used = new Set<string>();
    const pending = [...read];
    while (pending.length) {
      const name = pending.pop()!;
      if (used.has(name)) continue;
      used.add(name);
      pending.push(...(references.get(name) ?? []));
    }
    const unused = [...declared]
      .filter((name) => !used.has(name) && !GLOBAL_PROPERTY.test(name))
      .sort();
    expect(unused).toEqual([]);
  });
});

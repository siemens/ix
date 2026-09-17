/* eslint-disable */
/* tslint:disable */
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// `no-restricted-syntax` is not additive across flat-config objects - a later
// object replaces the whole list. Keep the shared entries here so the scoped
// override below can re-declare them alongside its own.
const noAssertionSyntaxRules = [
  {
    selector:
      "TSNonNullExpression:not([expression.type='MemberExpression'][expression.property.name='shadowRoot']):not([expression.type='CallExpression'][expression.callee.type='MemberExpression'][expression.callee.property.name='querySelector'])",
    message:
      'Avoid non-null assertion (!). Use safer narrowing, except for shadowRoot access and querySelector(...) results.',
  },
  {
    selector:
      "PropertyDefinition[definite=true]:not(:has(Decorator[expression.callee.name='Event'])):not(:has(Decorator[expression.callee.name='Prop'])):not(:has(Decorator[expression.callee.name='Element'])):not(:has(Decorator[expression.callee.name='Element'])):not(:has(Decorator[expression.callee.name='AttachInternals']))",
    message:
      'Avoid definite assignment assertion (!). Initialize the field or use an allowed decorator field.',
  },
];

// Luxon counts months 1-12 and weekdays 1-7 (Monday = 1), while the name
// arrays from `Info.months()` / `Info.weekdays()` are 0-based. Rather than
// convert between the two bases, the date components carry a `DateTime` for
// every calendar position and derive names by formatting it, so neither base
// is ever written down. Passing a `DateTime` is enforced by the signatures in
// `utils/calendar-units.ts`; these rules cover what types cannot, by banning
// the ways a bare unit number gets manufactured in the first place.
//
// `utils/calendar-units.ts` is deliberately out of scope below: it is the one
// module allowed to touch both bases. Any new date component directory has to
// be added to the `files` list, or it inherits none of this.
const calendarUnitRules = [
  {
    selector: "MemberExpression[property.name='month']",
    message:
      "Don't read Luxon's 1-based .month. Keep the month as a DateTime: compare with hasSame(other, 'month') and render with monthNameOf() from utils/calendar-units.ts.",
  },
  {
    selector: "MemberExpression[property.name='weekday']",
    message:
      "Don't read Luxon's 1-based .weekday. Use weekdayColumnOf() from utils/calendar-units.ts to place a date in a grid column.",
  },
  {
    selector:
      "CallExpression[callee.object.name='Info'][callee.property.name=/^(months|monthsFormat|weekdays|weekdaysFormat)$/]",
    message:
      'Info.months() / Info.weekdays() return 0-based arrays, and indexing one with a Luxon ordinal shifts the calendar by one. Build months with monthsOfYear() and names with monthNameOf() / weekdayNamesFrom() from utils/calendar-units.ts.',
  },
  {
    selector: "NewExpression[callee.name='Date'][arguments.length>=2]",
    message:
      'new Date(year, month, day) takes a 0-based month and resolves in local time. Use monthsOfYear() / dayOfMonth() from utils/calendar-units.ts.',
  },
];

module.exports = [
  {
    ignores: [
      'vitest-setup.ts',
      'vitest.config.ts',
      'stencil.config.ts',
      'playwright.config.ts',
      'playwright-ct.config.ts',
      'src/components.d.ts',
      'scripts/build',
      'scripts/e2e',
    ],
  },
  ...compat.config({
    parserOptions: {
      project: './tsconfig.lint.json',
    },
    extends: [
      'plugin:@stencil-community/recommended',
      'eslint-config-ix/index.js',
    ],
    rules: {
      '@stencil-community/async-methods': 0,
      '@stencil-community/own-props-must-be-private': 0,
      '@stencil-community/own-methods-must-be-private': 0,
      '@stencil-community/strict-boolean-conditions': 0,
      '@stencil-community/ban-default-true': ['error'],
      '@stencil-community/decorators-style': [
        'error',
        { prop: 'inline', method: 'multiline' },
      ],
      'react/jsx-no-bind': 0,
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      'no-restricted-syntax': ['error', ...noAssertionSyntaxRules],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
    },
  }),
  {
    files: [
      'src/components/date-picker/**/*.{ts,tsx}',
      'src/components/date-input/**/*.{ts,tsx}',
      'src/components/date-dropdown/**/*.{ts,tsx}',
      'src/components/datetime-picker/**/*.{ts,tsx}',
      'src/components/datetime-input/**/*.{ts,tsx}',
    ],
    ignores: ['**/test/**', '**/tests/**'],
    rules: {
      'no-restricted-syntax': [
        'error',
        ...noAssertionSyntaxRules,
        ...calendarUnitRules,
      ],
    },
  },
];

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'node:path';
import { RuleTester } from 'eslint';
import * as parser from '@typescript-eslint/parser';
import { afterAll, describe, it } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const rule = require('eslint-config-ix/rules/no-luxon-calendar-ordinals');

const tsconfigRootDir = path.resolve(__dirname, '../..');

RuleTester.afterAll = afterAll;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const ruleTester = new RuleTester({
  languageOptions: {
    parser,
    parserOptions: {
      projectService: {
        allowDefaultProject: ['*.ts'],
      },
      tsconfigRootDir,
    },
  },
});

ruleTester.run('no-luxon-calendar-ordinals', rule, {
  valid: [
    {
      name: 'a .month read on a plain interface is not a Luxon ordinal',
      code: `
        interface YearMonth { year: number; month: number }
        declare const ym: YearMonth;
        ym.month;
      `,
    },
    {
      name: 'a .weekday read on a plain object is not a Luxon ordinal',
      code: `
        declare const opts: { weekday: string };
        opts.weekday;
      `,
    },
    {
      name: 'months()/weekdays() on something other than Luxon Info',
      code: `
        declare const calendar: { months(): string[] };
        calendar.months();
      `,
    },
    {
      name: 'the single-argument Date constructor has no month argument',
      code: `new Date('2024-01-01');`,
    },
    {
      name: 'a shadowed Date is not the global 0-based constructor',
      code: `
        class Date { constructor(_a: number, _b: number) {} }
        new Date(1, 2);
      `,
    },
    {
      name: 'DateTime methods that keep the month as a DateTime',
      code: `
        import { DateTime } from 'luxon';
        declare const d: DateTime;
        d.startOf('month');
      `,
    },
  ],

  invalid: [
    {
      name: 'reading .month off a DateTime',
      code: `
        import { DateTime } from 'luxon';
        declare const d: DateTime;
        d.month;
      `,
      errors: [{ messageId: 'month' }],
    },
    {
      name: 'reading .weekday off a DateTime',
      code: `
        import { DateTime } from 'luxon';
        declare const d: DateTime;
        d.weekday;
      `,
      errors: [{ messageId: 'weekday' }],
    },
    {
      name: 'reading .month off a nullable DateTime',
      code: `
        import { DateTime } from 'luxon';
        declare const d: DateTime | null;
        d?.month;
      `,
      errors: [{ messageId: 'month' }],
    },
    {
      name: 'reading .month through a computed access',
      code: `
        import { DateTime } from 'luxon';
        declare const d: DateTime;
        d['month'];
      `,
      errors: [{ messageId: 'month' }],
    },
    {
      name: 'the 0-based Info name arrays',
      code: `
        import { Info } from 'luxon';
        Info.months();
        Info.weekdaysFormat();
      `,
      errors: [{ messageId: 'infoNameArray' }, { messageId: 'infoNameArray' }],
    },
    {
      name: 'the multi-argument Date constructor',
      code: `new Date(2024, 0, 1);`,
      errors: [{ messageId: 'dateConstructor' }],
    },
  ],
});

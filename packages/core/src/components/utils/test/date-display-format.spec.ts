/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import {
  DateDisplayFormat,
  DateDisplayFormatHost,
} from '../datetime/date-display-format';

const createDisplayFormat = (host: DateDisplayFormatHost) => {
  const dateDisplayFormat = new DateDisplayFormat(host);
  dateDisplayFormat.toText();
  return dateDisplayFormat;
};

describe('DateDisplayFormat', () => {
  describe('toText', () => {
    it('formats the value in displayFormat', () => {
      const dateDisplayFormat = new DateDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.toText()).toBe('99/03/04');
    });

    it('formats locale-dependent tokens using the locale', () => {
      const dateDisplayFormat = new DateDisplayFormat({
        value: '2023/03/05',
        format: 'yyyy/LL/dd',
        displayFormat: 'dd MMMM yyyy',
        locale: 'de',
      });

      expect(dateDisplayFormat.toText()).toBe('05 März 2023');
    });

    it('returns the value unchanged without displayFormat', () => {
      const dateDisplayFormat = new DateDisplayFormat({
        value: '2023/3/5',
        format: 'yyyy/L/d',
      });

      expect(dateDisplayFormat.toText()).toBe('2023/3/5');
    });

    it('returns an invalid or missing value unchanged', () => {
      const host: DateDisplayFormatHost = {
        value: 'not a date',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      };
      const dateDisplayFormat = new DateDisplayFormat(host);

      expect(dateDisplayFormat.toText()).toBe('not a date');

      host.value = undefined;
      expect(dateDisplayFormat.toText()).toBe('');
    });
  });

  describe('toValue', () => {
    it('converts typed text into format', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2024/05/05',
        format: 'yyyy/LL/dd',
        displayFormat: 'dd.LL.yyyy',
      });

      expect(dateDisplayFormat.toValue('10.10.2025')).toBe('2025/10/10');
    });

    it('keeps the century of the value for a two-digit year', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.toValue('98/03/10')).toBe('2098/03/10');
    });

    it.each([
      ['1999/12/31', '00/01/01', '2000/01/01'],
      ['2000/01/01', '99/12/31', '1999/12/31'],
      ['2049/06/15', '99/06/15', '2099/06/15'],
      ['2050/06/15', '00/06/15', '2000/06/15'],
    ])(
      'resolves a two-digit year to the year closest to %s (%s)',
      (value, text, expected) => {
        const dateDisplayFormat = createDisplayFormat({
          value,
          format: 'yyyy/LL/dd',
          displayFormat: 'yy/LL/dd',
        });

        expect(dateDisplayFormat.toValue(text)).toBe(expected);
      }
    );

    it('keeps units which are missing in displayFormat', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04 09:10:11',
        format: 'yyyy/LL/dd HH:mm:ss',
        displayFormat: 'yy/LL/dd HH:mm',
      });

      expect(dateDisplayFormat.toValue('99/03/04 09:15')).toBe(
        '2099/03/04 09:15:11'
      );
    });

    it('clamps the kept day to the typed month', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2024/01/31',
        format: 'yyyy/LL/dd',
        displayFormat: 'LL/yyyy',
      });

      expect(dateDisplayFormat.toValue('02/2024')).toBe('2024/02/29');
    });

    it('keeps the reference while the typed text is incomplete', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.toValue('99/03/')).toBe('99/03/');
      expect(dateDisplayFormat.toValue('99/03/15')).toBe('2099/03/15');
    });

    it('uses the last typed date as reference', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04 09:10:11',
        format: 'yyyy/LL/dd HH:mm:ss',
        displayFormat: 'yy/LL/dd HH:mm',
      });

      expect(dateDisplayFormat.toValue('50/03/04 09:10')).toBe(
        '2050/03/04 09:10:11'
      );
      expect(dateDisplayFormat.toValue('50/03/04 10:10')).toBe(
        '2050/03/04 10:10:11'
      );
    });

    it('parses without merging if there is no valid value', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.toValue('99/03/04')).toBe('1999/03/04');
    });

    it('parses week-based display formats without merging', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: "kkkk-'W'WW",
      });

      expect(dateDisplayFormat.toValue('2024-W02')).toBe('2024/01/08');
    });

    it('returns text unchanged which does not match displayFormat', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2024/05/05',
        format: 'yyyy/LL/dd',
        displayFormat: 'dd.LL.yyyy',
      });

      expect(dateDisplayFormat.toValue('10.10')).toBe('10.10');
    });

    it('returns text unchanged without displayFormat', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2024/05/05',
        format: 'yyyy/L/d',
      });

      expect(dateDisplayFormat.toValue('2024/5/6')).toBe('2024/5/6');
    });

    it('follows changes of displayFormat', () => {
      const host: DateDisplayFormatHost = {
        value: '2099/03/04 09:10:11',
        format: 'yyyy/LL/dd HH:mm:ss',
        displayFormat: 'yy/LL/dd HH:mm',
      };
      const dateDisplayFormat = createDisplayFormat(host);

      expect(dateDisplayFormat.toValue('99/03/04 09:15')).toBe(
        '2099/03/04 09:15:11'
      );

      host.displayFormat = 'dd.LL.yyyy HH:mm:ss';
      expect(dateDisplayFormat.toValue('04.03.2099 09:15:30')).toBe(
        '2099/03/04 09:15:30'
      );
    });
  });

  describe('parseValue', () => {
    it('parses the value with format', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.parseValue('2099/03/04').toISODate()).toBe(
        '2099-03-04'
      );
    });

    it('rejects typed text which only matches format', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.toValue('2065/03/04')).toBe('2065/03/04');
      expect(dateDisplayFormat.isUnparsableText('2065/03/04')).toBe(true);

      const date = dateDisplayFormat.parseValue('2065/03/04');
      expect(date.isValid).toBe(false);
      expect(date.invalidReason).toBe('unparsable');
    });

    it.each(['1965/03/04', '965/03/04', '0065/03/04'])(
      'rejects a year with more than two digits for yy (%s)',
      (text) => {
        const dateDisplayFormat = createDisplayFormat({
          value: '2099/03/04',
          format: 'yyyy/LL/dd',
          displayFormat: 'yy/LL/dd',
        });

        expect(dateDisplayFormat.toValue(text)).toBe(text);
        expect(dateDisplayFormat.parseValue(text).isValid).toBe(false);
      }
    );

    it('accepts a typed two-digit year on a leap day', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2025/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: "yy/LL/dd 'yy'",
      });

      expect(dateDisplayFormat.toValue('24/02/29 yy')).toBe('2024/02/29');
    });

    it('accepts the same text again once it is set as value', () => {
      const host: DateDisplayFormatHost = {
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      };
      const dateDisplayFormat = createDisplayFormat(host);

      dateDisplayFormat.toValue('2065/03/04');
      dateDisplayFormat.toValue('65/03/04');
      expect(dateDisplayFormat.parseValue('2065/03/04').isValid).toBe(true);

      dateDisplayFormat.toValue('2065/03/04');
      host.value = '2065/03/04';
      dateDisplayFormat.toText();
      expect(dateDisplayFormat.parseValue('2065/03/04').isValid).toBe(true);
    });

    it('accepts typed text without displayFormat', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
      });

      dateDisplayFormat.toValue('2065/03/04');
      expect(dateDisplayFormat.parseValue('2065/03/04').isValid).toBe(true);
    });
  });

  describe('isTypedValue', () => {
    it('detects the value of the last typed text until the text is synced', () => {
      const dateDisplayFormat = createDisplayFormat({
        value: '2099/03/04',
        format: 'yyyy/LL/dd',
        displayFormat: 'yy/LL/dd',
      });

      expect(dateDisplayFormat.isTypedValue('2099/03/04')).toBe(false);

      dateDisplayFormat.toValue('99/03/10');
      expect(dateDisplayFormat.isTypedValue('2099/03/10')).toBe(true);
      expect(dateDisplayFormat.isTypedValue('2099/03/11')).toBe(false);

      dateDisplayFormat.toText();
      expect(dateDisplayFormat.isTypedValue('2099/03/10')).toBe(false);
    });

    it('does not treat a missing value as typed', () => {
      const dateDisplayFormat = createDisplayFormat({
        format: 'yyyy/LL/dd',
      });

      expect(dateDisplayFormat.isTypedValue(undefined)).toBe(false);
    });
  });
});

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import {
  LUXON_DEFAULT_DATE_ONLY_FORMAT,
  LUXON_DEFAULT_TIME_ONLY_FORMAT,
  getLuxonDateOnlyFormatMask,
  getLuxonTimeFormatMask,
} from '../luxon-datetime-format-masks';

describe('getLuxonDateOnlyFormatMask', () => {
  it('returns full string when there are no time tokens', () => {
    expect(getLuxonDateOnlyFormatMask('yyyy/LL/dd')).toBe('yyyy/LL/dd');
    expect(getLuxonDateOnlyFormatMask('dd-MM-yyyy')).toBe('dd-MM-yyyy');
  });

  it('strips time suffix with space separator', () => {
    expect(getLuxonDateOnlyFormatMask('yyyy/LL/dd HH:mm:ss')).toBe(
      'yyyy/LL/dd'
    );
    expect(getLuxonDateOnlyFormatMask('dd-MM-yyyy HH:mm:ss')).toBe(
      'dd-MM-yyyy'
    );
    expect(getLuxonDateOnlyFormatMask('yyyy-MM-dd HH:mm')).toBe('yyyy-MM-dd');
  });

  it('strips T literal before time', () => {
    expect(getLuxonDateOnlyFormatMask("yyyy-MM-dd'T'HH:mm:ss")).toBe(
      'yyyy-MM-dd'
    );
  });

  it('uses fallback when prefix is empty', () => {
    expect(getLuxonDateOnlyFormatMask('HH:mm:ss')).toBe(
      LUXON_DEFAULT_DATE_ONLY_FORMAT
    );
    expect(getLuxonDateOnlyFormatMask(' HH:mm:ss', 'custom')).toBe('custom');
  });
});

describe('getLuxonTimeFormatMask', () => {
  it('returns fallback when there are no time tokens', () => {
    expect(getLuxonTimeFormatMask('yyyy/LL/dd')).toBe(
      LUXON_DEFAULT_TIME_ONLY_FORMAT
    );
    expect(getLuxonTimeFormatMask('yyyy/LL/dd', 'HH:mm')).toBe('HH:mm');
  });

  it('returns suffix from first time token', () => {
    expect(getLuxonTimeFormatMask('yyyy/LL/dd HH:mm:ss')).toBe('HH:mm:ss');
    expect(getLuxonTimeFormatMask("yyyy-MM-dd'T'HH:mm:ss")).toBe('HH:mm:ss');
    expect(getLuxonTimeFormatMask('yyyy-MM-dd HH:mm')).toBe('HH:mm');
  });
});

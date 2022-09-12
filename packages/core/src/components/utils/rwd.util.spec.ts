// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { convertToAbbreviationString, convertToRemString } from './rwd.util';
describe('RWD util', () => {
  it('should convert pixel values to REM strings', () => {
    expect(convertToRemString(0)).toBe('0rem');
    expect(convertToRemString(8)).toBe('0.5rem');
    expect(convertToRemString(16)).toBe('1rem');
    expect(convertToRemString(99)).toBe('6.1875rem');
    expect(convertToRemString(-1)).toBe('-0.0625rem');
  });

  it('should return abbreviation string', () => {
    expect(convertToAbbreviationString(999)).toBe('999');
    expect(convertToAbbreviationString(1000)).toBe('1K');
    expect(convertToAbbreviationString(1000000)).toBe('1M');
    expect(convertToAbbreviationString(1000000000)).toBe('1B');
    expect(convertToAbbreviationString(1000000000000)).toBe('1t');
    expect(convertToAbbreviationString(1000000000000000)).toBe('1q');
    expect(convertToAbbreviationString(NaN)).toBe('');
  });
});

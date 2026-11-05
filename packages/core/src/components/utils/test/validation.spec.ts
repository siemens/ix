/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import { isOnlyValueMissing } from '../input/validation';

const createRequiredInput = () => {
  const input = document.createElement('input');
  input.required = true;
  return input;
};

describe('isOnlyValueMissing', () => {
  it('is true for an empty required field', () => {
    const input = createRequiredInput();

    expect(isOnlyValueMissing(input.validity)).toBe(true);
  });

  it('is false when a custom error is set as well', () => {
    const input = createRequiredInput();
    input.setCustomValidity('Server error');

    expect(input.validity.valueMissing).toBe(true);
    expect(isOnlyValueMissing(input.validity)).toBe(false);
  });

  it('is false for a filled field', () => {
    const input = createRequiredInput();
    input.value = 'value';

    expect(isOnlyValueMissing(input.validity)).toBe(false);
  });
});

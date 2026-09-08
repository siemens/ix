/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { expect } from 'vitest';

export function expectDefined<T>(value: T | null | undefined): T {
  expect(value).toBeDefined();

  if (value === null || value === undefined) {
    throw new Error('Expected value to be defined');
  }

  return value;
}

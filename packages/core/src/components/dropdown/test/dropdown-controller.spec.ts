/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import {
  DropdownItemWrapper,
  hasDropdownItemWrapperImplemented,
} from '../dropdown-controller';

describe('dropdown-controller', () => {
  it('check wrapper interface implementation', () => {
    const noWrapperElement = {} as DropdownItemWrapper;
    const wrapperElement = {
      getDropdownItemElement: () => Promise.resolve(undefined),
    } as unknown as DropdownItemWrapper;

    expect(hasDropdownItemWrapperImplemented(null)).toBe(false);
    expect(hasDropdownItemWrapperImplemented(noWrapperElement)).toBe(false);
    expect(hasDropdownItemWrapperImplemented(wrapperElement)).toBe(true);
  });
});

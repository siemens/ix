/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  DropdownItemWrapper,
  hasDropdownItemWrapperImplemented,
} from '../dropdown-controller';

describe('dropdown-controller', () => {
  it('check wrapper interface implementation', () => {
    const noWrapperElement = {} as DropdownItemWrapper;
    const wrapperElement = {
      getDropdownItemElement: () => {},
    } as DropdownItemWrapper;

    expect(hasDropdownItemWrapperImplemented(null)).toBeFalsy();
    expect(hasDropdownItemWrapperImplemented(noWrapperElement)).toBeFalsy();
    expect(hasDropdownItemWrapperImplemented(wrapperElement)).toBeTruthy();
  });
});

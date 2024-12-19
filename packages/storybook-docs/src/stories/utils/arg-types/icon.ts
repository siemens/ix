/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { icons } from '@siemens/ix-icons/dist/sample.json';

export function icon(name: string, allowEmptyIcon = false): any {
  let iconOptions = icons;

  if (allowEmptyIcon) {
    iconOptions = ['', ...iconOptions];
  }

  return {
    name: `${name}*`,
    control: { type: 'select' },
    options: iconOptions,
  };
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Button } from './button';

export function dispatchFormEvents(button: Button) {
  const { type, hostElement } = button;
  if (type === 'submit') {
    const form = hostElement.closest('form');

    if (form) {
      form.dispatchEvent(new Event('submit'));
    }
  }
}

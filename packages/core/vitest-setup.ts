/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@testing-library/jest-dom/vitest';
import { defineCustomElements } from './loader';

defineCustomElements(window);

Object.defineProperty(HTMLFormElement.prototype, 'requestSubmit', {
  configurable: true,
  value(submitter?: HTMLElement) {
    if (submitter) {
      submitter.dispatchEvent(new Event('click', { bubbles: true }));
    }

    this.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    );
  },
});

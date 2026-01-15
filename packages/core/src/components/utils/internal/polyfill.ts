/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getComposedPath } from '../shadow-dom';
import { getFocusUtilities } from './mixins/global-focus-handling.mixin';

let originalFocus: typeof HTMLElement.prototype.focus | null = null;
let focusPolyfillInstalled = false;

export const patchFocusMethod = () => {
  if (focusPolyfillInstalled) {
    return;
  }

  if (!originalFocus && typeof HTMLElement !== 'undefined') {
    originalFocus = HTMLElement.prototype.focus;
  }

  if (typeof HTMLElement !== 'undefined') {
    HTMLElement.prototype.focus = function (
      this: HTMLElement,
      options?: FocusOptions
    ) {
      const composedPath = getComposedPath(this);
      const focusableElements = composedPath.filter((el) =>
        el.classList.contains('ix-focusable')
      );
      getFocusUtilities()?.setFocus(focusableElements);
      originalFocus?.call(this, options);
    };
  }

  focusPolyfillInstalled = true;
};

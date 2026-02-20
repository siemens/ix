/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { focusableQueryString, queryElements } from './focus-utilities';

export interface FocusTrapResult {
  destroy: () => void;
}

export type FocusTrapOptions = {
  trapFocusInShadowDom?: boolean;
};

export const addFocusTrap = (
  element?: HTMLElement,
  config?: FocusTrapOptions
): FocusTrapResult => {
  const ref = element ? element.shadowRoot! : document;
  const root = element ?? document.body;

  const onKeydown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key === 'Tab') {
      const focusableElements = queryElements(
        config?.trapFocusInShadowDom ? root.shadowRoot! : root,
        focusableQueryString
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = ref.activeElement || document.activeElement;

      if (keyboardEvent.shiftKey) {
        if (activeElement === firstElement) {
          keyboardEvent.preventDefault();
          lastElement.focus();
        }
      } else {
        if (activeElement === lastElement) {
          keyboardEvent.preventDefault();
          firstElement.focus();
        }
      }

      event.stopImmediatePropagation();
    }
  };

  ref.addEventListener('keydown', onKeydown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
  };

  return {
    destroy,
  };
};

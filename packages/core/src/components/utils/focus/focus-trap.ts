/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isMakeRef, MakeRef } from '../make-ref';
import { focusableQueryString, queryElements } from './focus-utilities';

export interface FocusTrapResult {
  destroy: () => void;
}

export const TRAP_FOCUS_EXCLUDE_ATTRIBUTE = 'data-ix-focus-trap-exclude';

export type FocusTrapOptions = {
  targetElement?: HTMLElement | MakeRef<any>;
  trapFocusInShadowDom?: boolean;
  excludeElements?: boolean;
};

export const addFocusTrap = async (
  element: HTMLElement,
  options?: FocusTrapOptions
): Promise<FocusTrapResult> => {
  let ref = element;

  if (options?.targetElement) {
    if (options.targetElement instanceof HTMLElement) {
      ref = options.targetElement;
    } else if (isMakeRef(options.targetElement)) {
      ref = await options.targetElement.waitForCurrent();
    }
  }

  const onKeydown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key === 'Tab') {
      const focusableElements = queryElements(
        options?.trapFocusInShadowDom ? ref.shadowRoot! : ref,
        focusableQueryString
      );

      if (focusableElements.length === 0) {
        return;
      }

      if (options?.excludeElements) {
        focusableElements.forEach((element) => {
          if (element.hasAttribute(TRAP_FOCUS_EXCLUDE_ATTRIBUTE)) {
            const index = focusableElements.indexOf(element);
            if (index !== -1) {
              focusableElements.splice(index, 1);
            }
          }
        });
      }

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      let activeElement = document.activeElement;

      if (ref instanceof HTMLElement && ref.shadowRoot) {
        activeElement = ref.shadowRoot.activeElement || activeElement;
      }

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

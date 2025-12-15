/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Originally based on Ionic's focus-visible utility.
 * Fork of https://github.com/ionic-team/ionic-framework/blob/c37e2a5d9e765cf48d768061c9d453a13b187e13/core/src/utils/focus-visible.ts
 */

const IX_FOCUSED = 'ix-focused';
const IX_FOCUSABLE = 'ix-focusable';
const FOCUS_KEYS = new Set([
  'Tab',
  'ArrowDown',
  'Space',
  'Escape',
  ' ',
  'Shift',
  'Enter',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'Home',
  'End',
]);

export interface FocusVisibleUtility {
  destroy: () => void;
  setFocus: (elements: Element[]) => void;
  hasKeyboardMode: () => boolean;
}

export function queryElements(
  dropdownElement: HTMLElement | undefined,
  query: string
) {
  if (!dropdownElement) {
    return [];
  }

  let items: HTMLElement[] = [];

  // Collect items from slots if they exist
  if (dropdownElement.querySelectorAll('slot').length > 0) {
    const slotElements = Array.from(dropdownElement.querySelectorAll('slot'));
    items = slotElements.flatMap((slot) =>
      Array.from(
        slot.assignedElements({ flatten: true }) as HTMLElement[]
      ).flatMap((el) => {
        // Check if the assigned element itself matches the query
        if (el?.matches(query)) {
          return [el];
        }
        // Otherwise, query its children
        return Array.from(el.querySelectorAll(query));
      })
    );
  }

  items = [
    ...items,
    ...Array.from(dropdownElement.querySelectorAll<HTMLElement>(query)),
  ];

  return items;
}

export const addFocusVisibleListener = (
  rootEl?: HTMLElement,
  config?: {
    trapFocus?: boolean;
  }
): FocusVisibleUtility => {
  const trapFocus = config?.trapFocus ?? false;
  let currentFocus: Element[] = [];
  let keyboardMode = true;

  const ref = rootEl ? rootEl.shadowRoot! : document;
  const root = rootEl ?? document.body;

  const setFocus = (elements: Element[]) => {
    currentFocus.forEach((el) => el.classList.remove(IX_FOCUSED));
    elements.forEach((el) => el.classList.add(IX_FOCUSED));
    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;
    keyboardMode = FOCUS_KEYS.has(keyboardEvent.key);
    if (!keyboardMode) {
      setFocus([]);
    }

    if (trapFocus && keyboardEvent.key === 'Tab') {
      const focusableElements = queryElements(root, focusableQueryString);

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = ref.activeElement || document.activeElement;

      if (keyboardEvent.shiftKey) {
        if (activeElement === firstElement) {
          keyboardEvent.preventDefault();
          focusElement(lastElement as HTMLElement);
        }
      } else {
        if (activeElement === lastElement) {
          keyboardEvent.preventDefault();
          focusElement(firstElement as HTMLElement);
        }
      }

      event.stopImmediatePropagation();
    }
  };

  const onFocusin = (ev: Event) => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter((el): el is Element => {
        return el instanceof Element && el.classList.contains(IX_FOCUSABLE);
      }) as Element[];
      setFocus(toFocus);
    }
  };

  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown, { passive: true });
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return {
    destroy,
    setFocus,
    hasKeyboardMode: () => keyboardMode,
  };
};

export const focusFirstDescendant = <
  R extends HTMLElement,
  T extends HTMLElement,
>(
  ref: R,
  fallbackElement?: T
) => {
  const inputs = queryElements(ref, focusableQueryString);
  const firstInput = inputs.length > 0 ? inputs[0] : null;

  focusElementInContext(firstInput, fallbackElement ?? ref);
};

export const focusLastDescendant = <
  R extends HTMLElement,
  T extends HTMLElement,
>(
  ref: R,
  fallbackElement?: T
) => {
  const inputs = queryElements(ref, focusableQueryString);
  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;

  focusElementInContext(lastInput, fallbackElement ?? ref);
};

/**
 * Checks if an element is part of a custom element's shadow root
 * and returns the host element if it is, otherwise returns the element itself.
 */
export const getHostElement = (element: HTMLElement): HTMLElement => {
  const rootNode = element.getRootNode();
  if (rootNode instanceof ShadowRoot && rootNode.host instanceof HTMLElement) {
    return rootNode.host;
  }
  return element;
};

export const focusElement = (element: HTMLElement) => {
  /**
   * If the focus element is inside a shadow DOM, the host element is focused and does not trigger any
   * focusin events. To workaround this, we manually dispatch a focusin event on the shadow DOM element.
   */
  element!.dispatchEvent(
    new Event('focusin', {
      bubbles: true,
      composed: true,
      cancelable: true,
    })
  );
  element.focus();
};

export const focusElementInContext = <T extends HTMLElement>(
  hostToFocus: HTMLElement | null | undefined,
  fallbackElement: T
) => {
  let elementToFocus = hostToFocus;

  const shadowRoot = hostToFocus?.shadowRoot;
  if (shadowRoot) {
    elementToFocus =
      shadowRoot.querySelector<HTMLElement>(focusableQueryString) ||
      hostToFocus;
  }

  if (elementToFocus) {
    focusElement(elementToFocus);
  } else {
    fallbackElement.focus();
  }
};

export const focusableQueryString = `[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), .ix-focusable:not([hidden]):not([disabled]), .ix-focusable[disabled="false"]:not([hidden]), ${[
  'ix-dropdown-item',
  'ix-select-item',
]
  .map((tag) => `${tag}:not([hidden]):not([disabled])`)
  .join(', ')}`;

/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const IX_FOCUSED = 'ix-focused';
const IX_FOCUSABLE = 'ix-focusable';
const FOCUS_KEYS = [
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
];

export interface FocusVisibleUtility {
  destroy: () => void;
  setFocus: (elements: Element[]) => void;
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
        if (el.matches && el.matches(query)) {
          return [el];
        }
        // Otherwise, query its children
        return Array.from(
          el.querySelectorAll(query) as NodeListOf<HTMLElement>
        );
      })
    );
  } else {
    // No slots, query directly on dropdownElement
    items = Array.from(
      dropdownElement.querySelectorAll(query) as NodeListOf<HTMLElement>
    );
  }

  return items;
}

export const addFocusVisibleListener = (
  rootEl?: HTMLElement
): FocusVisibleUtility => {
  let currentFocus: Element[] = [];
  let keyboardMode = true;

  const ref = rootEl ? rootEl.shadowRoot! : document;
  const root = rootEl ? rootEl : document.body;

  const setFocus = (elements: Element[]) => {
    currentFocus.forEach((el) => el.classList.remove(IX_FOCUSED));
    elements.forEach((el) => el.classList.add(IX_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  const onKeydown = (ev: Event) => {
    keyboardMode = FOCUS_KEYS.includes((ev as KeyboardEvent).key);
    if (!keyboardMode) {
      setFocus([]);
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
  };
};

/**
 * Focuses the first descendant in a context
 * that can receive focus. If none exists,
 * a fallback element will be focused.
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 *
 * If no fallback is specified then we focus the container itself.
 */
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

/**
 * Focuses the last descendant in a context
 * that can receive focus. If none exists,
 * a fallback element will be focused.
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 *
 * If no fallback is specified then we focus the container itself.
 */
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
 * Focuses a particular element in a context. If the element
 * doesn't have anything focusable associated with it then
 * a fallback element will be focused.
 *
 * This fallback is typically an ancestor
 * container such as a menu or overlay so focus does not
 * leave the container we are trying to trap focus in.
 * This should be used instead of the focus() method
 * on most elements because the focusable element
 * may not be the host element.
 *
 * For example, if an ion-button should be focused
 * then we should actually focus the native <button>
 * element inside of ion-button's shadow root, not
 * the host element itself.
 */
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
    elementToFocus.focus();
  } else {
    fallbackElement.focus();
  }
};

export const focusableQueryString =
  '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), .ix-focusable:not([hidden]):not([disabled]), .ix-focusable[disabled="false"]:not([hidden])';

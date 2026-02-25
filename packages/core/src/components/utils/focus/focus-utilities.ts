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

export const IX_FOCUS_VISIBLE_ACTIVE = 'ix-focused';
export const IX_FOCUS_VISIBLE = 'ix-focusable';
export const FOCUS_KEYS = new Set([
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

export function queryElements(
  dropdownElement: HTMLElement | ShadowRoot | undefined,
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

export type FocusVisibleConfig = {
  trapFocus?: boolean;
  trapFocusInShadowDom?: boolean;
};

export type FocusOptions = {
  focusCheckedItem?: boolean;
};

export const focusFirstDescendant = <
  R extends HTMLElement,
  T extends HTMLElement,
>(
  ref: R,
  fallbackElement?: T,
  options?: FocusOptions
) => {
  console.log('focusFirstDescendant called with options:', options);
  if (options?.focusCheckedItem) {
    const checkedQueryString = buildFocusableQueryString('[checked]');
    const checkedElements = queryElements(ref, checkedQueryString);

    if (checkedElements.length > 0) {
      focusElementInContext(checkedElements[0], fallbackElement ?? ref);
      return;
    }
  }

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
    focusElement(fallbackElement);
  }
};

export const focusElement = (element: HTMLElement | null | undefined) => {
  if (!element) {
    return;
  }

  element.focus();
};

const focusableBase = ':not([tabindex^="-"]):not([hidden]):not([disabled])';

const customTags = ['ix-dropdown-item', 'ix-select-item'];

const buildCustom = (additionalSelector: string) =>
  customTags
    .map((tag) => `${tag}${focusableBase}${additionalSelector}`)
    .join(', ');

export const focusableQueryString = `[tabindex]${focusableBase}, ${buildCustom('')}`;

export const buildFocusableQueryString = (additionalSelector = '') =>
  `[tabindex]${focusableBase}${additionalSelector}, ${buildCustom(additionalSelector)}`;

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

const getQueryRoot = (
  dropdownElement: HTMLElement | ShadowRoot,
  includeShadowDom: boolean
) =>
  includeShadowDom && dropdownElement instanceof HTMLElement
    ? (dropdownElement.shadowRoot ?? dropdownElement)
    : dropdownElement;

const collectSlotMatches = (slot: HTMLSlotElement, query: string) => {
  const slotted: HTMLElement[] = [];

  for (const assigned of slot.assignedElements({
    flatten: true,
  }) as HTMLElement[]) {
    if (assigned.matches(query)) {
      slotted.push(assigned);
      continue;
    }

    slotted.push(...Array.from(assigned.querySelectorAll<HTMLElement>(query)));
  }

  return slotted;
};

const findInsertIndex = (
  slot: HTMLSlotElement,
  elements: HTMLElement[]
): number => {
  for (let i = 0; i < elements.length; i++) {
    if (
      slot.compareDocumentPosition(elements[i]) &
      Node.DOCUMENT_POSITION_FOLLOWING
    ) {
      return i;
    }
  }

  return elements.length;
};

export function queryElements(
  dropdownElement: HTMLElement | ShadowRoot | null | undefined,
  query: string,
  includeShadowDom = false
) {
  if (!dropdownElement) {
    return [];
  }

  const root = getQueryRoot(dropdownElement, includeShadowDom);

  const fromRoot = Array.from(root.querySelectorAll<HTMLElement>(query));

  const slots = Array.from(root.querySelectorAll<HTMLSlotElement>('slot'));
  if (slots.length === 0) {
    return fromRoot;
  }

  const result: HTMLElement[] = [...fromRoot];

  // Process slots from last to first so that earlier splice indices stay valid.
  for (let i = slots.length - 1; i >= 0; i--) {
    const slot = slots[i];
    const slotted = collectSlotMatches(slot, query);

    if (slotted.length === 0) {
      continue;
    }

    const insertAt = findInsertIndex(slot, result);

    result.splice(insertAt, 0, ...slotted);
  }

  return result;
}

export type DomFocusOptions = Parameters<HTMLElement['focus']>[0];

/** `focusVisible` is supported in Firefox 104+; omitted from some TypeScript DOM typings. */
export type IxFocusOptions = DomFocusOptions & { focusVisible?: boolean };

export function tryFocusElement(
  element: Element | HTMLElement,
  options?: IxFocusOptions
) {
  if (!(element instanceof HTMLElement)) {
    return;
  }
  try {
    element.focus(options);
  } catch {}
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
  fallbackElement: T,
  options?: IxFocusOptions
) => {
  let elementToFocus = hostToFocus;

  const shadowRoot = hostToFocus?.shadowRoot;
  if (shadowRoot) {
    elementToFocus =
      shadowRoot.querySelector<HTMLElement>(focusableQueryString) ||
      hostToFocus;
  }

  if (elementToFocus) {
    tryFocusElement(elementToFocus, options);
  } else {
    tryFocusElement(fallbackElement, options);
  }
};

export const focusElement = (
  element: HTMLElement | null | undefined,
  options?: DomFocusOptions
) => {
  if (!element) {
    return;
  }

  element.focus(options);
};

const focusableBase = ':not([tabindex^="-"]):not([hidden]):not([disabled])';

const customTags = ['ix-dropdown-item', 'ix-select-item'];

const focusableNativeHtml = [
  'button',
  'a[href]',
  'area[href]',
  'audio',
  'input',
  'select',
  'textarea',
  'iframe',
  'object',
  'embed',
  'video',
  '[contenteditable]',
];

const buildCustom = (additionalSelector: string) =>
  customTags
    .map((tag) => `${tag}${focusableBase}${additionalSelector}`)
    .join(', ');

const buildNative = (additionalSelector: string) =>
  focusableNativeHtml
    .map((tag) => `${tag}${focusableBase}${additionalSelector}`)
    .join(', ');

export const focusableQueryString = `[tabindex]${focusableBase}, ${buildCustom('')}, ${buildNative('')}`;

export const buildFocusableQueryString = (additionalSelector = '') =>
  `[tabindex]${focusableBase}${additionalSelector}, ${buildCustom(additionalSelector)}, ${buildNative(additionalSelector)}`;

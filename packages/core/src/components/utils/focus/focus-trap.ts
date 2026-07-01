/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isMakeRef, MakeRef } from '../make-ref';
import {
  focusableQueryString,
  focusElementInContext,
  IxFocusOptions,
  queryElements,
  tryFocusElement,
} from './focus-utilities';

export interface FocusTrapResult {
  destroy: () => void;
}

export const TRAP_FOCUS_EXCLUDE_ATTRIBUTE = 'data-ix-focus-trap-exclude';
export const TRAP_FOCUS_INCLUDE_ATTRIBUTE = 'data-ix-focus-trap-include';

const POPOVER_TAG = 'IX-POPOVER';
const POPOVER_HEADER_TAG = 'IX-POPOVER-HEADER';

export type FocusTrapOptions = {
  targetElement?: HTMLElement | MakeRef<any>;
  trapFocusInShadowDom?: boolean | 'both';
  excludeElements?: boolean;
  /** Capture Tab on `document` (popover in ancestor shadow roots / top layer). */
  listenOnDocument?: boolean;
  /** Skip handling when another overlay owns focus (nested / sibling popover). */
  shouldDeferTabTrap?: (trapHost: HTMLElement) => boolean;
};

const focusTrapQuery = `${focusableQueryString}, [${TRAP_FOCUS_INCLUDE_ATTRIBUTE}]`;

const mergeUniqueInDocumentOrder = (
  ...lists: HTMLElement[][]
): HTMLElement[] => {
  const unique: HTMLElement[] = [];
  const seen = new Set<HTMLElement>();

  for (const list of lists) {
    for (const element of list) {
      if (!seen.has(element)) {
        seen.add(element);
        unique.push(element);
      }
    }
  }

  return unique.sort((a, b) => {
    const position = a.compareDocumentPosition(b);

    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    }

    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    }

    return 0;
  });
};

export const getDeepActiveElement = (): Element | null => {
  let active: Element | null = document.activeElement;

  while (active) {
    if (active instanceof HTMLElement && active.shadowRoot?.activeElement) {
      const shadowActive = active.shadowRoot.activeElement;

      if (shadowActive !== active) {
        active = shadowActive;
        continue;
      }
    }

    const root = active.getRootNode();

    if (
      root instanceof ShadowRoot &&
      root.activeElement &&
      root.activeElement !== active
    ) {
      active = root.activeElement;
      continue;
    }

    break;
  }

  return active;
};

const resolveFocusTrapActiveElement = (
  trapHost: HTMLElement,
  focusableElements: HTMLElement[]
): Element | null => {
  let activeElement: Element | null = getDeepActiveElement();

  if (findActiveFocusableIndex(activeElement, focusableElements) !== -1) {
    if (
      activeElement instanceof HTMLElement &&
      activeElement.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE) &&
      activeElement.shadowRoot?.activeElement
    ) {
      const includedActive = activeElement.shadowRoot.activeElement;
      if (findActiveFocusableIndex(includedActive, focusableElements) !== -1) {
        return includedActive;
      }
    }

    return activeElement;
  }

  const shadowActive = trapHost.shadowRoot?.activeElement;
  if (
    shadowActive instanceof HTMLElement &&
    findActiveFocusableIndex(shadowActive, focusableElements) !== -1
  ) {
    return shadowActive;
  }

  return activeElement;
};

export function findActiveFocusableIndex(
  active: Element | null,
  focusableElements: HTMLElement[]
): number {
  if (!(active instanceof HTMLElement)) {
    return -1;
  }

  const directIndex = focusableElements.indexOf(active);
  if (directIndex !== -1) {
    return directIndex;
  }

  for (let index = 0; index < focusableElements.length; index++) {
    const candidate = focusableElements[index];

    if (candidate.shadowRoot?.contains(active)) {
      return index;
    }

    const activeRoot = active.getRootNode();
    if (activeRoot instanceof ShadowRoot && activeRoot.host === candidate) {
      return index;
    }

    if (candidate.contains(active)) {
      return index;
    }
  }

  return -1;
}

export function isFocusWithinTrapHost(
  element: Element,
  trapHost: HTMLElement
): boolean {
  let current: Element | null = element;

  while (current) {
    if (current === trapHost) {
      return true;
    }

    const root = current.getRootNode();
    if (root instanceof ShadowRoot) {
      current = root.host;
      continue;
    }

    current = current.parentElement;
  }

  return false;
}

const isOpenPopoverHost = (host: HTMLElement): boolean => {
  if (host.classList.contains('visible')) {
    return true;
  }

  const dialog = host.shadowRoot?.querySelector('dialog');
  return dialog?.matches(':popover-open') ?? false;
};

const isNestedOpenPopoverLayer = (
  element: HTMLElement,
  trapHost: HTMLElement
): boolean => {
  const ownerPopover = getPopoverHostForElement(element);

  return (
    ownerPopover !== undefined &&
    ownerPopover !== trapHost &&
    isOpenPopoverHost(ownerPopover)
  );
};

export function getPopoverHostForElement(
  element: Element
): HTMLElement | undefined {
  let current: Element | null = element;

  while (current) {
    if (current instanceof HTMLElement && current.tagName === POPOVER_TAG) {
      return current;
    }

    const root = current.getRootNode();
    if (root instanceof ShadowRoot) {
      current = root.host;
      continue;
    }

    current = current.parentElement;
  }

  return undefined;
}

export function isWithinInertSubtree(element: Element): boolean {
  let current: Node | null = element;

  while (current) {
    if (current instanceof HTMLElement && current.inert) {
      return true;
    }

    if (current instanceof ShadowRoot) {
      current = current.host;
      continue;
    }

    current = current.parentNode;
  }

  return false;
}

function shouldExcludeFromFocusTrap(
  element: HTMLElement,
  trapHost: HTMLElement
): boolean {
  if (isWithinInertSubtree(element)) {
    return true;
  }

  const ownerPopover = getPopoverHostForElement(element);
  if (!ownerPopover || ownerPopover === trapHost) {
    return false;
  }

  return true;
}

/** CSS-hidden controls can match the focusable query but are not in tab order. */
function isHiddenFromTabOrder(element: HTMLElement): boolean {
  const { display, visibility } = getComputedStyle(element);

  return display === 'none' || visibility === 'hidden';
}

/** Drops focusables inside closed or nested child popovers (not tabbable in the active layer). */
export function filterFocusTrapFocusables(
  focusableElements: HTMLElement[],
  trapHost: HTMLElement
): HTMLElement[] {
  return focusableElements.filter(
    (element) => !shouldExcludeFromFocusTrap(element, trapHost)
  );
}

function expandFocusTrapIncludes(
  focusableElements: HTMLElement[],
  options?: FocusTrapOptions
): void {
  const useBoth = options?.trapFocusInShadowDom === 'both';

  for (let index = 0; index < focusableElements.length; index++) {
    const includeElement = focusableElements[index];

    if (!includeElement.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE)) {
      continue;
    }

    const includedFocusableElements = queryElements(
      useBoth ||
        (options?.trapFocusInShadowDom === true && includeElement.shadowRoot)
        ? (includeElement.shadowRoot ?? includeElement)
        : includeElement,
      focusableQueryString,
      useBoth
    ).filter(
      (element) => element !== includeElement && !isHiddenFromTabOrder(element)
    );

    for (const includedElement of includedFocusableElements) {
      const duplicateIndex = focusableElements.indexOf(includedElement);
      if (duplicateIndex !== -1) {
        focusableElements.splice(duplicateIndex, 1);
        if (duplicateIndex < index) {
          index--;
        }
      }
    }

    focusableElements.splice(index, 1, ...includedFocusableElements);
    index += includedFocusableElements.length - 1;
  }
}

export function getFocusTrapFocusables(
  ref: HTMLElement,
  options?: FocusTrapOptions
): HTMLElement[] {
  const useBoth = options?.trapFocusInShadowDom === 'both';
  let focusableElements: HTMLElement[];

  if (useBoth) {
    const fromShadow = ref.shadowRoot
      ? queryElements(ref.shadowRoot, focusTrapQuery, false)
      : [];
    const fromLight = queryElements(ref, focusTrapQuery, false);
    focusableElements = mergeUniqueInDocumentOrder(fromShadow, fromLight);
  } else {
    const focusTrapRoot =
      options?.trapFocusInShadowDom === true ? ref.shadowRoot : ref;
    focusableElements = queryElements(focusTrapRoot, focusTrapQuery, useBoth);
  }

  expandFocusTrapIncludes(focusableElements, options);

  const filtered = filterFocusTrapFocusables(focusableElements, ref).filter(
    (element) => !isHiddenFromTabOrder(element)
  );

  if (!options?.excludeElements) {
    return filtered;
  }

  return filtered.filter(
    (element) => !element.hasAttribute(TRAP_FOCUS_EXCLUDE_ATTRIBUTE)
  );
}

function isHeaderFocusable(
  element: HTMLElement,
  trapHost: HTMLElement
): boolean {
  let current: Element | null = element;

  while (current && current !== trapHost) {
    if (
      current instanceof HTMLElement &&
      current.tagName === POPOVER_HEADER_TAG
    ) {
      return true;
    }

    const root = current.getRootNode();
    if (root instanceof ShadowRoot) {
      current = root.host;
      continue;
    }

    current = current.parentElement;
  }

  return false;
}

/** Focus the first content control; falls back to the header close when content has none. */
export function focusFirstFocusTrapElement(
  ref: HTMLElement,
  options?: FocusTrapOptions,
  focusOptions?: IxFocusOptions
): void {
  const focusableElements = getFocusTrapFocusables(ref, options);
  const contentFirst = focusableElements.find(
    (element) => !isHeaderFocusable(element, ref)
  );
  const target = contentFirst ?? focusableElements[0];

  focusElementInContext(target ?? null, ref, focusOptions);
}

const resolveFocusTrapElement = async (
  target: HTMLElement | MakeRef<any>
): Promise<HTMLElement> => {
  if (target instanceof HTMLElement) {
    return target;
  }

  if (isMakeRef(target)) {
    return target.waitForCurrent();
  }

  throw new Error('Invalid focus trap element reference');
};

export const addFocusTrap = async (
  element: HTMLElement,
  options?: FocusTrapOptions
): Promise<FocusTrapResult> => {
  const trapHost = options?.targetElement
    ? await resolveFocusTrapElement(options.targetElement)
    : element;

  let listenerTarget: EventTarget = element;

  if (options?.listenOnDocument) {
    listenerTarget = document;
  } else if (options?.targetElement) {
    listenerTarget = trapHost;
  }

  const onKeydown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key !== 'Tab') {
      return;
    }

    if (options?.listenOnDocument) {
      if (options.shouldDeferTabTrap?.(trapHost)) {
        return;
      }

      const deepActive = getDeepActiveElement();

      if (
        deepActive instanceof HTMLElement &&
        isNestedOpenPopoverLayer(deepActive, trapHost)
      ) {
        return;
      }
    }

    const focusableElements = getFocusTrapFocusables(trapHost, options);

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = resolveFocusTrapActiveElement(
      trapHost,
      focusableElements
    );

    const activeIndex = findActiveFocusableIndex(
      activeElement,
      focusableElements
    );

    let handled = false;

    if (activeIndex === -1) {
      return;
    }

    if (keyboardEvent.shiftKey) {
      if (activeIndex === 0) {
        keyboardEvent.preventDefault();
        tryFocusElement(lastElement);
        handled = true;
      }
    } else if (activeIndex === focusableElements.length - 1) {
      keyboardEvent.preventDefault();
      tryFocusElement(firstElement);
      handled = true;
    }

    if (handled) {
      event.stopImmediatePropagation();
    }
  };

  listenerTarget.addEventListener('keydown', onKeydown);

  const destroy = () => {
    listenerTarget.removeEventListener('keydown', onKeydown);
  };

  return {
    destroy,
  };
};

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

/** Drops focusables inside closed or nested child popovers (not tabbable in the active layer). */
export function filterFocusTrapFocusables(
  focusableElements: HTMLElement[],
  trapHost: HTMLElement
): HTMLElement[] {
  return focusableElements.filter(
    (element) => !shouldExcludeFromFocusTrap(element, trapHost)
  );
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
        ? includeElement.shadowRoot ?? includeElement
        : includeElement,
      focusableQueryString,
      useBoth
    ).filter((element) => element !== includeElement);

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
  const focusTrapRoot =
    options?.trapFocusInShadowDom === true ? ref.shadowRoot : ref;
  const focusableElements = queryElements(
    focusTrapRoot,
    `${focusableQueryString}, [${TRAP_FOCUS_INCLUDE_ATTRIBUTE}]`,
    useBoth
  );

  expandFocusTrapIncludes(focusableElements, options);

  const filtered = filterFocusTrapFocusables(focusableElements, ref);

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
  options?: FocusTrapOptions
): void {
  const focusableElements = getFocusTrapFocusables(ref, options);
  const contentFirst = focusableElements.find(
    (element) => !isHeaderFocusable(element, ref)
  );
  const target = contentFirst ?? focusableElements[0];

  focusElementInContext(target ?? null, ref);
}

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

    if (keyboardEvent.key !== 'Tab') {
      return;
    }

    const focusableElements = getFocusTrapFocusables(ref, options);

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    let activeElement: Element | null = document.activeElement;

    if (ref instanceof HTMLElement && ref.shadowRoot) {
      activeElement = ref.shadowRoot.activeElement || activeElement;
    }

    if (
      activeElement instanceof HTMLElement &&
      activeElement.hasAttribute(TRAP_FOCUS_INCLUDE_ATTRIBUTE) &&
      activeElement.shadowRoot?.activeElement
    ) {
      activeElement = activeElement.shadowRoot.activeElement;
    }

    const activeIndex = findActiveFocusableIndex(
      activeElement,
      focusableElements
    );

    if (activeIndex === -1) {
      return;
    }

    if (keyboardEvent.shiftKey) {
      if (activeIndex === 0) {
        keyboardEvent.preventDefault();
        tryFocusElement(lastElement);
      }
    } else if (activeIndex === focusableElements.length - 1) {
      keyboardEvent.preventDefault();
      tryFocusElement(firstElement);
    }

    event.stopImmediatePropagation();
  };

  ref.addEventListener('keydown', onKeydown, true);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown, true);
  };

  return {
    destroy,
  };
};

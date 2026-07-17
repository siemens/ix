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
 * Fork of https://github.com/ionic-team/ionic-framework/blob/c37e2a5d9e765cf48d768061c9d453a13b187e13/core/src/utils/focus-trap.ts
 */

import { Build } from '@stencil/core';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import {
  focusElement,
  IX_FOCUS_VISIBLE_ACTIVE,
  queryElements,
} from '../utils/focus/focus-utilities';

// TODO: Remove valid elements, all elements with ix-focusable should be considered
const VALID_FOCUS_ELEMENTS = [
  'ix-dropdown-item',
  'ix-select-item',
  'ix-menu-item',
  'ix-menu-category',
];

/**
 * Opt-in marker attribute that lets arbitrary focusable elements (e.g. a native
 * `<button>`) participate in the roving-tabindex navigation of a dropdown.
 *
 * Add it to any element that should become an arrow-navigable roving item:
 * `<button data-ix-roving-item>`. Native controls keep their own activation
 * (Enter / Space fire a real click), so no `aria-activedescendant` or synthetic
 * click is applied to them.
 */
export const ROVING_ITEM_ATTRIBUTE = 'data-ix-roving-item';

/** IX item components taking part in keyboard navigation. */
const IX_ITEM_SELECTOR = VALID_FOCUS_ELEMENTS.join(', ');

/**
 * Selectors for elements taking part in roving-tabindex navigation: the IX item
 * components plus any element opted in via {@link ROVING_ITEM_ATTRIBUTE}.
 */
const ROVING_SELECTORS = [
  ...VALID_FOCUS_ELEMENTS,
  `[${ROVING_ITEM_ATTRIBUTE}]`,
];

export const QUERY_ARROW_ELEMENTS = VALID_FOCUS_ELEMENTS.map(
  (selector) => `${selector}:not([tabindex^="-"]):not([disabled]):not([hidden])`
).join(', ');

export const QUERY_CURRENT_VISIBLE_FOCUS = VALID_FOCUS_ELEMENTS.map(
  (selector) =>
    `${selector}.${IX_FOCUS_VISIBLE_ACTIVE}:not([tabindex^="-"]):not([disabled]):not([hidden])`
).join(', ');

/**
 * Navigable items in roving-tabindex mode.
 *
 * Unlike {@link QUERY_ARROW_ELEMENTS} this intentionally does NOT exclude
 * `tabindex="-1"`, because inactive roving items carry `tabindex="-1"` and must
 * still be part of the navigable set.
 */
export const QUERY_ROVING_ELEMENTS = ROVING_SELECTORS.map(
  (selector) => `${selector}:not([disabled]):not([hidden])`
).join(', ');

/**
 * The currently active item in roving-tabindex mode (the one holding `tabindex="0"`).
 */
export const QUERY_ROVING_ACTIVE = ROVING_SELECTORS.map(
  (selector) => `${selector}[tabindex="0"]:not([disabled]):not([hidden])`
).join(', ');

const rovingTabindexState = new WeakMap<
  HTMLElement,
  Map<HTMLElement, string | null>
>();

const rememberRovingTabindex = (host: HTMLElement, items: HTMLElement[]) => {
  let state = rovingTabindexState.get(host);
  if (!state) {
    state = new Map();
    rovingTabindexState.set(host, state);
  }

  items.forEach((item) => {
    if (!state.has(item)) {
      state.set(item, item.getAttribute('tabindex'));
    }
  });
};

export const getIndexOfDropdownItem = (
  items: HTMLElement[],
  item: HTMLElement | null,
  selector: string = QUERY_ARROW_ELEMENTS
) => {
  if (!item) {
    return -1;
  }

  if (!item.matches(selector)) {
    return -1;
  }

  return items.findIndex((el) => el === item);
};

export const getNextFocusableDropdownItem = (
  items: HTMLElement[],
  currentItem: HTMLElement | null,
  selector: string = QUERY_CURRENT_VISIBLE_FOCUS
) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem, selector);
  const nextIndex = currentItemIndex + 1;
  return items[nextIndex >= items.length ? 0 : nextIndex];
};

export const getPreviousFocusableItem = (
  items: HTMLElement[],
  currentItem: HTMLElement | null,
  selector: string = QUERY_CURRENT_VISIBLE_FOCUS
) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem, selector);
  const prevIndex = currentItemIndex - 1;
  return items[prevIndex < 0 ? items.length - 1 : prevIndex];
};

const focusItem = (item: HTMLElement) => {
  requestAnimationFrameNoNgZone(async () => {
    let element: HTMLElement | null = item;

    if (item.matches('ix-menu-category')) {
      element = item.shadowRoot!.querySelector('.category-parent');
    }

    if (element) {
      focusElement(element);

      requestAnimationFrameNoNgZone(() =>
        element.scrollIntoView({
          block: 'nearest',
        })
      );
    }
  });
};

export const isTriggerElement = (element: HTMLElement) =>
  element.hasAttribute('data-ix-dropdown-trigger');

/**
 * Moves the roving `tabindex` to a single item and focuses it.
 *
 * The previously active item (and any stale ones) are reset to `tabindex="-1"`
 * so exactly one item stays reachable via <kbd>Tab</kbd>.
 */
const focusRovingItem = (host: HTMLElement, item: HTMLElement) => {
  const items = queryElements(host, QUERY_ROVING_ELEMENTS) as HTMLElement[];
  rememberRovingTabindex(host, items);

  items.forEach((candidate) => {
    if (candidate !== item) {
      candidate.tabIndex = -1;
    }
  });
  item.tabIndex = 0;
  focusItem(item);
};

/**
 * Options for {@link configureKeyboardInteraction} that switch keyboard
 * navigation to a roving `tabindex` strategy: real DOM focus is moved between
 * items (`tabindex` toggled between `0` and `-1`) instead of relying on
 * `aria-activedescendant`.
 */
export const createRovingTabindexInteraction = (
  getItemsHost: () => HTMLElement
) => ({
  useCapture: true,
  querySelector: QUERY_ROVING_ELEMENTS,
  activeQuerySelector: QUERY_ROVING_ACTIVE,
  getActiveElement: () =>
    (queryElements(
      getItemsHost(),
      QUERY_ROVING_ACTIVE
    )[0] as HTMLElement | null) ?? null,
  setItemActive: (item: HTMLElement) => focusRovingItem(getItemsHost(), item),
});

/**
 * Initializes the roving `tabindex` when a dropdown opens: every item receives
 * `tabindex="-1"`, the target item receives `tabindex="0"` and DOM focus.
 */
export const initRovingTabindex = (
  host: HTMLElement,
  position: 'first' | 'last' = 'first',
  options?: { focusCheckedItem?: boolean }
) => {
  const items = queryElements(host, QUERY_ROVING_ELEMENTS) as HTMLElement[];
  if (items.length === 0) {
    return;
  }

  rememberRovingTabindex(host, items);

  items.forEach((item) => {
    item.tabIndex = -1;
  });

  let activeItem: HTMLElement | undefined;
  if (options?.focusCheckedItem) {
    activeItem = items.find((item) => item.matches('[checked]'));
  }

  if (!activeItem) {
    activeItem = position === 'last' ? items[items.length - 1] : items[0];
  }

  activeItem.tabIndex = 0;
  focusItem(activeItem);
};

/**
 * Restores the exact `tabindex` state each item had before roving navigation
 * changed it.
 */
export const clearRovingTabindex = (host: HTMLElement) => {
  const state = rovingTabindexState.get(host);
  if (!state) {
    return;
  }

  state.forEach((tabindex, item) => {
    if (tabindex === null) {
      item.removeAttribute('tabindex');
    } else {
      item.setAttribute('tabindex', tabindex);
    }
  });

  rovingTabindexState.delete(host);
};

export const configureKeyboardInteraction = (
  getItemsHost: () => HTMLElement,
  options: {
    getActiveElement?: () => HTMLElement | null;
    setItemActive?: (item: HTMLElement) => void;
    getEventListenerTarget?: () => HTMLElement;
    querySelector?: string;
    activeQuerySelector?: string;
    itemTriggerKeys?: string[];
    beforeKeydown?: (ev: KeyboardEvent) => void;
    onItemActivation?: (
      event: KeyboardEvent,
      activeElement: HTMLElement
    ) => void;
    /**
     * Invoked when <kbd>Tab</kbd> / <kbd>Shift</kbd>+<kbd>Tab</kbd> is pressed
     * while an item has focus. Used by the roving-tabindex strategy to close the
     * dropdown and let focus move to the next element in the tab order.
     */
    onTabKey?: (event: KeyboardEvent) => void;
    /**
     * Register the keydown listener in the capture phase. Used by the
     * roving-tabindex strategy so activation keys can be intercepted before the
     * focused item handles them, preventing duplicate activation.
     */
    useCapture?: boolean;
  } = {}
) => {
  const querySelector = options.querySelector ?? QUERY_ARROW_ELEMENTS;
  const activeQuerySelector =
    options.activeQuerySelector ?? QUERY_CURRENT_VISIBLE_FOCUS;

  const itemTriggerKeys = options.itemTriggerKeys ?? [
    'ArrowRight',
    'Enter',
    ' ',
  ];

  const getActiveElement =
    options.getActiveElement ??
    (() => {
      return queryElements(
        getItemsHost(),
        activeQuerySelector
      )[0] as HTMLElement | null;
    });

  const setItemActive =
    options.setItemActive ?? ((item: HTMLElement) => focusItem(item));

  const getEventListenerTarget =
    options.getEventListenerTarget ?? (() => getItemsHost());

  const callback = async (event: KeyboardEvent) => {
    const activeElement = getActiveElement();
    let items: HTMLElement[] = [];

    try {
      // Collect items from slots if they exist
      if (getItemsHost().querySelectorAll('slot').length > 0) {
        const slotElements = Array.from(
          getItemsHost().querySelectorAll('slot')
        );
        items = slotElements.flatMap((slot) =>
          Array.from(
            slot.assignedElements({ flatten: true }) as HTMLElement[]
          ).flatMap((el) => {
            // Check if the assigned element itself matches the query
            if (el?.matches(querySelector)) {
              return [el];
            }
            // Otherwise, query its children
            return Array.from(el.querySelectorAll(querySelector));
          })
        );
      }

      items = [
        ...items,
        ...Array.from(
          getItemsHost().querySelectorAll<HTMLElement>(querySelector)
        ),
      ];
    } catch (e) {
      if (Build.isDev) {
        console.error('Error during dropdown item collection:', e);
      }
    }

    if (options.beforeKeydown) {
      options.beforeKeydown(event);
    }

    if (event.key === 'Tab') {
      options.onTabKey?.(event);
      return;
    }

    switch (event.key) {
      case 'ArrowLeft': {
        getItemsHost().dispatchEvent(
          new CustomEvent('ix-close-submenu', {
            bubbles: true,
            cancelable: true,
          })
        );
        break;
      }

      case 'ArrowDown': {
        if (event.altKey) {
          // ALT + DOWN opens the dropdown but prevent focus change
          return;
        }

        // Disable movement/scroll with keyboard
        event.preventDefault();
        const nextItem = getNextFocusableDropdownItem(
          items,
          activeElement,
          activeQuerySelector
        );

        if (nextItem !== undefined) {
          setItemActive(nextItem);
        }
        break;
      }

      case 'ArrowUp': {
        if (event.altKey) {
          // ALT + DOWN opens the dropdown but prevent focus change
          return;
        }
        // Disable movement/scroll with keyboard
        event.preventDefault();
        const prevItem = getPreviousFocusableItem(
          items,
          activeElement,
          activeQuerySelector
        );
        if (prevItem !== undefined) {
          setItemActive(prevItem);
        }
        break;
      }

      case 'Home': {
        event.preventDefault();
        const firstItem = items[0];
        if (firstItem !== undefined) {
          setItemActive(firstItem);
        }
        break;
      }

      case 'End': {
        event.preventDefault();
        const lastItem = items[items.length - 1];
        if (lastItem !== undefined) {
          setItemActive(lastItem);
        }
        break;
      }

      case 'ArrowRight':
      case ' ':
      case 'Enter': {
        if (activeElement && isTriggerElement(activeElement)) {
          if (options.useCapture) {
            // Stop the focused submenu-trigger item from also handling the key.
            event.stopPropagation();
          }
          const triggerEvent = new CustomEvent('ix-open-submenu', {
            bubbles: true,
            cancelable: true,
            detail: {
              activeElement: activeElement,
            },
          });
          activeElement.dispatchEvent(triggerEvent);
          return;
        }
        break;
      }
      default:
        break;
    }

    if (itemTriggerKeys.includes(event.key)) {
      // Elements opted into roving via the marker attribute that are not IX item
      // components (e.g. a native `<button>`) activate themselves through their
      // own Enter/Space handling and dispatch a real click. Leave them alone so
      // activation happens exactly once and their native behavior is preserved.
      const isNativeRovingElement =
        !!activeElement &&
        activeElement.hasAttribute(ROVING_ITEM_ATTRIBUTE) &&
        !activeElement.matches(IX_ITEM_SELECTOR);

      if (!isNativeRovingElement) {
        if (options.useCapture) {
          // In roving-tabindex mode the item is DOM-focused and would activate
          // itself; stop propagation so activation only happens once, via the
          // synthetic click dispatched by onItemActivation.
          event.stopPropagation();
        }
        options.onItemActivation?.(event, activeElement!);
      }
    }
  };

  const listenerTarget = getEventListenerTarget();
  listenerTarget.addEventListener('keydown', callback, options.useCapture);
  return () =>
    listenerTarget.removeEventListener('keydown', callback, options.useCapture);
};

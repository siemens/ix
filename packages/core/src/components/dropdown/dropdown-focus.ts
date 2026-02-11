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

export const QUERY_ARROW_ELEMENTS = VALID_FOCUS_ELEMENTS.map(
  (selector) => `${selector}:not([tabindex^="-"]):not([disabled]):not([hidden])`
).join(', ');

export const QUERY_CURRENT_VISIBLE_FOCUS = VALID_FOCUS_ELEMENTS.map(
  (selector) =>
    `${selector}.${IX_FOCUS_VISIBLE_ACTIVE}:not([tabindex^="-"]):not([disabled]):not([hidden])`
).join(', ');

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
    }
  });
};

export const isTriggerElement = (element: HTMLElement) =>
  element.hasAttribute('data-ix-dropdown-trigger');

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

  const callback = async (ev: KeyboardEvent) => {
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
      options.beforeKeydown(ev);
    }

    switch (ev.key) {
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
        if (ev.altKey) {
          // ALT + DOWN opens the dropdown but prevent focus change
          return;
        }

        // Disable movement/scroll with keyboard
        ev.preventDefault();
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
        if (ev.altKey) {
          // ALT + DOWN opens the dropdown but prevent focus change
          return;
        }
        // Disable movement/scroll with keyboard
        ev.preventDefault();
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
        ev.preventDefault();
        const firstItem = items[0];
        if (firstItem !== undefined) {
          setItemActive(firstItem);
        }
        break;
      }

      case 'End': {
        ev.preventDefault();
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

    if (itemTriggerKeys.includes(ev.key)) {
      options.onItemActivation?.(ev, activeElement!);
    }
  };

  const listenerTarget = getEventListenerTarget();
  listenerTarget.addEventListener('keydown', callback);
  return () => listenerTarget.removeEventListener('keydown', callback);
};

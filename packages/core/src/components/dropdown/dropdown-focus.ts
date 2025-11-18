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

import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

const VALID_FOCUS_ITEMS = ['ix-dropdown-item', 'ix-select-item'];
const VALID_FOCUS_ELEMENTS = ['ix-dropdown', ...VALID_FOCUS_ITEMS];

const matchesDropdownItems = (element: HTMLElement) =>
  element.matches(VALID_FOCUS_ELEMENTS.join(', '));

export const getIndexOfDropdownItem = (
  items: HTMLElement[],
  item: HTMLElement | null
) => {
  if (!item) {
    return -1;
  }

  if (!matchesDropdownItems(item)) {
    return -1;
  }

  return items.findIndex((el) => el === item);
};

export const getNextFocusableDropdownItem = (
  items: HTMLElement[],
  currentItem: HTMLElement | null
) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem);
  return items[currentItemIndex + 1];
};

export const getPreviousFocusableItem = (
  items: HTMLElement[],
  currentItem: HTMLElement | null
) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem);
  return items[currentItemIndex - 1];
};

const focusItem = (item: HTMLElement) => {
  requestAnimationFrameNoNgZone(async () => {
    if (
      'getDropdownItemElement' in item &&
      typeof item.getDropdownItemElement === 'function'
    ) {
      const dropdownItem = await item.getDropdownItemElement();
      dropdownItem.shadowRoot!.querySelector('button')!.focus();
    } else {
      item.shadowRoot!.querySelector('button')!.focus();
    }
  });
};

export const isTriggerElement = (element: HTMLElement) =>
  element.hasAttribute('data-ix-dropdown-trigger');

export const configureKeyboardInteraction = (
  dropdownElement: HTMLElement,
  options: {
    getActiveElement?: () => HTMLElement | null;
    setItemActive?: (item: HTMLElement) => void;
    getEventListenerTarget?: () => HTMLElement;
  } = {}
) => {
  const getActiveElement =
    options.getActiveElement ??
    (() => document.activeElement as HTMLElement | null);

  const setItemActive =
    options.setItemActive ?? ((item: HTMLElement) => focusItem(item));

  const getEventListenerTarget =
    options.getEventListenerTarget ?? (() => dropdownElement);

  const callback = async (ev: KeyboardEvent) => {
    const activeElement = getActiveElement();
    let items: HTMLElement[] = [];

    try {
      const query = VALID_FOCUS_ITEMS.map(
        (item) =>
          `${item.toLowerCase()}:not(ix-dropdown ix-dropdown *):not([disabled]):not([hidden])`
      ).join(', ');

      // Collect items from slots if they exist
      if (dropdownElement.querySelectorAll('slot').length > 0) {
        const slotElements = Array.from(
          dropdownElement.querySelectorAll('slot')
        );
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
        // No slots, query directly on popoverEl
        items = Array.from(
          dropdownElement.querySelectorAll(query) as NodeListOf<HTMLElement>
        );
      }

      /* eslint-disable-next-line */
    } catch {}

    switch (ev.key) {
      case 'ArrowLeft':
        dropdownElement.dispatchEvent(
          new CustomEvent('ix-close-submenu', {
            bubbles: true,
            cancelable: true,
          })
        );
        break;

      case 'ArrowDown':
        // Disable movement/scroll with keyboard
        ev.preventDefault();
        const nextItem = getNextFocusableDropdownItem(items, activeElement);
        if (nextItem !== undefined) {
          setItemActive(nextItem);
        }
        break;

      case 'ArrowUp':
        // Disable movement/scroll with keyboard
        ev.preventDefault();
        const prevItem = getPreviousFocusableItem(items, activeElement);
        if (prevItem !== undefined) {
          setItemActive(prevItem);
        }
        break;

      case 'Home':
        ev.preventDefault();
        const firstItem = items[0];
        if (firstItem !== undefined) {
          setItemActive(firstItem);
        }
        break;

      case 'End':
        ev.preventDefault();
        const lastItem = items[items.length - 1];
        if (lastItem !== undefined) {
          setItemActive(lastItem);
        }
        break;

      case 'ArrowRight':
      case ' ':
      case 'Enter':
        if (activeElement && isTriggerElement(activeElement)) {
          const triggerEvent = new CustomEvent('ix-open-submenu', {
            bubbles: true,
            cancelable: true,
            detail: {
              activeElement: activeElement,
            },
          });
          activeElement.dispatchEvent(triggerEvent);
        }
        break;
      default:
        break;
    }
  };

  getEventListenerTarget().addEventListener('keydown', callback);
  return () =>
    getEventListenerTarget().removeEventListener('keydown', callback);
};

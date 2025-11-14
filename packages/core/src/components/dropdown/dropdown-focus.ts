/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

export const getIndexOfDropdownItem = (
  items: HTMLElement[],
  item: HTMLElement | null
) => {
  if (!item || item.tagName !== 'IX-DROPDOWN-ITEM') {
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
  requestAnimationFrameNoNgZone(() =>
    item.shadowRoot!.querySelector('button')!.focus()
  );
};

export const isTriggerElement = (element: HTMLElement) =>
  element.hasAttribute('data-ix-dropdown-trigger');

export const configureKeyboardInteraction = (dropdownElement: HTMLElement) => {
  const callback = async (ev: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLElement | null;
    let items: HTMLElement[] = [];

    const targetTagName = (ev.target as HTMLElement)?.tagName;
    if (
      targetTagName !== 'IX-DROPDOWN' &&
      targetTagName !== 'IX-DROPDOWN-ITEM'
    ) {
      return;
    }

    try {
      const query =
        'ix-dropdown-item:not(ix-dropdown ix-dropdown *):not([disabled])';

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
          focusItem(nextItem);
        }
        break;

      case 'ArrowUp':
        // Disable movement/scroll with keyboard
        ev.preventDefault();
        const prevItem = getPreviousFocusableItem(items, activeElement);
        if (prevItem !== undefined) {
          focusItem(prevItem);
        }
        break;

      case 'Home':
        ev.preventDefault();
        const firstItem = items[0];
        if (firstItem !== undefined) {
          focusItem(firstItem);
        }
        break;

      case 'End':
        ev.preventDefault();
        const lastItem = items[items.length - 1];
        if (lastItem !== undefined) {
          focusItem(lastItem);
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

  dropdownElement.addEventListener('keydown', callback);
  return () => dropdownElement.removeEventListener('keydown', callback);
};

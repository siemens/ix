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
import { focusElement } from '../utils/focus/focus-visible-listener';

const VALID_FOCUS_ELEMENTS = [
  'ix-dropdown',
  'ix-dropdown-item',
  'ix-select-item',
  'ix-menu-item',
  'ix-menu-category',
];

export const ARROW_QUERY_SELECTOR = VALID_FOCUS_ELEMENTS.map(
  (selector) => `${selector}:not([tabindex^="-"]):not([disabled]):not([hidden])`
).join(', ');

export const getIndexOfDropdownItem = (
  items: HTMLElement[],
  item: HTMLElement | null,
  selector: string = ARROW_QUERY_SELECTOR
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
  selector: string = ARROW_QUERY_SELECTOR
) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem, selector);
  const nextIndex = currentItemIndex + 1;
  return items[nextIndex >= items.length ? 0 : nextIndex];
};

export const getPreviousFocusableItem = (
  items: HTMLElement[],
  currentItem: HTMLElement | null,
  selector: string = ARROW_QUERY_SELECTOR
) => {
  const currentItemIndex = getIndexOfDropdownItem(items, currentItem, selector);
  const prevIndex = currentItemIndex - 1;
  return items[prevIndex < 0 ? items.length - 1 : prevIndex];
};

const focusItem = (item: HTMLElement) => {
  requestAnimationFrameNoNgZone(async () => {
    let element: HTMLElement | null = item;

    if (
      'getDropdownItemElement' in item &&
      typeof item.getDropdownItemElement === 'function'
    ) {
      const dropdownItem = await item.getDropdownItemElement();
      element = dropdownItem.shadowRoot!.querySelector('button');
    }

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
  dropdownElement: HTMLElement,
  options: {
    getActiveElement?: () => HTMLElement | null;
    setItemActive?: (item: HTMLElement) => void;
    getEventListenerTarget?: () => HTMLElement;
    querySelector?: string;
    beforeKeydown?: (ev: KeyboardEvent) => void;
  } = {}
) => {
  const getActiveElement =
    options.getActiveElement ??
    (() => {
      const documentActiveElement =
        document.activeElement as HTMLElement | null;

      /**
       * If a element is :focus-visible inside a shadow root, the host element is always focused.
       * Therefore, we need to check if the active element's root node is a shadow root
       * and if its host is the document's active element.
       *
       * This ensure that a iteration of items is possible even when the dropdown is inside
       * a shadow DOM.
       */
      const rootNode = dropdownElement.getRootNode();
      if (
        rootNode instanceof ShadowRoot &&
        rootNode.host === documentActiveElement
      ) {
        return rootNode.activeElement as HTMLElement | null;
      }
      return documentActiveElement;
    });

  const setItemActive =
    options.setItemActive ?? ((item: HTMLElement) => focusItem(item));

  const getEventListenerTarget =
    options.getEventListenerTarget ?? (() => dropdownElement);

  const querySelector = options.querySelector ?? ARROW_QUERY_SELECTOR;

  const callback = async (ev: KeyboardEvent) => {
    const activeElement = getActiveElement();
    let items: HTMLElement[] = [];

    try {
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
          dropdownElement.querySelectorAll<HTMLElement>(querySelector)
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
        dropdownElement.dispatchEvent(
          new CustomEvent('ix-close-submenu', {
            bubbles: true,
            cancelable: true,
          })
        );
        break;
      }

      case 'ArrowDown': {
        // Disable movement/scroll with keyboard
        ev.preventDefault();
        const nextItem = getNextFocusableDropdownItem(
          items,
          activeElement,
          querySelector
        );

        if (nextItem !== undefined) {
          setItemActive(nextItem);
        }
        break;
      }

      case 'ArrowUp': {
        // Disable movement/scroll with keyboard
        ev.preventDefault();
        const prevItem = getPreviousFocusableItem(
          items,
          activeElement,
          querySelector
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
          console.log('OPEN SUBMENU');
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
      }
      default:
        break;
    }
  };

  getEventListenerTarget().addEventListener('keydown', callback);
  return () =>
    getEventListenerTarget().removeEventListener('keydown', callback);
};

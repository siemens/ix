/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';

export type ListItemGap = 0 | 4 | 8 | 12;

const actionFocusableSelector = [
  'button',
  'a[href]',
  'input',
  'select',
  'textarea',
  '[contenteditable]',
  '[tabindex]',
  'ix-button',
  'ix-checkbox',
  'ix-dropdown-button',
  'ix-icon-button',
  'ix-split-button',
  'ix-toggle',
].join(',');

/**
 * @slot default - List items and optional group separators.
 * @since 5.2.0
 */

@Component({
  tag: 'ix-list',
  styleUrl: 'list.scss',
  shadow: true,
})
export class List {
  @Element() hostElement!: HTMLIxListElement;

  /**
   * Display dividers between direct list items.
   * @since 5.2.0
   */
  @Prop({ reflect: true }) hasDivider = false;

  /**
   * Space in pixels between direct list items.
   * @since 5.2.0
   */
  @Prop() itemGap: ListItemGap = 12;

  private activeItem?: HTMLIxListItemElement;
  private readonly originalActionTabIndex = new WeakMap<HTMLElement, string>();
  private readonly mutationObserver = createMutationObserver(() =>
    this.synchronizeItems()
  );

  componentDidLoad() {
    this.mutationObserver.observe(this.hostElement, {
      attributeFilter: ['disabled', 'hidden', 'slot'],
      attributes: true,
      childList: true,
      subtree: true,
    });
    this.synchronizeItems();
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  private get items() {
    return Array.from(this.hostElement.children).filter(
      (element): element is HTMLIxListItemElement =>
        element.tagName === 'IX-LIST-ITEM'
    );
  }

  private get enabledItems() {
    return this.items.filter((item) => !item.disabled && !item.hidden);
  }

  private getItemFromEvent(event: Event) {
    return event
      .composedPath()
      .find(
        (element): element is HTMLIxListItemElement =>
          element instanceof HTMLElement &&
          element.tagName === 'IX-LIST-ITEM' &&
          element.parentElement === this.hostElement
      );
  }

  private getPrimaryAction(item: HTMLIxListItemElement) {
    return item.shadowRoot?.querySelector<HTMLButtonElement>('.primary-action');
  }

  private getActionElements(item: HTMLIxListItemElement) {
    const slotElements = Array.from(
      item.querySelectorAll<HTMLElement>(
        ':scope > [slot="action"], :scope > [slot="additional-actions"]'
      )
    );

    return slotElements.flatMap((element) => {
      if (element.matches(actionFocusableSelector)) {
        return [element];
      }

      return Array.from(
        element.querySelectorAll<HTMLElement>(actionFocusableSelector)
      );
    });
  }

  private setActionTabOrder(item: HTMLIxListItemElement, enabled: boolean) {
    this.getActionElements(item).forEach((element) => {
      if (!this.originalActionTabIndex.has(element)) {
        this.originalActionTabIndex.set(
          element,
          element.getAttribute('tabindex') ?? ''
        );
      }

      if (!enabled) {
        element.tabIndex = -1;
        return;
      }

      const originalTabIndex = this.originalActionTabIndex.get(element);
      if (originalTabIndex) {
        element.setAttribute('tabindex', originalTabIndex);
      } else {
        element.removeAttribute('tabindex');
      }
    });
  }

  private synchronizeItems() {
    const enabledItems = this.enabledItems;

    if (!this.activeItem || !enabledItems.includes(this.activeItem)) {
      this.activeItem = enabledItems[0];
    }

    this.items.forEach((item) => {
      const isActive =
        item === this.activeItem && !item.disabled && !item.hidden;
      item.tabIndex = isActive ? 0 : -1;
      this.setActionTabOrder(item, isActive);
    });
  }

  private focusItem(item: HTMLIxListItemElement) {
    this.activeItem = item;
    this.synchronizeItems();
    this.getPrimaryAction(item)?.focus({ preventScroll: true });
    item.scrollIntoView({ block: 'nearest' });
  }

  private focusRelativeItem(item: HTMLIxListItemElement, offset: number) {
    const items = this.enabledItems;
    const currentIndex = items.indexOf(item);
    const nextIndex = Math.min(
      Math.max(currentIndex + offset, 0),
      items.length - 1
    );
    const nextItem = items[nextIndex];

    if (nextItem) {
      this.focusItem(nextItem);
    }
  }

  private handleFocusIn(event: FocusEvent) {
    const item = this.getItemFromEvent(event);
    if (!item || item.disabled || item.hidden || item === this.activeItem) {
      return;
    }

    this.activeItem = item;
    this.synchronizeItems();
  }

  private handleKeyDown(event: KeyboardEvent) {
    const item = this.getItemFromEvent(event);
    if (!item || item.disabled) {
      return;
    }

    const eventPath = event.composedPath();
    const primaryAction = this.getPrimaryAction(item);
    const actionElements = this.getActionElements(item);
    const actionIndex = actionElements.findIndex((element) =>
      eventPath.includes(element)
    );
    const isPrimaryAction =
      !!primaryAction && eventPath.includes(primaryAction);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusRelativeItem(item, 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusRelativeItem(item, -1);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      const firstItem = this.enabledItems[0];
      if (firstItem) {
        this.focusItem(firstItem);
      }
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      const lastItem = this.enabledItems.at(-1);
      if (lastItem) {
        this.focusItem(lastItem);
      }
      return;
    }

    if (
      isPrimaryAction &&
      (event.key === 'ArrowRight' ||
        (event.key === 'Tab' && !event.shiftKey)) &&
      actionElements.length > 0
    ) {
      event.preventDefault();
      actionElements[0].focus();
      return;
    }

    if (actionIndex === -1) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      primaryAction?.focus();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey) {
      event.preventDefault();
      if (actionIndex === 0) {
        primaryAction?.focus();
      } else {
        actionElements[actionIndex - 1].focus();
      }
      return;
    }

    if (actionIndex < actionElements.length - 1) {
      event.preventDefault();
      actionElements[actionIndex + 1].focus();
    }
  }

  render() {
    return (
      <Host
        role="list"
        onFocusin={(event: FocusEvent) => this.handleFocusIn(event)}
        onKeydown={(event: KeyboardEvent) => this.handleKeyDown(event)}
        class={{
          'has-divider': this.hasDivider,
        }}
        style={{
          '--ix-list-item-gap': `${this.itemGap}px`,
        }}
      >
        <div class="list">
          <slot onSlotchange={() => this.synchronizeItems()}></slot>
        </div>
      </Host>
    );
  }
}

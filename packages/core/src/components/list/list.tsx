/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import type {
  ListItemActionSlotAlignment,
  ListItemVariant,
} from '../list-item/list-item';
import { createMutationObserver } from '../utils/mutation-observer';

export type ListItemGap = 0 | 4 | 8 | 12;
export type ListDragBehavior = 'dynamic' | 'separator';

export interface ListItemOrderChangeEvent {
  item: HTMLIxListItemElement;
  oldIndex: number;
  newIndex: number;
}

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

type InheritedItemProperty =
  | 'variant'
  | 'disabled'
  | 'checkbox'
  | 'actionOnHover'
  | 'actionSlotAlignment'
  | 'hasDivider';

const inheritedItemProperties: Array<{
  property: InheritedItemProperty;
  attribute: string;
}> = [
  { property: 'variant', attribute: 'variant' },
  { property: 'disabled', attribute: 'disabled' },
  { property: 'checkbox', attribute: 'checkbox' },
  { property: 'actionOnHover', attribute: 'action-on-hover' },
  {
    property: 'actionSlotAlignment',
    attribute: 'action-slot-alignment',
  },
  { property: 'hasDivider', attribute: 'has-divider' },
];

const itemPropertyDefaults: Required<
  Pick<HTMLIxListItemElement, InheritedItemProperty>
> = {
  variant: 'filled',
  disabled: false,
  checkbox: false,
  actionOnHover: false,
  actionSlotAlignment: 'center',
  hasDivider: false,
};

/**
 * @slot default - List items and optional group separators.
 * @since 6.0.0
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
   * @since 6.0.0
   */
  @Prop({ reflect: true }) hasDivider = false;

  /**
   * Space in pixels between direct list items.
   * @since 6.0.0
   */
  @Prop() itemGap: ListItemGap = 12;

  /**
   * Default visual variant for list items that do not define their own variant.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) variant?: ListItemVariant;

  /**
   * Default disabled state for list items that do not define their own state.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) disabled?: boolean;

  /**
   * Display selection checkboxes on list items that do not define their own setting.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) checkbox?: boolean;

  /**
   * Show action content on hover or focus for list items that do not define their own setting.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) actionOnHover?: boolean;

  /**
   * Default action slot alignment for list items that do not define their own setting.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) actionSlotAlignment?: ListItemActionSlotAlignment;

  /**
   * Enable drag-and-drop reordering of direct list items.
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/reserved-member-names -- Public API intentionally follows the native draggable name.
  @Prop({ reflect: true }) draggable = false;

  /**
   * Visual behavior used while dragging a list item.
   * @since 6.0.0
   */
  @Prop({ reflect: true }) dragBehavior: ListDragBehavior = 'dynamic';

  /**
   * Emitted after a list item has been reordered.
   * @since 6.0.0
   */
  @Event() itemOrderChange!: EventEmitter<ListItemOrderChangeEvent>;

  private activeItem?: HTMLIxListItemElement;
  private draggedItem?: HTMLIxListItemElement;
  private dragMode?: 'keyboard' | 'pointer';
  private dragOriginalIndex = -1;
  private dragOriginalNextSibling: ChildNode | null = null;
  private dragPlaceholder?: HTMLDivElement;
  private dragPointerId?: number;
  private dragStartY = 0;
  private itemsSynchronized = false;
  private readonly inheritedItemValues = new WeakMap<
    HTMLIxListItemElement,
    Partial<
      Record<
        InheritedItemProperty,
        ListItemVariant | ListItemActionSlotAlignment | boolean
      >
    >
  >();
  private readonly overriddenItemProperties = new WeakMap<
    HTMLIxListItemElement,
    Set<InheritedItemProperty>
  >();
  private readonly mutationObserver = createMutationObserver(() => {
    if (this.itemsSynchronized) {
      this.synchronizeItems();
    }
  });

  connectedCallback() {
    this.mutationObserver.observe(this.hostElement, {
      attributeFilter: [
        'action-on-hover',
        'action-slot-alignment',
        'checkbox',
        'disabled',
        'has-divider',
        'hidden',
        'slot',
        'variant',
      ],
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  componentDidLoad() {
    this.synchronizeItems();
    this.mutationObserver.takeRecords();
    this.itemsSynchronized = true;
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  @Watch('draggable')
  protected draggableChanged() {
    if (!this.draggable && this.draggedItem) {
      this.cancelReorder();
    }
    this.synchronizeItems();
  }

  @Watch('dragBehavior')
  protected dragBehaviorChanged() {
    if (this.draggedItem) {
      this.cancelReorder();
    }
  }

  @Watch('variant')
  @Watch('disabled')
  @Watch('checkbox')
  @Watch('actionOnHover')
  @Watch('actionSlotAlignment')
  @Watch('hasDivider')
  protected itemDefaultsChanged() {
    this.synchronizeItems();
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

  private getDragGripper(item: HTMLIxListItemElement) {
    return item.shadowRoot?.querySelector<HTMLButtonElement>('.drag-gripper');
  }

  private announce(item: HTMLIxListItemElement, message: string) {
    const announcement =
      item.shadowRoot?.querySelector<HTMLElement>('.drag-announcement');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  private setItemReorderState(
    item: HTMLIxListItemElement,
    reordering: boolean
  ) {
    item.dispatchEvent(
      new CustomEvent<boolean>('ixListItemReorderStateChange', {
        detail: reordering,
      })
    );
  }

  private getActionElements(item: HTMLIxListItemElement) {
    const selectionCheckbox = item.shadowRoot
      ?.querySelector<HTMLIxCheckboxElement>('.selection-checkbox')
      ?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    const slotElements = Array.from(
      item.querySelectorAll<HTMLElement>(':scope > [slot="action"]')
    );

    const actionElements = slotElements.flatMap((element) => {
      if (element.matches(actionFocusableSelector)) {
        return [element];
      }

      return Array.from(
        element.querySelectorAll<HTMLElement>(actionFocusableSelector)
      );
    });

    return selectionCheckbox
      ? [selectionCheckbox, ...actionElements]
      : actionElements;
  }

  private setActionTabOrder(item: HTMLIxListItemElement) {
    this.getActionElements(item).forEach((element) => {
      element.tabIndex = -1;
    });
  }

  private applyItemDefaults(item: HTMLIxListItemElement) {
    let overriddenProperties = this.overriddenItemProperties.get(item);
    let inheritedValues = this.inheritedItemValues.get(item);

    if (!overriddenProperties) {
      overriddenProperties = new Set(
        inheritedItemProperties
          .filter(({ attribute }) => item.hasAttribute(attribute))
          .map(({ property }) => property)
      );
      this.overriddenItemProperties.set(item, overriddenProperties);
    }

    if (!inheritedValues) {
      inheritedValues = {};
      this.inheritedItemValues.set(item, inheritedValues);
    }

    inheritedItemProperties.forEach(({ property }) => {
      if (overriddenProperties.has(property)) {
        return;
      }

      const inheritedValue = inheritedValues[property];
      if (inheritedValue !== undefined && item[property] !== inheritedValue) {
        overriddenProperties.add(property);
        delete inheritedValues[property];
        return;
      }

      const listValue = this[property];
      if (listValue === undefined) {
        if (inheritedValue !== undefined) {
          const defaultValue = itemPropertyDefaults[property];
          if (item[property] !== defaultValue) {
            item[property] = defaultValue as never;
          }
          delete inheritedValues[property];
        }
        return;
      }

      if (item[property] !== listValue) {
        item[property] = listValue as never;
      }
      inheritedValues[property] = listValue;
    });
  }

  private synchronizeItems() {
    this.items.forEach((item) => this.applyItemDefaults(item));
    const enabledItems = this.enabledItems;

    if (!this.activeItem || !enabledItems.includes(this.activeItem)) {
      this.activeItem = enabledItems[0];
    }

    this.items.forEach((item) => {
      const isActive =
        item === this.activeItem && !item.disabled && !item.hidden;
      item.toggleAttribute('data-list-draggable', this.draggable);
      item.tabIndex = isActive ? 0 : -1;
      const primaryAction = this.getPrimaryAction(item);
      if (primaryAction) {
        primaryAction.tabIndex = isActive ? 0 : -1;
      }
      const gripper = this.getDragGripper(item);
      if (gripper) {
        const isGripperEnabled = Boolean(
          this.draggable && !item.disabled && !item.hidden
        );
        gripper.disabled = !isGripperEnabled;
        gripper.tabIndex = isActive && isGripperEnabled ? 0 : -1;
      }
      this.setActionTabOrder(item);
    });
  }

  private getItemLabel(item: HTMLIxListItemElement) {
    return item.label || 'List item';
  }

  private announcePosition(item: HTMLIxListItemElement) {
    const position = this.items.indexOf(item) + 1;
    this.announce(
      item,
      `${this.getItemLabel(item)}, position ${position} of ${this.items.length}`
    );
  }

  private beginReorder(
    item: HTMLIxListItemElement,
    mode: 'keyboard' | 'pointer'
  ) {
    if (!this.draggable || item.disabled || item.hidden || this.draggedItem) {
      return false;
    }

    this.draggedItem = item;
    this.dragMode = mode;
    this.dragOriginalIndex = this.items.indexOf(item);
    this.dragOriginalNextSibling = item.nextSibling;
    this.setItemReorderState(item, true);
    this.announce(
      item,
      `${this.getItemLabel(
        item
      )} lifted. Use arrow keys to move, Enter or Space to drop, and Escape to cancel.`
    );
    if (mode === 'keyboard') {
      this.getDragGripper(item)?.focus({ preventScroll: true });
    }
    return true;
  }

  private createDragPlaceholder(item: HTMLIxListItemElement, clientY: number) {
    const itemBounds = item.getBoundingClientRect();
    const placeholder = document.createElement('div');
    placeholder.className = 'ix-list-drag-placeholder';
    placeholder.setAttribute('aria-hidden', 'true');
    placeholder.classList.toggle(
      'separator',
      this.dragBehavior === 'separator'
    );
    if (this.dragBehavior === 'dynamic') {
      placeholder.style.height = `${itemBounds.height}px`;
    }
    this.hostElement.insertBefore(placeholder, item);
    this.dragPlaceholder = placeholder;

    if (this.dragBehavior === 'dynamic') {
      item.style.setProperty('--ix-list-drag-left', `${itemBounds.left}px`);
      item.style.setProperty('--ix-list-drag-top', `${itemBounds.top}px`);
      item.style.setProperty('--ix-list-drag-width', `${itemBounds.width}px`);
      item.classList.add('pointer-dragging');
    } else {
      this.movePlaceholder(clientY);
    }
  }

  private movePlaceholder(clientY: number) {
    const item = this.draggedItem;
    const placeholder = this.dragPlaceholder;
    if (!item || !placeholder) {
      return;
    }

    const candidates = this.items.filter(
      (candidate) => candidate !== item && !candidate.hidden
    );
    const beforeItem = candidates.find((candidate) => {
      const bounds = candidate.getBoundingClientRect();
      return clientY < bounds.top + bounds.height / 2;
    });

    if (beforeItem) {
      this.hostElement.insertBefore(placeholder, beforeItem);
    } else {
      this.hostElement.appendChild(placeholder);
    }

    if (this.dragBehavior === 'separator') {
      const list =
        this.hostElement.shadowRoot?.querySelector<HTMLElement>('.list');
      if (!list) {
        return;
      }

      const visibleItems = this.items.filter((candidate) => !candidate.hidden);
      const beforeIndex = beforeItem
        ? visibleItems.indexOf(beforeItem)
        : visibleItems.length;
      const previousItem = visibleItems[beforeIndex - 1];
      const listBounds = list.getBoundingClientRect();
      const beforeBounds = beforeItem?.getBoundingClientRect();
      const previousBounds = previousItem?.getBoundingClientRect();
      const boundary = beforeBounds
        ? previousBounds
          ? (previousBounds.bottom + beforeBounds.top) / 2
          : beforeBounds.top
        : (previousBounds?.bottom ?? listBounds.top);
      const top = boundary - listBounds.top + list.scrollTop;
      const containedTop = Math.min(
        Math.max(top, 0),
        Math.max(list.scrollHeight - 1, 0)
      );
      placeholder.style.setProperty(
        '--ix-list-drag-separator-top',
        `${containedTop}px`
      );
    }
  }

  private moveKeyboardItem(item: HTMLIxListItemElement, offset: number) {
    const items = this.items;
    const currentIndex = items.indexOf(item);
    const newIndex = Math.min(
      Math.max(currentIndex + offset, 0),
      items.length - 1
    );
    const target = items[newIndex];

    if (!target || target === item) {
      return;
    }

    if (offset < 0) {
      this.hostElement.insertBefore(item, target);
    } else {
      this.hostElement.insertBefore(item, target.nextSibling);
    }

    this.activeItem = item;
    this.synchronizeItems();
    this.getDragGripper(item)?.focus({ preventScroll: true });
    item.scrollIntoView({ block: 'nearest' });
    this.announcePosition(item);
  }

  private cleanupReorder() {
    const item = this.draggedItem;
    if (item) {
      item.classList.remove('pointer-dragging');
      this.setItemReorderState(item, false);
      item.style.removeProperty('--ix-list-drag-left');
      item.style.removeProperty('--ix-list-drag-top');
      item.style.removeProperty('--ix-list-drag-width');
      item.style.removeProperty('--ix-list-drag-y');
    }
    this.dragPlaceholder?.remove();
    this.draggedItem = undefined;
    this.dragMode = undefined;
    this.dragPlaceholder = undefined;
    this.dragPointerId = undefined;
  }

  private finishReorder() {
    const item = this.draggedItem;
    if (!item) {
      return;
    }
    const shouldRestoreFocus = this.dragMode === 'keyboard';

    if (this.dragPlaceholder) {
      this.hostElement.insertBefore(item, this.dragPlaceholder);
    }

    const oldIndex = this.dragOriginalIndex;
    const newIndex = this.items.indexOf(item);
    this.cleanupReorder();
    this.activeItem = item;
    this.synchronizeItems();
    if (shouldRestoreFocus) {
      this.getDragGripper(item)?.focus({ preventScroll: true });
    }

    if (oldIndex !== newIndex) {
      this.itemOrderChange.emit({ item, oldIndex, newIndex });
    }
    this.announce(
      item,
      `${this.getItemLabel(item)} dropped at position ${newIndex + 1} of ${
        this.items.length
      }.`
    );
  }

  private cancelReorder() {
    const item = this.draggedItem;
    if (!item) {
      return;
    }
    const shouldRestoreFocus = this.dragMode === 'keyboard';

    const nextSibling = this.dragOriginalNextSibling;
    if (nextSibling?.parentNode === this.hostElement) {
      this.hostElement.insertBefore(item, nextSibling);
    } else {
      this.hostElement.appendChild(item);
    }

    this.cleanupReorder();
    this.activeItem = item;
    this.synchronizeItems();
    if (shouldRestoreFocus) {
      this.getDragGripper(item)?.focus({ preventScroll: true });
    }
    this.announce(item, `${this.getItemLabel(item)} reorder cancelled.`);
  }

  private handlePointerDown(event: PointerEvent) {
    const gripper = event
      .composedPath()
      .find(
        (element): element is HTMLButtonElement =>
          element instanceof HTMLButtonElement &&
          element.classList.contains('drag-gripper')
      );
    const item = this.getItemFromEvent(event);
    if (!gripper || !item || event.button !== 0) {
      return;
    }

    if (!this.beginReorder(item, 'pointer')) {
      return;
    }

    event.preventDefault();
    this.dragPointerId = event.pointerId;
    this.dragStartY = event.clientY;
    this.createDragPlaceholder(item, event.clientY);
    gripper.setPointerCapture(event.pointerId);
  }

  private handlePointerMove(event: PointerEvent) {
    const item = this.draggedItem;
    if (
      !item ||
      this.dragMode !== 'pointer' ||
      event.pointerId !== this.dragPointerId
    ) {
      return;
    }

    event.preventDefault();
    if (this.dragBehavior === 'dynamic') {
      item.style.setProperty(
        '--ix-list-drag-y',
        `${event.clientY - this.dragStartY}px`
      );
    }
    this.movePlaceholder(event.clientY);
  }

  private handlePointerEnd(event: PointerEvent) {
    if (this.dragMode !== 'pointer' || event.pointerId !== this.dragPointerId) {
      return;
    }
    this.finishReorder();
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
    const dragGripper = this.getDragGripper(item);
    const isDragGripperFocused =
      !!dragGripper && item.shadowRoot?.activeElement === dragGripper;
    const isDragGripper =
      !!dragGripper &&
      (eventPath.includes(dragGripper) || isDragGripperFocused);
    const actionElements = this.getActionElements(item);
    const actionIndex = actionElements.findIndex((element) =>
      eventPath.includes(element)
    );
    const isPrimaryActionFocused =
      !!primaryAction && item.shadowRoot?.activeElement === primaryAction;
    const isPrimaryAction =
      !!primaryAction &&
      (eventPath.includes(primaryAction) || isPrimaryActionFocused);
    const isActivationKey =
      event.key === 'Enter' ||
      event.key === ' ' ||
      event.key === 'Spacebar' ||
      event.code === 'Space';

    const isKeyboardDraggingCurrentItem =
      this.draggedItem === item && this.dragMode === 'keyboard';

    if (isKeyboardDraggingCurrentItem && (isDragGripper || isPrimaryAction)) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.moveKeyboardItem(item, event.key === 'ArrowDown' ? 1 : -1);
        return;
      }
      if (isActivationKey) {
        event.preventDefault();
        this.finishReorder();
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        this.cancelReorder();
        return;
      }
    }

    if (isDragGripper) {
      if (isActivationKey) {
        event.preventDefault();
        this.beginReorder(item, 'keyboard');
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        primaryAction?.focus();
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.focusRelativeItem(item, 1);
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.focusRelativeItem(item, -1);
      }
      return;
    }

    if (
      isPrimaryAction &&
      isActivationKey &&
      this.draggable &&
      !dragGripper?.disabled
    ) {
      event.preventDefault();
      this.beginReorder(item, 'keyboard');
      return;
    }

    if (
      isPrimaryAction &&
      event.key === 'ArrowLeft' &&
      this.draggable &&
      !dragGripper?.disabled
    ) {
      event.preventDefault();
      dragGripper?.focus();
      return;
    }

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
      if (actionIndex === 0) {
        primaryAction?.focus();
      } else {
        actionElements[actionIndex - 1].focus();
      }
      return;
    }

    if (
      event.key !== 'ArrowRight' ||
      actionIndex === actionElements.length - 1
    ) {
      return;
    }

    event.preventDefault();
    actionElements[actionIndex + 1].focus();
  }

  render() {
    return (
      <Host
        role="list"
        onFocusin={(event: FocusEvent) => this.handleFocusIn(event)}
        onKeydown={(event: KeyboardEvent) => this.handleKeyDown(event)}
        onPointerDown={(event: PointerEvent) => this.handlePointerDown(event)}
        onPointerMove={(event: PointerEvent) => this.handlePointerMove(event)}
        onPointerUp={(event: PointerEvent) => this.handlePointerEnd(event)}
        onPointerCancel={() => this.cancelReorder()}
        onDragStart={(event: DragEvent) => event.preventDefault()}
        class={{
          'has-divider': this.hasDivider,
          draggable: this.draggable,
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

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { TreeItemContext } from '../tree/tree-model';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';

/**
 * @slot default - Tree item content and nested items.
 */
@Component({
  tag: 'ix-tree-item',
  styleUrl: 'tree-item.scss',
  shadow: true,
})
export class TreeItem {
  /**
   * Text
   */
  @Prop() text?: string;

  /**
   * Has tree item children
   */
  @Prop() hasChildren = false;

  /**
   * Context
   */
  @Prop() context?: TreeItemContext;

  /**
   * Disable tree item
   *
   * @since 5.0.0
   */
  @Prop() disabled = false;

  /**
   * ARIA label for the chevron icon
   */
  @Prop() ariaLabelChevronIcon?: string;

  /**
   * Expand/Collapsed toggled
   */
  @Event() toggle!: EventEmitter<void>;

  /**
   * Click on item not on the expand/collapse icon
   */
  @Event() itemClick!: EventEmitter<void>;

  render() {
    const isDisabled = this.disabled || this.context?.isDisabled;

    return (
      <Host
        class={{
          selected: !!this.context?.isSelected,
          disabled: !!isDisabled,
        }}
      >
        <div class="icon-toggle-container">
          {this.hasChildren ? (
            <ix-icon
              name={iconChevronRightSmall}
              size="24"
              class={{
                ['icon-toggle-down']: !!this.context?.isExpanded,
              }}
              color="color-std-text"
              tabIndex={isDisabled ? -1 : 0}
              role="button"
              aria-label={
                this.ariaLabelChevronIcon ??
                (this.context?.isExpanded
                  ? 'Collapse tree item'
                  : 'Expand tree item')
              }
              onClick={(e: Event) => {
                if (isDisabled) {
                  return;
                }
                e.preventDefault();
                e.stopPropagation();
                this.toggle.emit();
              }}
              onKeyDown={(e: KeyboardEvent) => {
                if (isDisabled) {
                  return;
                }
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  e.stopPropagation();
                  this.toggle.emit();
                }
              }}
            />
          ) : null}
        </div>
        <div
          class="tree-node-container"
          role="button"
          tabIndex={isDisabled ? -1 : 0}
          onKeyDown={(e: KeyboardEvent) => {
            if (isDisabled) {
              return;
            }
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation();
              (e.currentTarget as HTMLElement).click();
            }
          }}
          onClick={() => {
            if (isDisabled) {
              return;
            }
            this.itemClick.emit();
          }}
        >
          <div class="tree-node-text">{this.text}</div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

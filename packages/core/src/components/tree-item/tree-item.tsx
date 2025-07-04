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
import { iconChevronRight } from '@siemens/ix-icons/icons';

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
   * Expand/Collapsed toggled
   */
  @Event() toggle!: EventEmitter<void>;

  /**
   * Click on item not on the expand/collapse icon
   */
  @Event() itemClick!: EventEmitter<void>;

  render() {
    return (
      <Host
        class={{
          selected: !!this.context?.isSelected,
        }}
      >
        <div class="icon-toggle-container">
          {this.hasChildren ? (
            <ix-icon
              name={iconChevronRight}
              size="16"
              class={{
                ['icon-toggle-down']: !!this.context?.isExpanded,
              }}
              color="color-std-text"
              onClick={(e: Event) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle.emit();
              }}
            />
          ) : null}
        </div>
        <div
          class="tree-node-container"
          onClick={() => {
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

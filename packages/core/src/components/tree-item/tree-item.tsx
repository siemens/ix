/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { TreeItemContext } from '../tree/tree-model';

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
   * Clicked
   */
  @Event() itemClick!: EventEmitter<void>;

  render() {
    return (
      <Host
        class={{
          selected: !!this.context?.isSelected,
        }}
      >
        <div
          class="icon-toggle-container"
          onClick={(e) => {
            e.preventDefault();
            this.toggle.emit();
          }}
        >
          {this.hasChildren ? (
            <ix-icon
              name={'chevron-right'}
              size="16"
              class={{
                ['icon-toggle-down']: !!this.context?.isExpanded,
              }}
              color={`color-${
                this.context?.isExpanded ? 'primary' : 'std-text'
              }`}
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

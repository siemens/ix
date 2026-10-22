/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { TreeItemContext } from '../tree/tree-model';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import { a11yBoolean } from '../utils/a11y';

/**
 * A single node within a tree.
 *
 * @documentation https://ix.siemens.io//docs/components/tree/code.md
 * @slot - Tree item content.
 */
@Component({
  tag: 'ix-tree-item',
  styleUrl: 'tree-item.scss',
  shadow: true,
})
export class TreeItem {
  @Element() hostElement!: HTMLIxTreeItemElement;

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
   * Disable selection and expansion while keeping the tree item focusable.
   *
   * @since 5.0.0
   */
  @Prop() disabled = false;

  /**
   * ARIA label for the expand/collapse button
   */
  @Prop() ariaLabelChevronIcon?: string;

  /**
   * ARIA label for the expand control when the tree item is collapsed.
   *
   * @since 6.0.0
   */
  @Prop() ariaLabelTreeCollapsed = 'Expand tree item';

  /**
   * ARIA label for the collapse control when the tree item is expanded.
   *
   * @since 6.0.0
   */
  @Prop() ariaLabelTreeExpanded = 'Collapse tree item';

  @State() private navigationTabIndex = 0;

  componentWillLoad() {
    this.navigationTabIndex =
      this.hostElement.dataset.treeNavigationTabIndex === '-1' ? -1 : 0;
  }

  @Listen('treeNavigationIndex')
  onNavigationIndex(event: CustomEvent<number>) {
    this.navigationTabIndex = event.detail;
  }

  /**
   * Expand/Collapsed toggled
   */
  @Event() toggle!: EventEmitter<void>;

  /**
   * Click on item not on the expand/collapse icon
   */
  @Event() itemClick!: EventEmitter<void>;

  private onToggle(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled || this.context?.isDisabled) {
      return;
    }
    this.toggle.emit();
  }

  render() {
    const isDisabled = this.disabled || this.context?.isDisabled;
    const isManagedTree = !!this.hostElement.closest('ix-tree');

    return (
      <Host
        role="treeitem"
        aria-disabled={a11yBoolean(!!isDisabled)}
        tabIndex={this.navigationTabIndex}
        aria-selected={a11yBoolean(!!this.context?.isSelected)}
        aria-expanded={
          this.hasChildren ? a11yBoolean(!!this.context?.isExpanded) : undefined
        }
        class={{
          selected: !!this.context?.isSelected,
          disabled: !!isDisabled,
        }}
        onKeyDown={(event: KeyboardEvent) => {
          if (
            event.composedPath()[0] !== this.hostElement ||
            (event.key !== ' ' && event.key !== 'Enter')
          ) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          if (isDisabled) {
            return;
          }
          this.hostElement.shadowRoot
            ?.querySelector<HTMLElement>('.tree-node-container')
            ?.click();
        }}
      >
        <div class="icon-toggle-container">
          {this.hasChildren ? (
            <span
              class="icon-toggle"
              role="button"
              tabIndex={
                isDisabled || isManagedTree || this.navigationTabIndex < 0
                  ? -1
                  : 0
              }
              aria-disabled={a11yBoolean(!!isDisabled)}
              aria-expanded={a11yBoolean(!!this.context?.isExpanded)}
              aria-label={
                this.ariaLabelChevronIcon ??
                (this.context?.isExpanded
                  ? this.ariaLabelTreeExpanded
                  : this.ariaLabelTreeCollapsed)
              }
              onClick={(event: MouseEvent) => this.onToggle(event)}
              onKeyDown={(event: KeyboardEvent) => {
                if (event.key === ' ' || event.key === 'Enter') {
                  this.onToggle(event);
                }
              }}
            >
              <ix-icon
                name={iconChevronRightSmall}
                size="24"
                class={{
                  'icon-toggle-down': !!this.context?.isExpanded,
                }}
                color="color-std-text"
                aria-hidden="true"
              />
            </span>
          ) : null}
        </div>
        <div
          class="tree-node-container"
          role="button"
          tabIndex={
            isDisabled ? -1 : isManagedTree ? -1 : this.navigationTabIndex
          }
          aria-disabled={a11yBoolean(!!isDisabled)}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.target !== e.currentTarget) {
              return;
            }
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation();
              if (isDisabled) {
                return;
              }
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

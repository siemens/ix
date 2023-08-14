/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  State,
} from '@stencil/core';
import { a11yHostAttributes } from '../utils/a11y';
import { createMutationObserver } from '../utils/mutation-observer';

let sequenceId = 0;
const createId = (prefix: string = '') => {
  return `${prefix}-${sequenceId++}`;
};

@Component({
  tag: 'ix-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Element() hostElement!: HTMLIxBreadcrumbElement;

  /**
   * Excess items will get hidden inside of dropdown
   */
  @Prop() visibleItemCount = 9;

  /**
   * Items will be accessible through a dropdown
   */
  @Prop() nextItems: string[] = [];

  /**
   * Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
   */
  @Prop() ghost = true;

  /**
   * Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list
   * with conditionally hidden previous items
   *
   * @since 2.0.0
   */
  @Prop() ariaLabelPreviousButton = 'previous';

  /**
   * Crumb item clicked event
   */
  @Event() itemClick: EventEmitter<string>;

  /**
   * Next item clicked event
   */
  @Event() nextClick: EventEmitter<{ event: UIEvent; item: string }>;

  @State() previousButtonRef: HTMLElement;
  @State() nextButtonRef: HTMLElement;
  @State() items: HTMLIxBreadcrumbItemElement[] = [];

  private mutationObserver: MutationObserver;

  private onItemClick(item: string) {
    this.itemClick.emit(item);
  }

  componentDidLoad() {
    this.mutationObserver = createMutationObserver(() =>
      this.onChildMutation()
    );

    this.mutationObserver.observe(this.hostElement, {
      subtree: true,
      childList: true,
    });
  }

  componentWillLoad() {
    this.onChildMutation();
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }

  private async onChildMutation() {
    const updatedItems = this.getItems();

    updatedItems.forEach((bc, index) => {
      const shouldShowDropdown =
        this.nextItems.length !== 0 && updatedItems.length - 1 === index;

      bc.ghost = this.ghost;
      bc.showChevron = updatedItems.length - 1 !== index || shouldShowDropdown;
      bc.isDropdownTrigger = shouldShowDropdown;

      if (shouldShowDropdown) {
        this.nextButtonRef = bc;
      }

      if (updatedItems.length < this.visibleItemCount) {
        return;
      }

      bc.visible = index >= updatedItems.length - this.visibleItemCount;
    });

    this.items = updatedItems;
  }

  private getItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
  }

  render() {
    const a11y = a11yHostAttributes(this.hostElement);
    return (
      <Host>
        <ix-dropdown
          trigger={
            this.items?.length > this.visibleItemCount
              ? this.previousButtonRef
              : null
          }
        >
          {this.items
            .slice(0, this.items.length - this.visibleItemCount)
            .map((item) => {
              const label = item.label ?? item.innerText;

              return (
                <ix-dropdown-item
                  label={label}
                  onClick={() => {
                    this.onItemClick(label);
                  }}
                  onItemClick={(event) => event.stopPropagation()}
                ></ix-dropdown-item>
              );
            })}
        </ix-dropdown>
        {this.items?.length > this.visibleItemCount ? (
          <ix-breadcrumb-item
            ref={(ref) => (this.previousButtonRef = ref)}
            label="..."
            tabIndex={1}
            onItemClick={(event) => event.stopPropagation()}
            aria-label={this.ariaLabelPreviousButton}
            class={'previous-button'}
          ></ix-breadcrumb-item>
        ) : null}
        <nav
          class="crumb-items"
          aria-label={a11y['aria-label'] ?? 'breadcrumbs'}
        >
          <ol>
            <slot></slot>
          </ol>
        </nav>
        <ix-dropdown trigger={this.nextButtonRef}>
          {this.nextItems?.map((item) => (
            <ix-dropdown-item
              label={item}
              onClick={(e) => {
                this.nextClick.emit({
                  event: e,
                  item,
                });
              }}
              onItemClick={(event) => event.stopPropagation()}
            ></ix-dropdown-item>
          ))}
        </ix-dropdown>
      </Host>
    );
  }
}

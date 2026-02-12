/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';
import { Mixin } from '../utils/internal/component';
import { createMutationObserver } from '../utils/mutation-observer';

@Component({
  tag: 'ix-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Breadcrumb extends Mixin() {
  @Element() override hostElement!: HTMLIxBreadcrumbElement;

  /**
   * Excess items will get hidden inside of dropdown
   */
  @Prop() visibleItemCount = 9;

  /**
   * Items will be accessible through a dropdown
   */
  @Prop() nextItems: string[] = [];
  @Watch('nextItems')
  onNextItemsChange() {
    this.onChildMutation();
  }

  /**
   * Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
   */
  @Prop() subtle = false;

  /**
   * Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list
   * with conditionally hidden previous items
   */
  @Prop() ariaLabelPreviousButton = 'Show previous breadcrumb items';

  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Crumb item clicked event
   */
  @Event() itemClick!: EventEmitter<string>;

  /**
   * Next item clicked event
   */
  @Event() nextClick!: EventEmitter<{ event: UIEvent; item: string }>;

  @State() items: HTMLIxBreadcrumbItemElement[] = [];
  @State() isNextDropdownExpanded = false;

  @State() shouldRenderNextDropdown = false;

  private mutationObserver?: MutationObserver;
  private inheritAriaAttributes: A11yAttributes = {};

  private onItemClick(item: string) {
    this.itemClick.emit(item);
  }

  override componentDidLoad() {
    this.mutationObserver = createMutationObserver(() =>
      this.onChildMutation()
    );

    this.mutationObserver.observe(this.hostElement, {
      subtree: true,
      childList: true,
    });
  }

  override componentWillLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
    this.onChildMutation();
  }

  override disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }

  private async onChildMutation() {
    const updatedItems = this.getItems();

    updatedItems.forEach((breadcrumbItem, index) => {
      const isLastItem = updatedItems.length - 1 === index;
      const shouldShowDropdown =
        this.nextItems.length !== 0 && isLastItem;

      breadcrumbItem.subtle = this.subtle;
      breadcrumbItem.hideChevron = isLastItem && !shouldShowDropdown;
      breadcrumbItem.isDropdownTrigger = shouldShowDropdown;
      breadcrumbItem.isCurrentPage = isLastItem;

      if (shouldShowDropdown) {
        breadcrumbItem.invisible = true;
      } else {
        breadcrumbItem.invisible =
          index < updatedItems.length - this.visibleItemCount;
      }
    });

    this.shouldRenderNextDropdown = this.nextItems.length !== 0;
    this.items = updatedItems;
  }

  private getItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
  }

  @Watch('isNextDropdownExpanded')
  onNextDropdownExpandedChange() {
    this.onChildMutation();
  }

  override render() {
    const labelLastItem = this.items?.[this.items.length - 1];

    this.inheritAriaAttributes['aria-label'] =
      this.inheritAriaAttributes['aria-label'] ?? 'Breadcrumbs';

    return (
      <Host {...this.inheritAriaAttributes} role="navigation">
        {this.items?.length > this.visibleItemCount && (
          <ix-dropdown-button
            aria-label={this.ariaLabelPreviousButton}
            label="..."
            variant="tertiary"
            class="previous-button"
            enableTopLayer={this.enableTopLayer}
          >
            <ix-icon
              slot="button-label"
              name={iconChevronRightSmall}
              size="16"
              class={'chevron'}
            ></ix-icon>
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
          </ix-dropdown-button>
        )}
        <div class="crumb-items">
          <slot></slot>
        </div>

        {this.shouldRenderNextDropdown && (
          <ix-dropdown-button
            label={labelLastItem.label ?? labelLastItem.innerText}
            class="next-button"
            variant="tertiary"
            enableTopLayer={this.enableTopLayer}
            aria-current="page"
          >
            <ix-icon
              slot="button-label"
              name={iconChevronRightSmall}
              size="16"
              class={'chevron'}
            ></ix-icon>
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
          </ix-dropdown-button>
        )}
      </Host>
    );
  }
}

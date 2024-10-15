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
  forceUpdate,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { createMutationObserver } from '../utils/mutation-observer';
import { makeRef } from '../utils/make-ref';

let sequenceId = 0;
const createId = (prefix: string = 'breadcrumb-') => {
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
  @Watch('nextItems')
  onNextItemsChange() {
    this.onChildMutation();
  }

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
  @Event() itemClick!: EventEmitter<string>;

  /**
   * Next item clicked event
   */
  @Event() nextClick!: EventEmitter<{ event: UIEvent; item: string }>;

  private previousButtonRef = makeRef<HTMLIxBreadcrumbItemElement>();
  private nextButtonRef = makeRef<HTMLElement>();

  @State() items: HTMLIxBreadcrumbItemElement[] = [];
  @State() isPreviousDropdownExpanded = false;

  private mutationObserver!: MutationObserver;

  private previousButtonId = createId();
  private previousDropdownId = createId();

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
        this.nextButtonRef(bc);
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
          id={this.previousDropdownId}
          aria-label={this.ariaLabelPreviousButton}
          trigger={
            this.items?.length > this.visibleItemCount
              ? this.previousButtonRef.waitForCurrent()
              : null
          }
          onShowChanged={({ detail }) => {
            this.isPreviousDropdownExpanded = detail;

            const previousButton = this.hostElement.shadowRoot?.getElementById(
              this.previousButtonId
            );

            // Need to force update previous button to change `aria-expanded`
            if (previousButton) {
              forceUpdate(
                this.hostElement.shadowRoot?.getElementById(
                  this.previousButtonId
                )
              );
            }
          }}
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
            id={this.previousButtonId}
            ref={this.previousButtonRef}
            label="..."
            tabIndex={1}
            onItemClick={(event) => event.stopPropagation()}
            aria-describedby={this.previousDropdownId}
            aria-controls={this.previousDropdownId}
            aria-expanded={a11yBoolean(this.isPreviousDropdownExpanded)}
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
        <ix-dropdown trigger={this.nextButtonRef.waitForCurrent()}>
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

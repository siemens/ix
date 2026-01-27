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
import { makeRef } from '../utils/make-ref';
import { Mixin } from '../utils/internal/component';
import { hasKeyboardMode } from '../utils/internal/mixins/detect-keyboard-mode.mixin';
import { createMutationObserver } from '../utils/mutation-observer';

let sequenceId = 0;
const createId = (prefix: string = 'breadcrumb-') => {
  return `${prefix}-${sequenceId++}`;
};

@Component({
  tag: 'ix-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Breadcrumb extends Mixin() {
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

  private readonly previousButtonRef = makeRef<HTMLIxBreadcrumbItemElement>();
  private readonly nextButtonRef = makeRef<HTMLElement>();

  private readonly previousDropdownRef = makeRef<HTMLIxDropdownElement>();
  private readonly nextDropdownRef = makeRef<HTMLIxDropdownElement>();

  @State() items: HTMLIxBreadcrumbItemElement[] = [];
  @State() isPreviousDropdownExpanded = false;
  @State() isNextDropdownExpanded = false;

  private mutationObserver?: MutationObserver;
  private lastKeyboardNavigation: KeyboardEvent | null = null;

  private previousButtonId = createId();
  private previousDropdownId = createId();

  private nextDropdownId = createId();

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

    updatedItems.forEach((breadcrumbItem, index) => {
      breadcrumbItem.removeAttribute('aria-haspopup');
      breadcrumbItem.removeAttribute('aria-expanded');
      breadcrumbItem.removeAttribute('aria-controls');

      const shouldShowDropdown =
        this.nextItems.length !== 0 && updatedItems.length - 1 === index;

      breadcrumbItem.subtle = this.subtle;
      breadcrumbItem.hideChevron =
        updatedItems.length - 1 === index && !shouldShowDropdown;
      breadcrumbItem.isDropdownTrigger = shouldShowDropdown;

      if (shouldShowDropdown) {
        breadcrumbItem.setAttribute('aria-haspopup', 'true');
        breadcrumbItem.setAttribute(
          'aria-expanded',
          a11yBoolean(this.isNextDropdownExpanded)
        );
        breadcrumbItem.setAttribute('aria-controls', this.nextDropdownId);
        this.nextButtonRef(breadcrumbItem);
      }

      if (updatedItems.length < this.visibleItemCount) {
        return;
      }

      breadcrumbItem.invisible =
        index < updatedItems.length - this.visibleItemCount;
    });

    this.items = updatedItems;
  }

  private getItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
  }

  @Watch('isNextDropdownExpanded')
  onNextDropdownExpandedChange() {
    this.onChildMutation();
  }

  render() {
    const a11y = a11yHostAttributes(this.hostElement);
    return (
      <Host
        onKeyDown={(event: KeyboardEvent) => {
          this.lastKeyboardNavigation = event;
        }}
      >
        <ix-dropdown
          id={this.previousDropdownId}
          ref={this.previousDropdownRef}
          disableFocusTrap
          role="menu"
          aria-labelledby={this.previousButtonRef.current!}
          trigger={
            this.items?.length > this.visibleItemCount
              ? this.previousButtonRef.waitForCurrent()
              : undefined
          }
          enableTopLayer={this.enableTopLayer}
          onShowChanged={({ detail }) => {
            this.isPreviousDropdownExpanded = detail;

            const previousButton = this.hostElement.shadowRoot!.getElementById(
              this.previousButtonId
            );

            // Need to force update previous button to change `aria-expanded`
            if (previousButton) {
              forceUpdate(previousButton);
            }

            if (
              detail === false &&
              hasKeyboardMode() &&
              this.lastKeyboardNavigation?.key === 'Tab' &&
              this.lastKeyboardNavigation.shiftKey === false
            ) {
              const visibleItems = this.getItems().filter(
                (item) => !item.invisible
              );
              visibleItems[0]?.focus();
            }

            this.lastKeyboardNavigation = null;
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
            onItemClick={(event) => event.stopPropagation()}
            aria-haspopup="true"
            aria-label={this.ariaLabelPreviousButton}
            aria-controls={this.previousDropdownId}
            aria-expanded={a11yBoolean(this.isPreviousDropdownExpanded)}
            class={'previous-button ix-focusable'}
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
        <ix-dropdown
          disableFocusTrap
          role="menu"
          id={this.nextDropdownId}
          ref={this.nextDropdownRef}
          trigger={this.nextButtonRef.waitForCurrent()}
          onShowChanged={({ detail }) => {
            this.isNextDropdownExpanded = detail;
            if (
              detail === false &&
              hasKeyboardMode() &&
              this.lastKeyboardNavigation?.key === 'Tab' &&
              this.lastKeyboardNavigation.shiftKey === true
            ) {
              const visibleItems = this.getItems().filter(
                (item) => !item.invisible
              );
              visibleItems[visibleItems.length - 2]?.focus();
            }

            this.lastKeyboardNavigation = null;
          }}
          enableTopLayer={this.enableTopLayer}
        >
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

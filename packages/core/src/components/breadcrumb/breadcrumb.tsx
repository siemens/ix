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
import animejs from 'animejs';
import { a11yBoolean } from '../utils/a11y';
import { createMutationObserver } from '../utils/mutation-observer';

let sequentialInstanceId = 0;

@Component({
  tag: 'ix-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  scoped: true,
})
export class Breadcrumb {
  /**
   * Accessibility label for the entire breadcrumb (MANDATORY)
   */
  @Prop() ixAriaLabel: string = 'Breadrumb';

  /**
   * Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list
   * with conditionally hidden previous items (MANDATORY where applicable)
   */
  @Prop() ixAriaPreviousButtonLabel: string = 'Previous';

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
  @Prop() ghost = false;

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

  @Element() hostElement: HTMLIxBreadcrumbElement;

  get breadcrumbItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
  }

  get crumbItems() {
    return Array.from(this.hostElement.querySelectorAll('.breadcrumb .crumb'));
  }

  @State() items: { label: string; icon?: string }[] = [];

  private mutationObserver: MutationObserver;
  private id = ++sequentialInstanceId;
  private previousButtonExpanded = false;
  private previousDropdownRef = null;
  private nextButtonExpanded = false;
  private nextDropdownRef = null;

  componentDidLoad() {
    this.mutationObserver = createMutationObserver(() => {
      const updatedItems = this.getItems();
      const update = () => {
        this.items = updatedItems;
      };

      if (updatedItems.length >= this.items.length) {
        update();
      } else if (updatedItems.length < this.items.length) {
        const last = this.crumbItems[this.crumbItems.length - 1] as HTMLElement;
        this.animationFadeOut(last, () => update());
      }
    });

    this.mutationObserver.observe(
      this.hostElement.querySelector('.breadcrumb'),
      {
        subtree: true,
        childList: true,
      }
    );
  }

  componentWillLoad() {
    this.items = this.getItems();
  }

  private getItems() {
    return this.breadcrumbItems.map((item) => {
      return { label: item.label, icon: item.icon };
    });
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }

  private animationFadeOut(ref: HTMLElement, complete: () => void) {
    animejs({
      targets: ref,
      translateX: '-100%',
      duration: 150,
      opacity: [1, 0],
      easing: 'linear',
      complete: () => complete(),
    });
  }

  private animationFadeIn(ref: HTMLElement) {
    animejs({
      targets: ref,
      duration: 150,
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      easing: 'linear',
    });
  }

  private handleLastButtonRef(ref: HTMLElement) {
    this.animationFadeIn(ref);
    if (this.nextItems?.length) {
      this.nextButtonRef = ref;
    }
  }

  private onPreviousDropdownShowChanged(e: Event) {
    if (this.previousButtonExpanded != this.previousDropdownRef.show) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.previousButtonExpanded = this.previousDropdownRef.show;
      this.previousButtonRef.setAttribute(
        'aria-expanded',
        a11yBoolean(this.previousButtonExpanded)
      );
    }
  }

  private onNextDropdownShowChanged(e: Event) {
    if (this.nextButtonExpanded != this.nextDropdownRef.show) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.nextButtonExpanded = this.nextDropdownRef.show;
      this.nextButtonRef.setAttribute(
        'aria-expanded',
        a11yBoolean(this.nextButtonExpanded)
      );
    }
  }

  private sliceHiddenItems() {
    let sliceIndex = 0;

    if (this.items.length > this.visibleItemCount) {
      sliceIndex = this.items.length - this.visibleItemCount;
    }

    return this.items.slice(sliceIndex);
  }

  private renderPreviousButton() {
    if (this.items?.length > this.visibleItemCount) {
      const previousButtonId = 'ix-bc' + this.id + '-previous-button';
      const previousDropdownId = 'ix-bc' + this.id + '-previous-dropdown';
      // Return list entry with dropdown button and its dropdown
      // for conditionally hidden previous items
      // (Disclosure Navigation Menu)
      return (
        <li>
          <button
            ref={(ref) => (this.previousButtonRef = ref)}
            class={{
              crumb: true,
              btn: !this.ghost,
              ghost: this.ghost,
            }}
            type="button"
            id={previousButtonId}
            aria-label={this.ixAriaPreviousButtonLabel}
            aria-controls={previousDropdownId}
            aria-expanded={a11yBoolean(this.previousButtonExpanded)}
          >
            <span class="crumb-text remove-anchor">…</span>
            <span class="glyph glyph-18 glyph-chevron-right-small text-default-text"></span>
          </button>
          <ix-dropdown
            ref={(ref) => {
              this.previousDropdownRef = ref;
            }}
            id={previousDropdownId}
            aria-label={this.ixAriaPreviousButtonLabel}
            trigger={this.previousButtonRef}
            onShowChanged={(e) => this.onPreviousDropdownShowChanged(e)}
          >
            {this.items
              .slice(0, this.items.length - this.visibleItemCount)
              .map((item) => (
                <ix-dropdown-item
                  label={item.label}
                  onClick={() => this.itemClick.emit(item.label)}
                ></ix-dropdown-item>
              ))}
          </ix-dropdown>
        </li>
      );
    } else {
      return null;
    }
  }

  private renderVisibleItems() {
    return this.sliceHiddenItems().map((item, index, array) => {
      const isLastVisibleItem = index === array.length - 1;
      if (!isLastVisibleItem) {
        return (
          <li>
            <button
              class={{
                crumb: true,
                ghost: this.ghost,
                btn: !this.ghost,
              }}
              type="button"
              onClick={() => this.itemClick.emit(item.label)}
              data-breadcrumb={index}
              data-testid="item"
            >
              <span class="crumb-text remove-anchor">
                {item.icon ? (
                  <ix-icon name={item.icon} size="16"></ix-icon>
                ) : (
                  ''
                )}
                {item.label}
              </span>
              <span class="glyph glyph-18 glyph-chevron-right-small text-default-text"></span>
            </button>
          </li>
        );
      } else if (!this.nextItems?.length) {
        return (
          <li>
            <button
              ref={(ref) => this.handleLastButtonRef(ref)}
              class={{
                crumb: true,
                ghost: this.ghost,
                btn: !this.ghost,
                last: true,
                'remove-hover': true,
              }}
              type="button"
              tabIndex={-1}
              aria-current="page"
              data-breadcrumb={index}
              data-testid="item"
            >
              <span class="crumb-text remove-anchor">
                {item.icon ? (
                  <ix-icon name={item.icon} size="16"></ix-icon>
                ) : (
                  ''
                )}
                {item.label}
              </span>
            </button>
          </li>
        );
      } else {
        const nextButtonId = 'ix-bc' + this.id + '-next-button';
        const nextDropdownId = 'ix-bc' + this.id + '-next-dropdown';
        // Return list entry with dropdown button and its dropdown
        // for conditionally available next items
        // (Disclosure Navigation Menu)
        return (
          <li>
            <button
              ref={(ref) => this.handleLastButtonRef(ref)}
              class={{
                crumb: true,
                ghost: this.ghost,
                btn: !this.ghost,
              }}
              type="button"
              id={nextButtonId}
              aria-current="page"
              aria-controls={nextDropdownId}
              aria-expanded={a11yBoolean(this.nextButtonExpanded)}
              data-breadcrumb={index}
              data-testid="item"
            >
              <span class="crumb-text remove-anchor">
                {item.icon ? (
                  <ix-icon name={item.icon} size="16"></ix-icon>
                ) : (
                  ''
                )}
                {item.label}
              </span>
              <span class="glyph glyph-18 glyph-chevron-right-small text-default-text"></span>
            </button>
            <ix-dropdown
              ref={(ref) => {
                this.nextDropdownRef = ref;
              }}
              id={nextDropdownId}
              aria-label={item.label}
              trigger={this.nextButtonRef}
              onShowChanged={(e) => this.onNextDropdownShowChanged(e)}
            >
              {this.nextItems?.map((item) => (
                <ix-dropdown-item
                  label={item}
                  onClick={(e) => {
                    this.nextClick.emit({ event: e, item });
                  }}
                ></ix-dropdown-item>
              ))}
            </ix-dropdown>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <Host>
        <nav class="breadcrumb" aria-label={this.ixAriaLabel}>
          <ol>
            {this.renderPreviousButton()}
            {this.renderVisibleItems()}
          </ol>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}

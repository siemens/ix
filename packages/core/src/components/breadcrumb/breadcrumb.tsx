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
import { createMutationObserver } from '../utils/mutation-observer';

@Component({
  tag: 'ix-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  scoped: true,
})
export class Breadcrumb {
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
    return Array.from(this.hostElement.querySelectorAll('.crumb-items .crumb'));
  }

  @State() items: { label: string; icon?: string }[] = [];

  private mutationObserver: MutationObserver;

  private onItemClick(item: string) {
    this.itemClick.emit(item);
  }

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
      this.hostElement.querySelector('.crumb-items'),
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

  private handleLastButtonRef(ref: HTMLDivElement, last: boolean) {
    if (last) {
      this.animationFadeIn(ref);
    }
    if (last && this.nextItems?.length) {
      this.nextButtonRef = ref;
    }
  }

  private sliceHiddenItems() {
    let sliceIndex = 0;

    if (this.items.length > this.visibleItemCount) {
      sliceIndex = this.items.length - this.visibleItemCount;
    }

    return this.items.slice(sliceIndex);
  }

  private clickItem(item: string, last: boolean) {
    if (!last) {
      this.onItemClick(item);
    }
  }

  private renderBreadcrumbItems() {
    return this.sliceHiddenItems().map((item, index, array) => {
      const last = index === array.length - 1;

      const isLastItem = last && !this.nextItems?.length;
      return (
        <div
          ref={(ref) => this.handleLastButtonRef(ref, last)}
          data-breadcrumb={index}
          class={{
            crumb: true,
            clickable: true,
            ghost: this.ghost,
            btn: !this.ghost,
            last: isLastItem,
            'remove-hover': isLastItem,
          }}
          onClick={() => this.clickItem(item.label, last)}
          data-testid="item"
        >
          <span class="crumb-text remove-anchor">
            {item.icon ? <ix-icon name={item.icon} size="16"></ix-icon> : ''}
            <span
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.label}
            </span>
          </span>
          {!isLastItem ? (
            <span class="glyph glyph-18 glyph-chevron-right-small text-default-text"></span>
          ) : null}
        </div>
      );
    });
  }

  render() {
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
            .map((item) => (
              <ix-dropdown-item
                label={item.label}
                onClick={() => this.onItemClick(item.label)}
              ></ix-dropdown-item>
            ))}
        </ix-dropdown>
        {this.items?.length > this.visibleItemCount ? (
          <div
            class="crumb crumb-dropdown"
            ref={(ref) => (this.previousButtonRef = ref)}
          >
            <span class="remove-anchor more-text">
              <span class="more-text-ellipsis">...</span>
              <span class="glyph glyph-16 glyph-chevron-right"></span>
            </span>
          </div>
        ) : null}
        <div class="crumb-items">
          {this.renderBreadcrumbItems()}
          <slot></slot>
        </div>
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
            ></ix-dropdown-item>
          ))}
        </ix-dropdown>
      </Host>
    );
  }
}

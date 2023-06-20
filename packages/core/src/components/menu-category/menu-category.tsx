/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import anime from 'animejs';

const DefaultIxMenuItemHeight = 48;
const DefaultAnimationTimeout = 150;

@Component({
  tag: 'ix-menu-category',
  styleUrl: 'menu-category.scss',
  shadow: true,
})
export class MenuCategory {
  @Element() hostElement: HTMLIxMenuCategoryElement;

  /**
   * Display name of the category
   */
  @Prop() label: string;

  /**
   * Icon of the category
   */
  @Prop() icon: string;

  @State() showItems = false;

  private getNestedItemHeight() {
    const items = Array.from(
      this.hostElement.querySelectorAll(':scope > ix-menu-item')
    );

    return items.length * DefaultIxMenuItemHeight;
  }

  private menuItemsContainer: HTMLDivElement;

  private onCategoryClick() {
    console.log(this.getNestedItemHeight());
    if (!this.showItems) {
      this.animateFadeIn();
    } else {
      this.animateFadeOut();
    }
  }

  private animateFadeOut() {
    const slotHideThresholdMs = 25;

    anime({
      targets: this.menuItemsContainer,
      duration: DefaultAnimationTimeout,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      opacity: [1, 0],
      maxHeight: [this.getNestedItemHeight() + DefaultIxMenuItemHeight, 0],
      complete: () => {
        setTimeout(() => {
          this.showItems = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      },
    });
  }

  private animateFadeIn() {
    anime({
      targets: this.menuItemsContainer,
      duration: DefaultAnimationTimeout,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemHeight() + DefaultIxMenuItemHeight],

      begin: () => {
        this.showItems = true;
      },
    });
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.showItems,
        }}
      >
        <ix-menu-item icon={this.icon} onClick={() => this.onCategoryClick()}>
          <div class="category">
            {this.label}{' '}
            <ix-icon
              name="chevron-down-small"
              class={{
                'category-chevron': true,
                'category-chevron--open': this.showItems,
              }}
            ></ix-icon>
          </div>
        </ix-menu-item>
        <div
          ref={(ref) => (this.menuItemsContainer = ref)}
          class={{ 'menu-items': true, 'menu-items--expanded': this.showItems }}
        >
          {this.showItems ? <slot></slot> : null}
        </div>
      </Host>
    );
  }
}

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
import { createMutationObserver } from '../utils/mutation-observer';
import { menuContext } from '../utils/screen/context';

const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;

/**
 * @since 2.0.0
 */
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

  /**
   * Show notification count on the category
   */
  @Prop() notifications: number;

  @State() menuExpand = false;
  @State() showItems = false;
  @State() showDropdown = false;
  @State() nestedItems: HTMLIxMenuItemElement[] = [];

  private observer: MutationObserver;
  private menuItemsContainer: HTMLDivElement;
  private ixMenu: HTMLIxMenuElement;

  private isNestedItemActive() {
    return this.getNestedItems().some((item) => item.active);
  }

  private getNestedItems() {
    return Array.from(
      this.hostElement.querySelectorAll(':scope > ix-menu-item')
    ) as HTMLIxMenuItemElement[];
  }

  private getNestedItemsHeight() {
    const items = this.getNestedItems();

    return items.length * DefaultIxMenuItemHeight;
  }

  private onExpandCategory(showItems: boolean) {
    if (showItems) {
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
      easing: 'easeInSine',
      opacity: [1, 0],
      maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
      complete: () => {
        setTimeout(() => {
          this.showItems = false;
          this.showDropdown = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      },
    });
  }

  private animateFadeIn() {
    anime({
      targets: this.menuItemsContainer,
      duration: DefaultAnimationTimeout,
      easing: 'easeInSine',
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      begin: () => {
        this.showItems = true;
        this.showDropdown = false;
      },
    });
  }

  private onCategoryClicked(e?: MouseEvent) {
    if (this.ixMenu.expand) {
      e?.stopPropagation();
      this.onExpandCategory(!this.showItems);
      return;
    }

    this.showDropdown = !this.showDropdown;
  }

  private onNestedItemsChanged() {
    this.nestedItems = this.getNestedItems();
  }

  private isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }

  componentDidLoad() {
    const closestMenu = menuContext(this.hostElement);
    if (!closestMenu) {
      throw Error('ix-menu-category can only be used as a child of ix-menu');
    }
    this.ixMenu = closestMenu;

    this.observer = createMutationObserver(() => this.onNestedItemsChanged());
    this.observer.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    requestAnimationFrame(() => {
      this.onNestedItemsChanged();
    });

    this.ixMenu.addEventListener(
      'expandChange',
      ({ detail: menuExpand }: CustomEvent<boolean>) => {
        this.menuExpand = menuExpand;

        this.showItems = this.isCategoryItemListVisible();
      }
    );
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.showItems,
        }}
      >
        <ix-menu-item
          class={'category-parent'}
          active={this.isNestedItemActive()}
          notifications={this.notifications}
          icon={this.icon}
          onClick={(e) => this.onCategoryClicked(e)}
        >
          <div class="category">
            {this.label}
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
          ref={(ref) => (this.menuItemsContainer = ref!)}
          class={{
            'menu-items': true,
            'menu-items--expanded': this.showItems,
          }}
        >
          {this.showItems ? <slot></slot> : null}
        </div>
        <ix-dropdown
          closeBehavior={'both'}
          show={this.showDropdown}
          onShowChanged={({ detail: dropdownShown }: CustomEvent<boolean>) => {
            this.showDropdown = dropdownShown;
          }}
          class={'category-dropdown'}
          anchor={this.hostElement}
          placement="right-start"
          offset={{
            mainAxis: 3,
          }}
          onClick={(e) => {
            if (e.target instanceof HTMLElement) {
              if (e.target.tagName === 'IX-MENU-ITEM') {
                this.showDropdown = false;
              }
            }
          }}
        >
          <ix-dropdown-item class={'category-dropdown-header'}>
            <ix-typography variant="default-title-single" color="std">
              {this.label}
            </ix-typography>
          </ix-dropdown-item>
          <ix-divider></ix-divider>
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}

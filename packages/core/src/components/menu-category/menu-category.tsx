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
  h,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
  Listen,
} from '@stencil/core';
import anime from 'animejs';
import { closestIxMenu } from '../utils/application-layout/context';
import { createMutationObserver } from '../utils/mutation-observer';
import { createEnterLeaveDebounce } from './enter-leave';

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
  @Element() hostElement!: HTMLIxMenuCategoryElement;

  /**
   * Display name of the category
   */
  @Prop() label?: string;

  /**
   * Icon of the category
   */
  @Prop() icon?: string;

  /**
   * Show notification count on the category
   */
  @Prop() notifications?: number;

  /** @internal */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Event({ bubbles: true, cancelable: true })
  closeOtherCategories!: EventEmitter;

  @State() menuExpand = false;
  @State() showItems = false;
  @State() showDropdown = false;
  @State() nestedItems: HTMLIxMenuItemElement[] = [];

  private observer?: MutationObserver;
  private menuItemsContainer?: HTMLDivElement;
  private ixMenu?: HTMLIxMenuElement;

  private enterLeaveDebounce = createEnterLeaveDebounce(
    () => {
      this.onPointerEnter();
    },
    () => {
      this.onPointerLeave();
    }
  );

  private isNestedItemActive() {
    return this.getNestedItems().some((item) => item.active);
  }

  private getNestedItems() {
    return Array.from(
      this.hostElement.querySelectorAll(':scope ix-menu-item')
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
      complete: () => {
        this.menuItemsContainer!.removeAttribute('max-height');
        this.setMenuItemsContainerMaxHeight();
      }
    });
  }

  private onPointerEnter() {
    if (this.ixMenu?.expand) {
      return;
    }
    this.closeOtherCategories.emit();
    this.showDropdown = true;
  }

  @Listen('closeOtherCategories', { target: 'window' })
  private onPointerLeave() {
    this.showDropdown = false;
  }

  private onCategoryClick(e: MouseEvent) {
    e.stopPropagation();
    if (this.ixMenu?.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }
  }

  private onNestedItemsChanged(mutations?: MutationRecord[]) {
    const oldNestedItemsLength: number = this.nestedItems.length;
    this.nestedItems = this.getNestedItems();

    if (this.showItems && oldNestedItemsLength !== this.nestedItems.length) {
      this.setMenuItemsContainerMaxHeight();
    }

    if (!this.menuExpand || this.showItems || !mutations) {
      return;
    }

    for (const mutation of mutations ?? []) {
      if (
        mutation.attributeName === 'class' &&
        mutation.target instanceof HTMLElement &&
        mutation.target.classList.contains('active')
      ) {
        this.showItems = true;
        this.onExpandCategory(true);
        return;
      }
    }
  }

  private setMenuItemsContainerMaxHeight() {
    if (this.menuItemsContainer) {
      this.menuItemsContainer.style.maxHeight = `${this.getNestedItemsHeight() + DefaultIxMenuItemHeight}px`;
    }
  }

  private isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }

  componentWillLoad() {
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error('ix-menu-category can only be used as a child of ix-menu');
    }
    this.ixMenu = closestMenu;

    this.menuExpand = this.ixMenu.expand;
    this.showItems = this.isCategoryItemListVisible();
  }

  componentDidLoad() {
    this.observer = createMutationObserver((mutations: MutationRecord[]) =>
      this.onNestedItemsChanged(mutations)
    );

    this.observer.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    requestAnimationFrame(() => {
      this.onNestedItemsChanged();
    });

    this.ixMenu?.addEventListener(
      'expandChange',
      ({ detail: menuExpand }: CustomEvent<boolean>) => {
        this.menuExpand = menuExpand;
        if (!menuExpand) {
          this.clearMenuItemStyles();
        }
        this.showItems = this.isCategoryItemListVisible();
      }
    );
  }

  clearMenuItemStyles() {
    this.menuItemsContainer?.style.removeProperty('max-height');
    this.menuItemsContainer?.style.removeProperty('opacity');
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
        onPointerEnter={() => {
          this.enterLeaveDebounce.onEnter();
        }}
        onPointerLeave={(event: PointerEvent) => {
          if (event.pointerType === 'touch') {
            return;
          }
          this.enterLeaveDebounce.onLeave();
        }}
      >
        <ix-menu-item
          class={'category-parent'}
          active={this.isNestedItemActive()}
          notifications={this.notifications}
          icon={this.icon}
          onClick={(e) => this.onCategoryClick(e)}
          onFocus={() => this.onPointerEnter()}
          isCategory
        >
          <div class="category">
            <div class="category-text">{this.label}</div>
            <ix-icon
              name={'chevron-down-small'}
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
            'menu-items--collapsed': !this.showItems,
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
              } else {
                e.preventDefault();
              }
            }
          }}
        >
          <ix-dropdown-item class={'category-dropdown-header'}>
            <ix-typography format="label" bold color="std">
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

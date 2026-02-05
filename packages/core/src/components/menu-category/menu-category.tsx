/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
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
  Watch,
} from '@stencil/core';
import { animate } from 'animejs';
import { closestIxMenu } from '../utils/application-layout/context';
import { Mixin } from '../utils/internal/component';
import { createMutationObserver } from '../utils/mutation-observer';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import type { IxMenuItemBase } from './../menu-item/menu-item.interface';
import { createEnterLeaveDebounce } from './enter-leave';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;

@Component({
  tag: 'ix-menu-category',
  styleUrl: 'menu-category.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class MenuCategory extends Mixin() implements IxMenuItemBase {
  @Element() override hostElement!: HTMLIxMenuCategoryElement;

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

  /**
   * Will be shown as tooltip text, if not provided menu text content will be used.
   *
   * @since 4.0.0
   */
  @Prop() tooltipText?: string;

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
      this.showMenuItemDropdown();
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
    animate(this.menuItemsContainer!, {
      duration: DefaultAnimationTimeout,
      easing: 'easeInSine',
      opacity: [1, 0],
      maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
      onComplete: () => {
        setTimeout(() => {
          this.showItems = false;
          this.showDropdown = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      },
    });
  }

  private animateFadeIn() {
    animate(this.menuItemsContainer!, {
      duration: DefaultAnimationTimeout,
      easing: 'easeInSine',
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      onBegin: () => {
        this.showItems = true;
        this.showDropdown = false;
      },
    });
  }

  private showMenuItemDropdown() {
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

  private handleCategoryVisibility() {
    if (this.ixMenu?.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }

    this.showMenuItemDropdown();
  }

  private onCategoryClick(event: MouseEvent) {
    event.stopPropagation();
    this.handleCategoryVisibility();
  }

  private onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleCategoryVisibility();

      const items = this.getNestedItems();
      const firstItem = items[0];
      if (firstItem) {
        requestAnimationFrameNoNgZone(() => firstItem.focus());
      }
    }
  }

  private onNestedItemsChanged(mutations?: MutationRecord[]) {
    const oldNestedItemsLength = this.nestedItems.length;
    this.nestedItems = this.getNestedItems();

    if (
      this.showItems &&
      this.menuItemsContainer &&
      oldNestedItemsLength !== this.nestedItems.length
    ) {
      this.menuItemsContainer.style.maxHeight = `${
        this.getNestedItemsHeight() + DefaultIxMenuItemHeight
      }px`;
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

  private isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }

  override componentWillLoad() {
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error('ix-menu-category can only be used as a child of ix-menu');
    }
    this.ixMenu = closestMenu;

    this.menuExpand = this.ixMenu.expand;
    this.showItems = this.isCategoryItemListVisible();
  }

  override componentDidLoad() {
    this.observer = createMutationObserver((mutations: MutationRecord[]) =>
      this.onNestedItemsChanged(mutations)
    );

    this.observer.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      subtree: true,
    });

    requestAnimationFrameNoNgZone(() => {
      this.onNestedItemsChanged();
      this.onShowItemsChange();
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

  @Watch('showDropdown')
  @Watch('showItems')
  onShowItemsChange() {
    this.getNestedItems().forEach((item) => {
      item.hidden = !this.showItems && !this.showDropdown;
    });
  }

  override disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  override render() {
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
          onKeyDown={(event) => this.onKeyDown(event)}
          tooltipText={this.tooltipText}
          isCategory
        >
          <div class="category">
            <div class="category-text">{this.label}</div>
            <ix-icon
              name={iconChevronDownSmall}
              class={{
                'category-chevron': true,
                'category-chevron--open': this.showItems,
              }}
              aria-hidden="true"
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
          disableFocusTrap
          show={this.showDropdown}
          onShowChanged={({ detail: dropdownShown }: CustomEvent<boolean>) => {
            this.showDropdown = dropdownShown;

            // TODO Cause a false focus shift, if keyboard navigation through content
            // Then hover and leave via mouse case a focus change to the menu item
            if (
              this.showItems === false &&
              dropdownShown === false &&
              hasKeyboardMode()
            ) {
              this.hostElement.focus();
            }
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
          <ix-dropdown-item class={'category-dropdown-header'} tabindex={-1}>
            <ix-typography format="label" bold textColor="std">
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

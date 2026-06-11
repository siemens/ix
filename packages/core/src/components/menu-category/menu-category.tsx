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
  Method,
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { animate } from 'animejs';
import { closestIxMenu } from '../utils/application-layout/context';
import { createMutationObserver } from '../utils/mutation-observer';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import type { IxMenuItemBase } from './../menu-item/menu-item.interface';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { DefaultMixins } from '../utils/internal/component';
import { getComposedPath } from '../utils/shadow-dom';
import { makeRef } from '../utils/make-ref';
import { dropdownController } from '../dropdown/dropdown-controller';
import { createSequentialId } from '../utils/uuid';

const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
let categorySequenceId = 0;

@Component({
  tag: 'ix-menu-category',
  styleUrl: 'menu-category.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class MenuCategory
  extends Mixin(...DefaultMixins)
  implements IxMenuItemBase
{
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
  @Event({ bubbles: true, cancelable: true })
  closeOtherCategories!: EventEmitter;

  @State() menuExpand = false;
  @State() showItems = false;
  @State() showDropdown = false;
  @State() nestedItems: HTMLIxMenuItemElement[] = [];

  /** @internal */
  @Method()
  async setTabIndex(value: number) {
    await this.categoryParentRef.current?.setTabIndex(value);
  }

  private observer?: MutationObserver;
  private menuItemsContainer?: HTMLDivElement;
  private ixMenu?: HTMLIxMenuElement;

  private readonly dropdownRef = makeRef<HTMLIxDropdownElement>();
  private readonly categoryParentRef = makeRef<HTMLIxMenuItemElement>();
  private readonly categoryId = createSequentialId(
    'ix-menu-category-',
    categorySequenceId++
  );
  private focusFirstItemOnDropdownOpen = false;

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
    this.showItems = true;
    this.showDropdown = false;

    animate(this.menuItemsContainer!, {
      duration: DefaultAnimationTimeout,
      easing: 'easeInSine',
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
    });
  }

  private showMenuItemDropdown() {
    if (this.ixMenu?.expand) {
      return;
    }
    this.closeOtherCategories.emit();

    if (this.dropdownRef.current) {
      const ref = dropdownController.getDropdownById(
        this.dropdownRef.current.dataset.ixDropdown!
      );

      if (ref) {
        dropdownController.present(ref);
      }
    }
  }

  @Listen('closeOtherCategories', { target: 'window' })
  private hideMenuItemDropdown() {
    if (this.dropdownRef.current) {
      const ref = dropdownController.getDropdownById(
        this.dropdownRef.current.dataset.ixDropdown!
      );

      if (ref) {
        dropdownController.dismiss(ref);
      }
    }
  }

  private handleCategoryVisibility() {
    if (this.ixMenu?.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }

    this.showMenuItemDropdown();
  }

  private onDropdownShowChange(dropdownShow: boolean) {
    if (dropdownShow) {
      return;
    }

    const activeElement = document.activeElement;
    const isFocused = getComposedPath(activeElement as HTMLElement).includes(
      this.hostElement
    );

    if (hasKeyboardMode() && isFocused) {
      // Ugly workaround to restore focus to the category after the dropdown is closed,
      // because focus gets lost when the dropdown is removed from the DOM.
      // This is needed to ensure keyboard users can continue navigating after closing the dropdown with the keyboard.
      requestAnimationFrameNoNgZone(() =>
        requestAnimationFrameNoNgZone(() => this.hostElement.focus())
      );
    }
  }

  private onDropdownShowChanged(dropdownShown: boolean) {
    this.showDropdown = dropdownShown;

    if (!dropdownShown) {
      this.focusFirstItemOnDropdownOpen = false;

      return;
    }

    if (this.focusFirstItemOnDropdownOpen) {
      this.focusFirstItemOnDropdownOpen = false;

      const items = this.getNestedItems();
      const firstItem = items[0];

      if (firstItem) {
        requestAnimationFrameNoNgZone(() =>
          requestAnimationFrameNoNgZone(() => firstItem.focus())
        );
      }
    }
  }

  private onDropdownFocusOut() {
    requestAnimationFrameNoNgZone(() => {
      const activeElement = document.activeElement as HTMLElement | null;

      if (!activeElement) {
        return;
      }

      const activePath = getComposedPath(activeElement);
      const focusInsideCategory = activePath.includes(this.hostElement);
      const focusInsideDropdown =
        !!this.dropdownRef.current &&
        activePath.includes(this.dropdownRef.current);

      if (!focusInsideCategory && !focusInsideDropdown) {
        this.showDropdown = false;
      }
    });
  }

  private onNestedItemSelect() {
    if (!this.ixMenu?.expand) {
      this.showDropdown = false;
    }
  }

  private onCategoryClick(event: MouseEvent) {
    event.stopPropagation();
    this.handleCategoryVisibility();
  }

  private onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const isClosingPanel = this.ixMenu?.expand && this.showItems;
      const isCollapsedMenu = !this.ixMenu?.expand;
      this.handleCategoryVisibility();

      if (!isClosingPanel) {
        if (isCollapsedMenu) {
          // In collapsed mode, wait until the dropdown is fully shown before moving focus.
          this.focusFirstItemOnDropdownOpen = true;

          return;
        }

        const items = this.getNestedItems();
        const firstItem = items[0];
        if (firstItem) {
          requestAnimationFrameNoNgZone(() =>
            requestAnimationFrameNoNgZone(() => firstItem.focus())
          );
        }
      }
    }
  }

  private onMenuItemsKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.categoryParentRef.current?.focus();
      this.handleCategoryVisibility();
      return;
    }

    if (
      event.key !== 'ArrowDown' &&
      event.key !== 'ArrowUp' &&
      event.key !== 'Tab'
    ) {
      return;
    }

    const items = this.getNestedItems();
    if (items.length === 0) {
      return;
    }

    const path = event.composedPath();
    const currentIndex = items.findIndex((item) => path.includes(item));
    if (currentIndex === -1) {
      return;
    }

    event.preventDefault();

    if (event.key === 'ArrowDown' || (event.key === 'Tab' && !event.shiftKey)) {
      items[(currentIndex + 1) % items.length].focus();
    } else {
      items[(currentIndex - 1 + items.length) % items.length].focus();
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
        onIxMenuCategoryItemSelect={() => this.onNestedItemSelect()}
        onPointerEnter={() => {
          this.showMenuItemDropdown();
        }}
        onPointerLeave={(event: PointerEvent) => {
          if (event.pointerType === 'touch') {
            return;
          }
          this.hideMenuItemDropdown();
        }}
      >
        <ix-menu-item
          aria-haspopup={'menu'}
          aria-expanded={this.showItems || this.showDropdown ? 'true' : 'false'}
          id={this.categoryId}
          ref={this.categoryParentRef}
          class={'category-parent'}
          active={this.isNestedItemActive()}
          notifications={this.notifications}
          icon={this.icon}
          onClick={(e) => this.onCategoryClick(e)}
          onKeyDown={(event) => this.onKeyDown(event)}
          tooltipText={this.tooltipText}
          isCategory
          menuCategoryLabel={this.label}
        >
          <span class="category">
            <span class="category-text">{this.label}</span>
            <ix-icon
              name={iconChevronDownSmall}
              class={{
                'category-chevron': true,
                'category-chevron--open': this.showItems,
              }}
              aria-hidden="true"
            ></ix-icon>
          </span>
        </ix-menu-item>
        <div
          ref={(ref) => (this.menuItemsContainer = ref!)}
          class={{
            'menu-items': true,
            'menu-items--expanded': this.showItems,
            'menu-items--collapsed': !this.showItems,
          }}
          role="menu"
          aria-labelledby={this.categoryId}
          onKeyDown={(e) => this.onMenuItemsKeyDown(e)}
        >
          {this.showItems ? <slot></slot> : null}
        </div>
        <ix-dropdown
          ref={this.dropdownRef}
          hostRole="menu"
          aria-label={this.label}
          closeBehavior={'both'}
          show={this.showDropdown}
          onShowChange={({ detail }) => this.onDropdownShowChange(detail)}
          onShowChanged={({ detail }) => this.onDropdownShowChanged(detail)}
          class={'category-dropdown'}
          anchor={this.hostElement}
          placement="right-start"
          offset={{
            mainAxis: 3,
          }}
          focusHost={this.hostElement}
          onClick={(e) => {
            if (e.target instanceof HTMLElement) {
              if (e.target.tagName === 'IX-MENU-ITEM') {
                this.showDropdown = false;
              } else {
                e.preventDefault();
              }
            }
          }}
          onFocusout={() => this.onDropdownFocusOut()}
        >
          <ix-dropdown-item
            class={'category-dropdown-header'}
            tabindex={-1}
            aria-hidden="true"
          >
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

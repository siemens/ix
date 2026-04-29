/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconMoreMenu } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import { TabClickDetail } from '../tab-item/tab-item.types';
import { emitEvent } from '../utils/event';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { DefaultMixins } from '../utils/internal/component';
import { InheritAriaAttributesMixin } from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';

@Component({
  tag: 'ix-tabs',
  styleUrl: 'tabs.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class Tabs extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  @Element() override hostElement!: HTMLIxTabsElement;

  /**
   * Set tab items to small size
   */
  @Prop() small = false;

  /**
   * Set rounded tabs
   */
  @Prop() rounded = false;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Set placement style
   */
  @Prop() placement: 'bottom' | 'top' = 'bottom';

  /**
   * Aria label for the overflow menu button.
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelMoreTabs = 'Show all tabs';

  /**
   * Active tab key.
   *
   * @since 5.0.0
   */
  @Prop({ mutable: true, reflect: true }) activeTabKey?: string;

  /**
   * Keyboard interaction behavior:
   * automatic:  A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus.
   * manual: A tabs widget where users activate a tab and display its panel by pressing Space or Enter.
   *
   * @since 5.0.0
   */
  @Prop() keyboardNavigation: 'automatic' | 'manual' = 'automatic';

  /**
   * Tab selection event. Event detail contains the new active tab key.
   *
   * @since 5.0.0
   */
  @Event() tabChange!: EventEmitter<string | undefined>;

  /**
   * Tab close event. Event detail contains the closed tab key.
   *
   * @since 5.0.0
   */
  @Event() tabClose!: EventEmitter<string | undefined>;

  @State() private isTabsOverflow = false;
  @State() private overflowMenuItems: {
    tabKey: string;
    label: string;
    icon?: string;
    disabled?: boolean;
  }[] = [];

  private resizeObserver?: ResizeObserver;
  private itemsObserver?: MutationObserver;

  private readonly tabsContainerRef = makeRef<HTMLDivElement>();
  private readonly tabsRef = makeRef<HTMLDivElement>();

  private get tabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-tab-item'));
  }

  override componentDidLoad() {
    this.itemsObserver = new MutationObserver(() =>
      this.onComponentChildrenChange()
    );
    this.itemsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
    });

    this.resizeObserver = new ResizeObserver(() => this.onComponentResize());
    this.resizeObserver.observe(this.hostElement);

    this.onComponentResize();
  }

  override componentWillLoad() {
    this.onComponentChildrenChange();
    if (this.activeTabKey) {
      this.setTabActive(this.activeTabKey);
    }
  }

  override disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.itemsObserver) {
      this.itemsObserver.disconnect();
    }
  }

  @Watch('activeTabKey')
  onActiveTabChange(tabKey: string | undefined, oldTabKey: string | undefined) {
    const activeTab = this.tabs.find((tab) => tab.selected);

    if (activeTab?.tabKey === tabKey) {
      return;
    }

    this.emitTabChangeEvent(tabKey, oldTabKey);
  }

  private setTabActive(tabKey: string | undefined) {
    const tabs = this.tabs;

    if (tabKey === undefined) {
      tabs.forEach((tab) => (tab.selected = false));
      this.onComponentChildrenChange();
      this.activeTabKey = undefined;
      return;
    }

    const newTab = tabs.find((tab) => tab.tabKey === tabKey);
    if (!newTab) {
      return;
    }

    if (newTab.disabled) {
      return;
    }

    tabs.forEach((tab) => (tab.selected = false));
    newTab.selected = true;

    this.onComponentChildrenChange();
    this.activeTabKey = newTab.tabKey;

    newTab.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });

    return this.activeTabKey;
  }

  private onComponentChildrenChange() {
    const tabItems = this.tabs;

    tabItems.forEach((tab) => {
      const propertiesToInherit = {
        layout: this.layout,
        small: this.small,
        rounded: this.rounded,
        placement: this.placement,
        iconOnly: tabItems.every((t) => !t.label && !!t.icon),
      };

      Object.assign(tab, propertiesToInherit);
    });

    this.overflowMenuItems = Array.from(tabItems).map((item) => ({
      tabKey: item.tabKey,
      label: item.label || item.textContent || '',
      icon: item.icon,
      disabled: item.disabled,
    }));

    const isTabSelected = tabItems.some((tab) => tab.selected);
    if (!isTabSelected && tabItems.length > 0 && hasKeyboardMode()) {
      tabItems[0].focus();
      this.emitTabChangeEvent(tabItems[0].tabKey);
    }
  }

  private onComponentResize() {
    const tabContainer = this.tabsRef.current;
    if (!tabContainer) {
      return;
    }

    const isOverflowing = tabContainer.scrollWidth > tabContainer.clientWidth;
    this.isTabsOverflow = isOverflowing;
  }

  private onTabClick(event: CustomEvent<TabClickDetail>) {
    if (event.defaultPrevented) {
      return;
    }

    if (event.detail.tabKey === undefined) {
      return;
    }

    this.emitTabChangeEvent(event.detail.tabKey);
  }

  private emitTabChangeEvent(
    tabKey: string | undefined,
    oldTabKey = this.activeTabKey
  ) {
    emitEvent(
      () => {
        const newKey = this.setTabActive(tabKey);
        return {
          new: newKey,
          old: oldTabKey,
        };
      },
      this.tabChange,
      (oldKey) => this.setTabActive(oldKey)
    );
  }

  private onTabsNavigate(event: KeyboardEvent) {
    if (
      event.target instanceof HTMLElement &&
      event.target.getAttribute('role') === 'tablist'
    ) {
      return;
    }

    const tabs = this.tabs.filter((tab) => !tab.disabled);
    let currentIndex = tabs.findIndex((tab) => tab.selected);

    if (this.keyboardNavigation === 'manual') {
      currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
    }

    const activeTab = (tab: HTMLIxTabItemElement) => {
      tab.focus();
      if (this.keyboardNavigation === 'automatic') {
        this.emitTabChangeEvent(tab.tabKey);
      }
    };

    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();

      if (currentIndex === -1) {
        return;
      }

      const indexOffset = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex =
        (currentIndex + indexOffset + tabs.length) % tabs.length;

      const nextTab = tabs[nextIndex];
      activeTab(nextTab);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      activeTab(tabs[0]);
    }

    if (event.key === 'End') {
      event.preventDefault();
      activeTab(tabs[tabs.length - 1]);
    }
  }

  override render() {
    return (
      <Host
        onTabClick={(event: CustomEvent<TabClickDetail>) =>
          this.onTabClick(event)
        }
        class={{
          small: this.small,
        }}
      >
        <div
          ref={this.tabsContainerRef}
          class={{
            'tabs-container': true,
            top: this.placement === 'top',
            bottom: this.placement === 'bottom',
          }}
        >
          <div
            class={{
              'overflow-shadow-container': true,
              'overflow-shadow': this.isTabsOverflow,
            }}
          >
            <div
              role="tablist"
              {...this.inheritAriaAttributes}
              ref={this.tabsRef}
              class={{
                tabs: true,
              }}
              tabIndex={this.isTabsOverflow ? 0 : -1}
              onKeyDown={(event: KeyboardEvent) => this.onTabsNavigate(event)}
            >
              <slot></slot>
            </div>
          </div>
          <ix-dropdown-button
            ariaLabel={this.ariaLabelMoreTabs}
            icon={iconMoreMenu}
            class={{
              'tabs-context-menu': true,
            }}
            variant="subtle-tertiary"
          >
            {this.overflowMenuItems.map((item) => (
              <ix-dropdown-item
                key={item.tabKey}
                checked={item.tabKey === this.activeTabKey}
                icon={item.icon}
                label={item.label}
                disabled={item.disabled}
                onClick={() => (this.activeTabKey = item.tabKey)}
              ></ix-dropdown-item>
            ))}
          </ix-dropdown-button>
        </div>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClose } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { CustomCloseEvent } from '../utils/menu-tabs/menu-tabs-utils';

@Component({
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  shadow: true,
})
export class MenuAbout {
  @Element() hostElement!: HTMLIxMenuAboutElement;

  /**
   * When `false`, applies legacy layout styling for older integrations.
   * Slotted `ix-tabs` / `ix-tab-item` content is always used in v5.
   *
   * @since 5.0.0
   */
  @Prop() suppressLegacyTabs = true;

  /**
   * Content of the header
   */
  @Prop() label = 'About & legal information';

  /**
   * Aria label for close button
   */
  @Prop() ariaLabelCloseButton = 'Close About';

  /** @internal */
  @Prop() show = false;

  /**
   * Active tab changed
   * @since 3.0.0
   */
  @Event() tabChange!: EventEmitter<string>;

  /**
   * About and Legal closed
   */
  @Event() close!: EventEmitter<CustomCloseEvent>;

  private previousTabKey?: string;
  private tabsTabChangeListener?: (event: Event) => void;

  componentDidLoad() {
    this.bindTabsTabChange();
  }

  componentDidUpdate() {
    this.bindTabsTabChange();
  }

  disconnectedCallback() {
    this.unbindTabsTabChange();
  }

  private bindTabsTabChange() {
    this.unbindTabsTabChange();

    const tabs = this.hostElement.querySelector('ix-tabs');
    if (!tabs) {
      return;
    }

    this.previousTabKey = tabs.activeTabKey;
    this.tabsTabChangeListener = (event: Event) =>
      this.forwardTabsTabChange(event as CustomEvent<string | undefined>, tabs);
    tabs.addEventListener('tabChange', this.tabsTabChangeListener);
  }

  private unbindTabsTabChange() {
    const tabs = this.hostElement.querySelector('ix-tabs');
    if (tabs && this.tabsTabChangeListener) {
      tabs.removeEventListener('tabChange', this.tabsTabChangeListener);
    }
    this.tabsTabChangeListener = undefined;
  }

  private forwardTabsTabChange(
    event: CustomEvent<string | undefined>,
    tabs: HTMLIxTabsElement
  ) {
    event.stopImmediatePropagation();

    const newKey = event.detail;
    if (newKey === undefined) {
      return;
    }

    const oldKey = this.previousTabKey;
    const { defaultPrevented } = this.tabChange.emit(newKey);

    if (defaultPrevented) {
      tabs.activeTabKey = oldKey;
      return;
    }

    this.previousTabKey = newKey;
  }

  render() {
    return (
      <Host slot={'ix-menu-about'} class={{ show: this.show }}>
        <div class={'about-header'}>
          <h2 class="text-h2">{this.label}</h2>
          <ix-icon-button
            variant="tertiary"
            size="24"
            icon={iconClose}
            iconColor="color-soft-text"
            aria-label={this.ariaLabelCloseButton}
            onClick={(e) =>
              this.close.emit({
                name: 'ix-menu-about',
                nativeEvent: e,
              })
            }
          ></ix-icon-button>
        </div>
        <ix-tab-set>
          <slot></slot>
        </ix-tab-set>
      </Host>
    );
  }
}

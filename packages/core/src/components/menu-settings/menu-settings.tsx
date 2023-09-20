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
  Watch,
} from '@stencil/core';

@Component({
  tag: 'ix-menu-settings',
  styleUrl: 'menu-settings.scss',
  shadow: true,
})
export class MenuAbout {
  /**
   * active tab
   */
  @Prop({ mutable: true }) activeTabLabel: string;

  /**
   * Label
   */
  @Prop() label = 'Settings';

  /**
   * Internal
   */
  @Prop() show = false;

  @Element() el!: HTMLIxMenuSettingsElement;

  /**
   * Popover closed
   */
  @Event() close: EventEmitter<{
    nativeEvent: MouseEvent;
    name: string;
  }>;

  get settingsItems(): HTMLIxMenuSettingsItemElement[] {
    return Array.from(this.el.querySelectorAll('ix-menu-settings-item'));
  }

  private setTab(label: string) {
    this.activeTabLabel = label;
    this.settingsItems.forEach((i) => {
      i.style.display = 'none';

      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }

  componentWillLoad() {
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
  }

  componentDidLoad() {
    forceUpdate(this.el);
  }

  @Watch('activeTabLabel')
  watchActiveTabLabel(value: string) {
    this.setTab(value);
  }

  private getTabItems() {
    return this.settingsItems.map(({ label }) => {
      return (
        <ix-tab-item
          class={{
            active: label === this.activeTabLabel,
          }}
          onClick={() => this.setTab(label)}
        >
          {label}
        </ix-tab-item>
      );
    });
  }

  render() {
    return (
      <Host
        slot="ix-menu-settings"
        class={{
          show: this.show,
        }}
      >
        <div class="settings-header">
          <h2 class="text-h2">{this.label}</h2>
          <ix-icon-button
            ghost
            size="24"
            icon={'close'}
            onClick={(e) =>
              this.close.emit({
                name: 'ix-menu-settings',
                nativeEvent: e,
              })
            }
          ></ix-icon-button>
        </div>
        <ix-tabs>{this.getTabItems()}</ix-tabs>
        <slot></slot>
      </Host>
    );
  }
}

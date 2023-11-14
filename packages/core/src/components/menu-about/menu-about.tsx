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
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  shadow: true,
})
export class MenuAbout {
  /**
   * Active tab
   */
  @Prop({ mutable: true }) activeTabLabel: string;

  /**
   * Label of first tab
   */
  @Prop() label = 'About & legal information';

  /**
   * Internal
   */
  @Prop() show = false;

  @Element() el!: HTMLIxMenuAboutElement;

  /**
   * About and Legal closed
   */
  @Event() close: EventEmitter<{
    nativeEvent: MouseEvent;
    name: string;
  }>;

  @State() labels: string[] = [];

  get aboutItems(): HTMLIxMenuAboutItemElement[] {
    return Array.from(this.el.querySelectorAll('ix-menu-about-item'));
  }

  private setTab(label: string) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }

  componentWillLoad() {
    if (this.aboutItems.length) {
      this.setTab(this.activeTabLabel || this.aboutItems[0].label);
    }
  }

  componentDidLoad() {
    forceUpdate(this.el);
  }

  componentWillRender() {
    this.updateLabels();
  }

  private updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }

  @Watch('activeTabLabel')
  watchActiveTabLabel(value: string) {
    // Wait a DOM render cycle to get changed labels
    setTimeout(() => this.setTab(value));
  }

  private getSelectedTabIndex(label: string) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }

  private getTabItems() {
    return this.aboutItems.map(({ label }) => {
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
        slot="ix-menu-about"
        class={{
          show: this.show,
        }}
      >
        <div class="about-header">
          <h2 class="text-h2">{this.label}</h2>
          <ix-icon-button
            ghost
            size="24"
            icon={'close'}
            onClick={(e) =>
              this.close.emit({
                name: 'ix-menu-about',
                nativeEvent: e,
              })
            }
          ></ix-icon-button>
        </div>
        <ix-tabs selected={this.getSelectedTabIndex(this.activeTabLabel)}>
          {this.getTabItems()}
        </ix-tabs>
        <div class="about-items">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

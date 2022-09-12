/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
    Watch
} from '@stencil/core';

@Component({
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  scoped: true,
})
export class MenuAbout {
  /**
   *
   */
  @Prop({ reflect: true }) i18nImprintLabel = 'Imprint';

  /**
   * Active tab
   */
  @Prop({ mutable: true, reflect: true }) activeTabLabel: string =
    this.i18nImprintLabel;

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
  @Event() close: EventEmitter<MouseEvent>;

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
    this.setTab(this.activeTabLabel || this.aboutItems[0]?.label);
  }

  componentDidLoad() {
    this.setTab(this.activeTabLabel || this.aboutItems[0]?.label);
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

  render() {
    return (
      <Host
        class={{
          animate__animated: true,
          animate__fadeInLeft: this.show,
          animate__fadeOutLeft: !this.show,
        }}
      >
        <div class="about-header">
          <h2 class="text-h2">{this.label}</h2>
          <ix-icon-button
            ghost
            size="24"
            icon="close"
            onClick={(e) => this.close.emit(e)}
          ></ix-icon-button>
        </div>
        <ix-tabs
          selected={this.getSelectedTabIndex(this.activeTabLabel)}
          class="about-tabs"
        >
          {this.labels.map((label) => (
            <ix-tab-item onClick={() => this.setTab(label)}>
              {label}
            </ix-tab-item>
          ))}
        </ix-tabs>
        <div class="about-items">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

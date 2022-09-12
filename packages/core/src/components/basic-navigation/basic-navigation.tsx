// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-basic-navigation',
  styleUrl: 'basic-navigation.scss',
  scoped: true,
})
export class BasicNavigation {
  @Element() hostElement: HTMLIxBasicNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName: string;

  /**
   * Hide application header
   */
  @Prop() hideHeader = false;

  get menu(): HTMLIxMenuElement {
    return this.hostElement.querySelector('ix-menu');
  }

  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
  }

  private appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
  }

  private adjustMenuHeight() {
    if (!this.hideHeader) {
      this.menu.style.height = 'calc(100% - 2.75rem)';
    }
  }

  render() {
    return (
      <Host
        class={{
          'hide-header': this.hideHeader,
        }}
      >
        {!this.hideHeader ? (
          <ix-application-header name={this.applicationName}>
            <slot name="logo"></slot>
          </ix-application-header>
        ) : null}
        <div id="menu-placeholder"></div>
        <div class="content" onClick={() => this.menu.toggleMenu(false)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

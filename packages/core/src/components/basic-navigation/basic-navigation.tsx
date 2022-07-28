/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-basic-navigation',
  styleUrl: 'basic-navigation.scss',
  scoped: true,
})
export class BasicNavigation {
  @Element() hostElement: HTMLCwBasicNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName: string;

  /**
   * Hide application header
   */
  @Prop() hideHeader = false;

  get menu(): HTMLCwMenuElement {
    return this.hostElement.querySelector('cw-menu');
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
        {!this.hideHeader ? <cw-application-header name={this.applicationName}></cw-application-header> : null}
        <div id="menu-placeholder"></div>
        <div class="content" onClick={() => this.menu.toggleMenu(false)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

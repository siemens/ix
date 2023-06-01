/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class GroupContextMenu {
  constructor() {
    this.showContextMenu = false;
  }
  get dropdownElement() {
    return this.host.querySelector('ix-dropdown');
  }
  get groupDropdownItem() {
    return this.host.querySelectorAll('ix-group-dropdown-item');
  }
  configureDropdown(triggerElement) {
    this.dropdownElement.positioningStrategy = 'fixed';
    this.dropdownElement.trigger = triggerElement;
  }
  componentWillRender() {
    this.showContextMenu = !!this.dropdownElement;
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    return (h(Host, null, h("ix-icon-button", { class: { hide: !this.showContextMenu }, ref: (ref) => this.dropdownElement ? this.configureDropdown(ref) : null, size: "24", ghost: true, icon: "context-menu" }), h("slot", null)));
  }
  static get is() { return "ix-group-context-menu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["./group-context-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["group-context-menu.css"]
    };
  }
  static get states() {
    return {
      "showContextMenu": {}
    };
  }
  static get elementRef() { return "host"; }
}

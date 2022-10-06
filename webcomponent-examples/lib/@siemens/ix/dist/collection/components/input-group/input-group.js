/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host } from '@stencil/core';
export class InputGroup {
  componentDidRender() {
    let paddingRight = 15;
    let paddingLeft = 15;
    this.host.querySelectorAll('[slot="input-end"]').forEach((item) => {
      item.classList.add('input-group-label');
      paddingRight += item.getBoundingClientRect().width;
    });
    this.host.querySelectorAll('[slot="input-start"]').forEach((item) => {
      item.classList.add('input-group-label');
      paddingLeft += item.getBoundingClientRect().width;
    });
    const inputElement = this.host.querySelector('input.form-control');
    if (inputElement) {
      inputElement.style.paddingRight = paddingRight + 'px';
      inputElement.style.paddingLeft = paddingLeft + 'px';
    }
    else {
      console.warn('You used the ix-input-group without an input-tag, e.g. <input class="form-control" />');
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: "group group-start" },
        h("slot", { name: "input-start" })),
      h("slot", null),
      h("div", { class: "group group-end" },
        h("slot", { name: "input-end" }))));
  }
  static get is() { return "ix-input-group"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["input-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input-group.css"]
  }; }
  static get elementRef() { return "host"; }
}

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
export class MyComponent {
  render() {
    return h(Host, null);
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
}

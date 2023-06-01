/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class MyComponent {
  render() {
    return (h(Host, { style: {
        padding: '12rem',
      } }, h("ix-button", { "data-tooltip": "Test1", style: { marginRight: '4rem' } }, "Long text"), h("ix-button", { "data-tooltip": "Test2", style: { marginRight: '4rem' } }, "Short"), h("ix-button", { "data-tooltip": "Test3", style: { marginRight: '4rem' } }, "Long text short words"), h("ix-button", { "data-tooltip": "with-title", style: { marginRight: '4rem' } }, "With title"), h("ix-tooltip", { for: '[data-tooltip="Test3"]', interactive: false, titleIcon: "rocket", titleContent: "test title" }, "Very very very very very very long long long text"), h("ix-tooltip", { for: '[data-tooltip="Test2"]', interactive: false }, "1"), h("ix-tooltip", { for: '[data-tooltip="Test1"]', interactive: true, titleIcon: "rocket", titleContent: "test title" }, "Very very very very very very looooooooooooooooooooooooooooooooooooooooong text"), h("ix-tooltip", { for: '[data-tooltip="with-title"]', interactive: true, titleIcon: "rocket", titleContent: "test title" }, "Some Content"), h("div", { style: {
        display: 'flex',
        flexDirection: 'column',
      } }, [
      'h2',
      'display-large',
      'large',
      'large-single',
      'default-title',
      'default-title-single',
      'default',
      'default-single',
      'caption',
      'caption-single',
      'small',
      'x-small',
    ].map((v) => (h("div", null, h("ix-typography", { variant: v }, v)))))));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["my-component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["my-component.css"]
    };
  }
}

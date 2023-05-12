/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-page-header
          has-back-button
          header-title="Content title"
          header-subtitle="Subtitle"
        >
          <ix-button ghost>Button1</ix-button>
          <ix-button ghost>Button2</ix-button>
          <ix-button ghost>Button3</ix-button>
        </ix-page-header>
      </Host>
    );
  }
}

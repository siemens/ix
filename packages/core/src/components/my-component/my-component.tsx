/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
        <ix-event-list>
          <ix-event-list-item color="color-primary">Text 1</ix-event-list-item>
          <ix-event-list-item color="color-primary" selected>
            Text 2
          </ix-event-list-item>
          <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>
          <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>
        </ix-event-list>
      </Host>
    );
  }
}

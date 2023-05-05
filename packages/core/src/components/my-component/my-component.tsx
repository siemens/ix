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
  componentDidLoad() {}

  render() {
    return (
      <Host>
        <ix-card-list label="Some example list">
          <ix-notification-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-notification-card>
          <ix-notification-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-notification-card>
          <ix-notification-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-notification-card>
        </ix-card-list>
        <ix-card-list label="Some example list">
          <div class="container-fluid">
            <div class="row">
              <ix-card class="col-4"></ix-card>
            </div>
          </div>
        </ix-card-list>
      </Host>
    );
  }
}

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
        <ix-card-list label="Layout 1 CSS Grid">
          <ix-css-grid
            style={{ width: '100%' }}
            templates={{
              lg: [
                ['item-a', 'item-b', 'item-c'],
                ['item-a', 'item-d', 'item-c'],
              ],
            }}
          >
            <ix-css-grid-item itemName="item-a">
              <ix-card>Item A</ix-card>
            </ix-css-grid-item>
            <ix-css-grid-item itemName="item-b">
              <ix-card>Item B</ix-card>
            </ix-css-grid-item>
            <ix-css-grid-item itemName="item-c">
              <ix-card>Item C</ix-card>
            </ix-css-grid-item>
            <ix-css-grid-item itemName="item-d">
              <ix-card>Item D</ix-card>
            </ix-css-grid-item>
          </ix-css-grid>
        </ix-card-list>
        <ix-card-list label="Layout 2 Flex">
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
        <ix-card-list
          label="Layout 3 Infinite"
          listStyle="infinite-scroll"
          showMoreCounter={12}
        >
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
      </Host>
    );
  }
}

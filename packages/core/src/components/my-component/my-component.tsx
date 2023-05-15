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
        <ix-card-list label="Layout 2 Flex">
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
        </ix-card-list>
        <ix-card-list
          label="Layout 3 Infinite"
          listStyle="stack"
          showMoreCount={12}
        >
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
        </ix-card-list>
        <ix-card-list
          label="Layout 3 Infinite"
          listStyle="scroll"
          showMoreCount={12}
        >
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="neutral"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="alarm"
          ></ix-push-card>
          <ix-push-card
            icon="bulb"
            notification="99"
            heading="Heading content"
            subheading="Subheading"
            variant="success"
          ></ix-push-card>
        </ix-card-list>
        <ix-card-list
          label="Layout 4 Infinite"
          listStyle="stack"
          showMoreCount={3}
        >
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="notification"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="alarm"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="critical"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="warning"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="info"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="neutral"
          ></ix-action-card>
          <ix-action-card
            selected
            icon="refresh"
            heading="Scan forn new devices"
            subheading="Secondary text"
            variant="success"
          ></ix-action-card>
          <ix-action-card selected>
            <div
              class="d-flex flex-column align-items-center"
              style={{ color: '#FF00FF' }}
            >
              <ix-icon name="refresh"></ix-icon>
              <ix-typography>
                Use Swap Instance to replace content
              </ix-typography>
            </div>
          </ix-action-card>
        </ix-card-list>
      </Host>
    );
  }
}

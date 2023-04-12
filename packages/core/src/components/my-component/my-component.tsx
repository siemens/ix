/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';
import { CardVariant } from '../notification-card/notification-card';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  private demo: CardVariant[] = [
    'insight',
    'notification',
    'alarm',
    'critical',
    'warning',
  ];

  @Element() hostElement: HTMLMyComponentElement;

  componentDidRender() {}

  render() {
    return (
      <Host>
        <div class={'list'} style={{ paddingBottom: '2rem' }}>
          {this.demo.map((v) => (
            <ix-notification-card
              icon="bulb"
              notification="42"
              heading="New devices have been discovered and are ready for onboarding"
              subheading="Secondary text"
              variant={v}
            ></ix-notification-card>
          ))}
        </div>
      </Host>
    );
  }
}

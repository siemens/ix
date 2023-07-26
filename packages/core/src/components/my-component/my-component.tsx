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
        <ix-button>Test</ix-button>
        <ix-button variant="secondary" icon="rocket" loading>
          Test Test Test Test Test Test Test Test Test
        </ix-button>

        <ix-button disabled ghost>
          Test
        </ix-button>
        <ix-button variant="secondary" ghost>
          Test
        </ix-button>

        <ix-button outline>Test</ix-button>
        <ix-button variant="secondary" outline>
          Test
        </ix-button>

        <ix-icon-button
          icon="rocket"
          variant="primary"
          size="12"
        ></ix-icon-button>
        <ix-icon-button
          icon="rocket"
          variant="primary"
          size="16"
        ></ix-icon-button>
        <ix-icon-button
          icon="rocket"
          variant="primary"
          size="24"
        ></ix-icon-button>

        <ix-chip closable>Test</ix-chip>
      </Host>
    );
  }
}

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

        <ix-chip closable outline>
          Test custom custom cusomt custom
        </ix-chip>
        <ix-time-picker></ix-time-picker>

        <ix-dropdown-button
          style={{ width: '10rem' }}
          label="Dropdown 123 123 12312312312312312 132"
          variant="primary"
          icon="checkboxes"
        >
          <ix-dropdown-item label="Test"></ix-dropdown-item>
          <ix-dropdown-item label="Test"></ix-dropdown-item>
          <ix-dropdown-item label="Test"></ix-dropdown-item>
        </ix-dropdown-button>

        <ix-card-list></ix-card-list>

        <ix-filter-chip>Test</ix-filter-chip>

        <ix-expanding-search></ix-expanding-search>

        <ix-icon-button icon="rocket" oval size="12"></ix-icon-button>
        <ix-icon-button icon="rocket" oval size="16"></ix-icon-button>
        <ix-icon-button icon="rocket" oval size="24"></ix-icon-button>
        <ix-icon-button icon="rocket" oval size="32"></ix-icon-button>
      </Host>
    );
  }
}

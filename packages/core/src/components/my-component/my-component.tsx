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
        <ix-key-value label="Label 1" value="Value 1"></ix-key-value>

        <br />
        <br />

        <ix-key-value
          label="Label 1"
          value="Value 1"
          icon="location"
        ></ix-key-value>

        <br />
        <br />

        <ix-key-value label="Label 1">
          <form class="needs-validation m-2" slot="value-component">
            <input
              class="form-control"
              placeholder="Enter text here"
              type="text"
            />
          </form>
        </ix-key-value>

        <br />
        <br />

        <ix-key-value label="Label 1" icon="location">
          <input
            class="form-control"
            placeholder="Enter text here"
            type="text"
            slot="value-component"
          />
        </ix-key-value>

        <br />
        <br />

        <hr />

        <br />
        <br />

        <ix-key-value
          label="Label 1"
          value="Value 1"
          labelPosition="left"
        ></ix-key-value>

        <br />
        <br />

        <ix-key-value
          label="Label 1"
          value="Value 1"
          icon="location"
          labelPosition="left"
        ></ix-key-value>

        <br />
        <br />

        <ix-key-value label="Label 1" labelPosition="left">
          <input
            class="form-control"
            placeholder="Enter text here"
            type="text"
            slot="value-component"
          />
        </ix-key-value>

        <br />
        <br />

        <ix-key-value label="Label 1" icon="location" labelPosition="left">
          <input
            class="form-control"
            placeholder="Enter text here"
            type="text"
            slot="value-component"
          />
        </ix-key-value>
      </Host>
    );
  }
}

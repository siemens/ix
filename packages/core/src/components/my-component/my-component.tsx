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
      <Host style={{ width: '8rem' }}>
        <input
          type="checkbox"
          id="cb_1"
          ref={(r) => {
            r.indeterminate = true;
          }}
        />
        <label htmlFor="cb_1">Test</label>

        <input checked id="checkbox_1_1" name="group_1" type="radio" />
        <label htmlFor="checkbox_1_1">
          Checkbox extra long text long so long a little bit longer please
        </label>

        <input id="checkbox_1_2" name="group_1" type="radio" />
        <label htmlFor="checkbox_1_2">
          Checkbox extra long text long so long a little bit longer please
        </label>

        <input disabled id="checkbox_1_3" name="group_1" type="radio" />
        <label htmlFor="checkbox_1_3">
          Checkbox extra long text long so long a little bit longer please
        </label>
      </Host>
    );
  }
}

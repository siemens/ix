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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ix-input-group>
            <label slot="input-start" htmlFor="input">
              Test Start
            </label>
            <input type="text" placeholder="" required id="input" />
            <label slot="input-end">cm</label>
            <div class={'invalid-feedback'}>Error 123</div>
          </ix-input-group>
        </form>
      </Host>
    );
  }
}

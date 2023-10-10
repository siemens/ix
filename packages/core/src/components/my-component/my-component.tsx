/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
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
          class="needs-validation"
          novalidate
          onSubmit={async (e) => {
            e.preventDefault();
          }}
        >
          <ix-layout-grid>
            <ix-row>
              <ix-col size="4">
                <label htmlFor="validationCustom01">First name</label>
                <input type="text" id="validationCustom01" required />
                <div class="invalid-feedback">Please choose a first name.</div>
                <div class="valid-feedback">Looks good!</div>
              </ix-col>
            </ix-row>
            <ix-row>
              <ix-col size="4">
                {/* <ix-date-input
                  id="validationCustom02"
                  range={true}
                ></ix-date-input> */}
                <ix-datetime-input id="222" label="label"></ix-datetime-input>
              </ix-col>
            </ix-row>
            <ix-row>
              <ix-col>
                <ix-button type="submit">Submit form</ix-button>
              </ix-col>
            </ix-row>
          </ix-layout-grid>
        </form>
      </Host>
    );
  }
}

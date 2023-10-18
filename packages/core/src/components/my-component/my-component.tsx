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
                <ix-date-input
                  validators={[
                    {
                      validator: 'validDate',
                      errorMessage: 'Custom message 1',
                    },
                    {
                      validator: 'toAfterFrom',
                      errorMessage: 'Custom message 2',
                    },
                    {
                      validator: 'withinMinMax',
                      errorMessage: 'Custom message 3',
                    },
                  ]}
                ></ix-date-input>
                <div class="valid-feedback">Looks good!</div>
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

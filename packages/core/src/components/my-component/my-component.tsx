/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() errorMessage: string;
  private dateInput: HTMLIxDateInputElement;

  render() {
    return (
      <Host>
        <form
          class="needs-validation"
          novalidate
          onSubmit={async (e) => {
            e.preventDefault();

            this.errorMessage = await this.dateInput.getValidityErrorMessage();
          }}
        >
          <ix-layout-grid>
            <ix-row>
              <ix-col size="4">
                <ix-date-input
                  id="validationCustom02"
                  ref={(ref) =>
                    (this.dateInput = ref as HTMLIxDateInputElement)
                  }
                  range={true}
                ></ix-date-input>
                <div class="invalid-feedback">{this.errorMessage}</div>
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

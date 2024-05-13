/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';
import { DateTime } from 'luxon';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  @Element() hostElement: HTMLIxPlaygroundInternalElement;

  componentDidLoad() {
    setTimeout(() => {
      this.hostElement
        .querySelector('ix-text-field[name="project"]')
        .classList.add('ix-invalid');
    }, 3000);
  }

  render() {
    return (
      <Host>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('form submitted');
            const formData = new FormData(e.target as HTMLFormElement);
            for (const x of formData.keys()) {
              console.log(x, formData.get(x));
            }
          }}
        >
          <ix-layout-grid>
            <ix-row>
              <ix-col
                size="1"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <ix-field-label>Project:</ix-field-label>
              </ix-col>
              <ix-col>
                <ix-text-field
                  name="project"
                  helperText="Name"
                  errorText="Error"
                ></ix-text-field>
              </ix-col>
            </ix-row>
          </ix-layout-grid>

          <ix-text-field label="test"></ix-text-field>

          {/* <ix-custom-field
            helperText="Helper text"
            errorText="Error!"
            label="My Label"
          >
            <ix-text-field name="project"></ix-text-field>
          </ix-custom-field> */}
          {/* <ix-text-field
            name="project"
            placeholder="123"
            onValueChanged={console.log}
            onInput={console.log}
            helperText="Helper text"
            label="Project"
            errorText="Bla bla 123"
          ></ix-text-field>

          <ix-date-field
            id="xxx"
            name="project_created"
            value={'2024/05/05'}
            helperText="Helper text"
            label="Project"
            errorText="First of a month is not allowed"
            onValueChanged={({ detail }) => {
              this.hostElement
                .querySelector('#xxx')
                .classList.toggle(
                  'ix-invalid',
                  DateTime.fromFormat(detail, 'yyyy/LL/dd').day === 1
                );
            }}
          ></ix-date-field>
          <ix-custom-field helperText="Helper text" label="Project">
            <ix-text-field></ix-text-field>
          </ix-custom-field>

          <ix-date-range-field errorText="test">
            <ix-date-field name="start1" value={'2024/05/01'}></ix-date-field>
            <ix-date-field name="end1" value={'2024/05/05'}></ix-date-field>
          </ix-date-range-field> */}

          <ix-button type="submit">Button</ix-button>
        </form>
      </Host>
    );
  }
}

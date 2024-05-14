/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, State } from '@stencil/core';
import { DateTime } from 'luxon';
import { makeRef } from '../utils/make-ref';

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

  @State() checked = true;

  private selectRef = makeRef<HTMLIxSelectElement>();
  private checkboxGroupRef = makeRef<HTMLIxCheckboxGroupElement>();

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
              <ix-field-label>test</ix-field-label>
              <ix-text-field
                name="project"
                helperText="Name"
                errorText="Error"
              ></ix-text-field>
            </ix-row>

            <ix-row>
              <ix-text-field label="test"></ix-text-field>
            </ix-row>

            <ix-row>
              <ix-date-field
                id="xxx"
                name="project_created"
                value={'2024/05/05'}
                helperText="Helper text"
                label="Project"
                errorText="First of a month is not allowed"
                onValueChange={({ detail }) => {
                  this.hostElement
                    .querySelector('#xxx')
                    .classList.toggle(
                      'ix-invalid',
                      DateTime.fromFormat(detail, 'yyyy/LL/dd').day === 1
                    );
                }}
              ></ix-date-field>
            </ix-row>

            <ix-row>
              <ix-date-range-field errorText="test">
                <ix-date-field
                  name="start1"
                  value={'2024/05/01'}
                ></ix-date-field>
                <ix-date-field name="end1" value={'2024/05/05'}></ix-date-field>
              </ix-date-range-field>
            </ix-row>

            <ix-row>
              <ix-checkbox-group
                label="Checkbox group"
                helperText="Info"
                ref={this.checkboxGroupRef}
              >
                <ix-checkbox
                  name="vehicle"
                  value="car"
                  checked={this.checked}
                  onCheckedChange={() => {
                    // e.preventDefault();
                  }}
                >
                  Car
                </ix-checkbox>
                <ix-checkbox
                  name="vehicle2"
                  value="boat"
                  checked={this.checked}
                  onCheckedChange={() => {
                    // e.preventDefault();
                  }}
                >
                  Boat
                </ix-checkbox>

                <ix-checkbox
                  indeterminate
                  name="vehicle3"
                  value="indeterminate"
                  onCheckedChange={() => {
                    // e.preventDefault();
                  }}
                >
                  Boat
                </ix-checkbox>
              </ix-checkbox-group>
            </ix-row>

            <ix-row>
              <ix-select value={'1'} name="option_sel_1">
                <ix-select-item value="1" label="Option 1"></ix-select-item>
                <ix-select-item value="2" label="Option 2"></ix-select-item>
                <ix-select-item value="3" label="Option 3"></ix-select-item>
              </ix-select>
            </ix-row>

            <ix-row>
              <ix-custom-field
                label="Test"
                helperText="helper"
                errorText="error"
              >
                <ix-checkbox>test</ix-checkbox>
                <ix-checkbox disabled checked>
                  test
                </ix-checkbox>
                <ix-select
                  ref={this.selectRef}
                  mode="multiple"
                  value={'1'}
                  name="option_sel_2"
                  onValueChange={({ detail }) => {
                    this.selectRef.current.classList.toggle(
                      'ix-invalid',
                      Array.isArray(detail)
                        ? detail.includes('3')
                        : detail === '3'
                    );
                  }}
                >
                  <ix-select-item value="1" label="Option 1"></ix-select-item>
                  <ix-select-item value="2" label="Option 2"></ix-select-item>
                  <ix-select-item value="3" label="Option 3"></ix-select-item>
                </ix-select>
              </ix-custom-field>
            </ix-row>

            <ix-row>
              <ix-radiobutton-group
                label="Radio Button Group"
                helperText="Select blob type"
                errorText="Some error"
              >
                <ix-radiobutton name="blob" value="x1">
                  Type = x1
                </ix-radiobutton>
                <ix-radiobutton name="blob" value="x2">
                  Type = x2
                </ix-radiobutton>
                <ix-radiobutton name="blob" value="x3" checked>
                  Type = x3
                </ix-radiobutton>
              </ix-radiobutton-group>
            </ix-row>

            <ix-row>
              <ix-button type="submit">Button</ix-button>
            </ix-row>
          </ix-layout-grid>

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
        </form>
      </Host>
    );
  }
}

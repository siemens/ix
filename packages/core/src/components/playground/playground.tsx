/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  // scoped: true,
})
export class PlaygroundInternal {
  @Element() hostElement: HTMLIxPlaygroundInternalElement;

  render() {
    return (
      <Host>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            for (const x of formData.keys()) {
              console.log(x, formData.get(x));
            }
          }}
        >
          <ix-layout-grid gap="24">
            <ix-row>
              <ix-col size="1">
                <ix-label>Project</ix-label>
              </ix-col>
              <ix-col>
                <ix-text-field
                  name="project_name"
                  helperText="Fill in a cool project name"
                ></ix-text-field>
              </ix-col>
            </ix-row>
            <ix-row>
              <ix-col size="1">
                <ix-label>Asset</ix-label>
              </ix-col>
              <ix-col>
                <ix-text-field
                  required
                  name="asset_name"
                  helperText="How is your asset called?"
                  errorText="This field is required"
                ></ix-text-field>
              </ix-col>
            </ix-row>

            <ix-row>
              <ix-col size="1">
                <ix-label>Radio Group</ix-label>
              </ix-col>
              <ix-col>
                <ix-custom-field>
                  <ix-radio-group>
                    <ix-radio label="Test"></ix-radio>
                    <ix-radio label="Test2"></ix-radio>
                    <ix-radio label="Test3"></ix-radio>
                  </ix-radio-group>
                </ix-custom-field>
              </ix-col>
            </ix-row>

            <ix-row>
              <ix-col size="1">
                <ix-label>Radio Group</ix-label>
              </ix-col>
              <ix-col>
                <ix-checkbox label="Agree"></ix-checkbox>
                <ix-checkbox label="Agree2"></ix-checkbox>
              </ix-col>
            </ix-row>

            <ix-row>
              <ix-button type="submit">Submit</ix-button>
            </ix-row>

            <ix-row>
              <ix-col>
                <textarea></textarea>
              </ix-col>
            </ix-row>
          </ix-layout-grid>
        </form>
      </Host>
    );
  }
}

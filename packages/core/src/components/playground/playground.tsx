/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, State } from '@stencil/core';

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

  @State() validationState: string = 'ix-info';

  render() {
    return (
      <Host>
        <form onSubmit={(e) => e.preventDefault()} style={{ margin: '2rem' }}>
          <ix-layout-grid>
            <ix-row>
              <ix-number-field
                name="text-field"
                label="Text Field"
                helperText="Helper text with super link content 123 123 123 123"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                class={this.validationState}
                showTextAsTooltip={false}
                showStepperButtons
              ></ix-number-field>
            </ix-row>
            <ix-row>
              <ix-text-field
                type="text"
                name="text-field"
                label="Text Field"
                helperText="Helper text with super link content 123 123 123 123"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                class={this.validationState}
                showTextAsTooltip={false}
              ></ix-text-field>
            </ix-row>
            <ix-row>
              <ix-select
                name="select"
                class={this.validationState}
                label="Select"
                required
                helperText="Helper text with super link content 123 123 123 123"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                id="select"
                value={this.validationState}
                onValueChange={(e) => {
                  this.validationState = e.detail as string;
                }}
              >
                <ix-select-item
                  value={'ix-warning'}
                  label="warning"
                ></ix-select-item>
                <ix-select-item value={'ix-info'} label="info"></ix-select-item>
                <ix-select-item
                  value={'ix-valid'}
                  label="valid"
                ></ix-select-item>
                <ix-select-item
                  value={'ix-invalid'}
                  label="invalid"
                ></ix-select-item>
              </ix-select>
            </ix-row>
          </ix-layout-grid>
        </form>
      </Host>
    );
  }
}

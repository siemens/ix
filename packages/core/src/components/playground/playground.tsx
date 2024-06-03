/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { iconBulb } from '@siemens/ix-icons/icons';
import { Component, Element, h, Host, State } from '@stencil/core';

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

  @State() validationState: string = 'ix-info';

  render() {
    return (
      <Host>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            console.log('-----');
            for (const [key, value] of formData.entries()) {
              console.log(`${key}: ${value}`);
            }
            console.log('-----');
          }}
          style={{ margin: '2rem' }}
        >
          <ix-layout-grid>
            <ix-row style={{ gap: '1rem' }}>
              <ix-number-field
                max={5}
                name="number"
                label="Number"
                helperText="Helper text"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Define a PIN number only using numbers 1-4"
                class={this.validationState}
                showTextAsTooltip={false}
                showStepperButtons={false}
                style={{ width: '15rem' }}
                value="3"
                allowedCharactersPattern="[1-4]"
              >
                <ix-icon slot="prefix" name={iconBulb} size="16"></ix-icon>
              </ix-number-field>

              <ix-number-field
                max={5}
                name="number-stepper"
                label="Number (with stepper)"
                helperText="Helper text"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                class={this.validationState}
                showTextAsTooltip={false}
                showStepperButtons={true}
                style={{ width: '15rem' }}
                value="3"
              >
                <ix-icon slot="prefix" name={iconBulb} size="16"></ix-icon>
                <ix-typography slot="postfix" color="weak">
                  mm
                </ix-typography>
              </ix-number-field>
            </ix-row>
            <ix-row>
              <ix-text-field
                disabled
                type="text"
                name="text-field"
                label="Text Field"
                helperText="Helper text with super link content 123 123 123 123"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                maxLength={10}
                class={this.validationState}
                showTextAsTooltip={false}
                style={{ width: '15rem' }}
                value="test"
              >
                <ix-icon slot="prefix" name={iconBulb} size="16"></ix-icon>
                <ix-typography slot="postfix" color="weak">
                  mm
                </ix-typography>
              </ix-text-field>
            </ix-row>
            <ix-row>
              <ix-checkbox-group
                label="Checkbox"
                helperText="Helper text with super link content 123 123 123 123"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
              >
                <ix-checkbox
                  style={{ width: '95px' }}
                  label="Audi long long long lons"
                  class={this.validationState}
                  name="audi"
                  value="audi"
                  disabled
                  checked
                ></ix-checkbox>
                <ix-checkbox
                  label="Porsche"
                  name="porsche"
                  value="porsche"
                  class={this.validationState}
                ></ix-checkbox>
                <ix-checkbox
                  label="VW"
                  name="vw"
                  value="vw"
                  class={this.validationState}
                ></ix-checkbox>
              </ix-checkbox-group>
            </ix-row>
            <ix-row>
              <ix-radio-group
                label="Radio"
                helperText="Helper text"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
              >
                <ix-radio
                  label="Audi long long long lons"
                  name="radio"
                  checked
                  class={this.validationState}
                  style={{ width: '95px' }}
                  value="test-1"
                ></ix-radio>
                <ix-radio
                  label="Test2"
                  name="radio"
                  checked
                  class={this.validationState}
                  value="test-2"
                  disabled
                ></ix-radio>
                <ix-radio
                  label="Test3"
                  name="radio"
                  class={this.validationState}
                  value="test-3"
                ></ix-radio>
              </ix-radio-group>
            </ix-row>
            <ix-row>
              <ix-toggle
                name="toggle-1"
                class={this.validationState}
                textOn="On"
                textOff="Off"
              ></ix-toggle>
              <ix-toggle
                name="toggle-2"
                class={this.validationState}
                textOn="On"
                textOff="Off"
                checked
              ></ix-toggle>
            </ix-row>
            <ix-row>
              <ix-textarea-field
                name="textarea"
                label="Textarea"
                helperText="Helper text"
                errorText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                class={this.validationState}
              ></ix-textarea-field>
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
            <ix-row>
              <ix-button type="submit">Submit</ix-button>
            </ix-row>
          </ix-layout-grid>
        </form>
      </Host>
    );
  }
}

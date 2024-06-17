/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Element, Host, State, h } from '@stencil/core';
import { iconBezierCurve, iconLocation } from '@siemens/ix-icons/icons';

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

        <div>
          <ix-checkbox-group
            label="Terms of something"
            infoText="Info text"
            class="ix-info"
          >
            <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
            <ix-checkbox
              label="I disagree everything"
              name="agreed"
            ></ix-checkbox>
          </ix-checkbox-group>
        </div>

        <div>
          <ix-checkbox-group
            label="Terms of something"
            warningText="Warning text"
            class="ix-warning"
          >
            <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
            <ix-checkbox
              label="I disagree everything"
              name="agreed"
            ></ix-checkbox>
          </ix-checkbox-group>
        </div>

        <div>
          <ix-checkbox-group
            label="Terms of something"
            validText="Invalid text"
            class="ix-invalid"
          >
            <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
            <ix-checkbox
              label="I disagree everything"
              name="agreed"
            ></ix-checkbox>
          </ix-checkbox-group>
        </div>

        <div>
          <ix-checkbox-group
            label="Terms of something"
            validText="Valid text"
            class="ix-valid"
          >
            <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
            <ix-checkbox
              label="I disagree everything"
              name="agreed"
            ></ix-checkbox>
          </ix-checkbox-group>
        </div>

        <br />

        {/*BASIC - CHECKBOX*/}
        <ix-checkbox
          label="I agree everything"
          name="agreed"
          valid-text="Valid text"
          class="ix-valid"
        ></ix-checkbox>

        {/*BASIC - CHECKBOX - DISABLED */}
        <ix-checkbox
          label="I agree everything"
          name="agreed"
          disabled
        ></ix-checkbox>

        {/*BASIC CHECKBOX - GROUP WITH LABEL*/}
        <ix-checkbox-group label="Terms of something">
          <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
          <ix-checkbox
            label="I disagree everything"
            name="agreed"
            disabled
          ></ix-checkbox>
        </ix-checkbox-group>

        {/*VALIDATION*/}
        <ix-checkbox-group
          label="Terms of something"
          infoText="Info text"
          class="ix-info"
        >
          <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
          <ix-checkbox
            label="I disagree everything"
            name="agreed"
            disabled
          ></ix-checkbox>
        </ix-checkbox-group>

        <ix-checkbox-group
          label="Terms of something"
          warningText="Warning text"
          class="ix-warning"
        >
          <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
          <ix-checkbox
            label="I disagree everything"
            name="agreed"
            disabled
          ></ix-checkbox>
        </ix-checkbox-group>

        <ix-checkbox-group
          label="Terms of something"
          validText="Invalid text"
          class="ix-invalid"
        >
          <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
          <ix-checkbox
            label="I disagree everything"
            name="agreed"
            disabled
          ></ix-checkbox>
        </ix-checkbox-group>

        <ix-checkbox-group
          label="Terms of something"
          validText="Valid text"
          class="ix-valid"
        >
          <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
          <ix-checkbox
            label="I disagree everything"
            name="agreed"
            disabled
          ></ix-checkbox>
        </ix-checkbox-group>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            for (const [key, value] of formData.entries()) {
              console.log(`${key}: ${value}`);
            }
          }}
        >
          <ix-field-label htmlFor="test">Test</ix-field-label>
          <ix-custom-field infoText="Test">
            <input id="test" class={'ix-valid'}></input>
          </ix-custom-field>

          <ix-layout-form>
            <ix-text-field label="Name" name="name"></ix-text-field>
            <ix-text-field label="Last Name" name="last-name"></ix-text-field>

            <ix-text-field label="Address" data-colspan="2" name="address">
              <ix-icon slot="prefix" name={iconLocation} size="16"></ix-icon>
            </ix-text-field>

            <ix-radio-group label="Booking option">
              <ix-radio
                label="Option 1"
                value="1"
                name="booking-option"
              ></ix-radio>
              <ix-radio
                label="Option 2"
                value="2"
                name="booking-option"
              ></ix-radio>
              <ix-radio
                label="Option 3"
                value="3"
                name="booking-option"
              ></ix-radio>
            </ix-radio-group>

            <ix-text-field label="Preferred room size" class={'ix-invalid'}>
              <ix-icon slot="prefix" name={iconBezierCurve} size="16"></ix-icon>
              <ix-icon slot="prefix" name={iconBezierCurve} size="16"></ix-icon>
              <ix-icon slot="prefix" name={iconBezierCurve} size="16"></ix-icon>
              <ix-icon slot="prefix" name={iconBezierCurve} size="16"></ix-icon>
              <ix-icon slot="prefix" name={iconBezierCurve} size="16"></ix-icon>
              <ix-button slot="prefix">test</ix-button>
              <ix-typography slot="postfix" textColor="soft">
                m&sup2;
              </ix-typography>
            </ix-text-field>

            <ix-select
              label="Travel option"
              data-colspan="2"
              name="travel-option"
            >
              <ix-select-item value="1" label="Option 1"></ix-select-item>
              <ix-select-item value="2" label="Option 2"></ix-select-item>
              <ix-select-item value="3" label="Option 3"></ix-select-item>
            </ix-select>

            <ix-number-field
              name="threshold-limit-a"
              label="Threshold Limit A"
              data-colspan="1"
              showStepperButtons
              helperText="Max 3 children"
              max={3}
            ></ix-number-field>

            <ix-number-field
              name="threshold-limit-b"
              label="Threshold Limit B"
              data-colspan="1"
              showStepperButtons
            ></ix-number-field>

            <ix-date-field
              helperText="test"
              name="begin"
              label="Begin"
              onValueChange={console.log}
              i18n-error-date-unparsable="Please enter a valid date"
            ></ix-date-field>
            <ix-date-field name="end" label="End"></ix-date-field>
            <ix-textarea-field
              maxLength={100}
              name="comment"
              label="Comment"
              data-colspan="2"
              textareaHeight="10rem"
              helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
            ></ix-textarea-field>

            <ix-checkbox-group label="Terms of something">
              <ix-checkbox
                label="I agree everything"
                name="agreed"
              ></ix-checkbox>
            </ix-checkbox-group>

            <ix-custom-field
              label="Test"
              helperText="helperText xyz"
              invalidText="invalidText xyz"
              warningText="warningText xyz"
              infoText="infoText xyz"
            >
              <ix-text-field class={'ix-info'} readonly></ix-text-field>
              <ix-icon-button
                icon={iconLocation}
                outline
                onClick={() => {
                  const up = this.hostElement.querySelector(
                    '#file-upload'
                  ) as HTMLInputElement;

                  up.click();
                }}
              ></ix-icon-button>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none ' }}
                onInput={(evt) => {
                  console.log(evt);
                }}
              ></input>
            </ix-custom-field>

            <ix-button type="submit" data-colspan="2">
              Submit
            </ix-button>
          </ix-layout-form>
        </form>
        {/* <form
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
                name="number"
                label="Number"
                helperText="Helper text"
                invalidText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Define a PIN number only using numbers 1-4"
                class={this.validationState}
                showTextAsTooltip={false}
                showStepperButtons={false}
                style={{ width: '15rem' }}
                value={3}
                allowedCharactersPattern="[1-4]"
              >
                <ix-icon slot="prefix" name={iconBulb} size="16"></ix-icon>
              </ix-number-field>

              <ix-number-field
                max={5}
                name="number-stepper"
                label="Number (with stepper)"
                helperText="Helper text"
                invalidText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                class={this.validationState}
                showTextAsTooltip={false}
                showStepperButtons={true}
                style={{ width: '15rem' }}
                value={3}
              >
                <ix-icon slot="prefix" name={iconBulb} size="16"></ix-icon>
                <ix-typography slot="postfix" color="weak">
                  mm
                </ix-typography>
              </ix-number-field>
            </ix-row>
            <ix-row>
              <ix-text-field
                type="password"
                name="text-field"
                label="Text Field "
                helperText="Helper text with super link content 123 123 123 123"
                invalidText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                maxLength={15}
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
                invalidText="Error text"
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
                invalidText="Error text"
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
                invalidText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
                class={this.validationState}
              ></ix-textarea-field>
            </ix-row>

            <ix-row>
              <ix-field-label htmlFor="mytest">Test</ix-field-label>
              <ix-text-field
                id="mytest"
                class={this.validationState}
                maxLength={10}
              ></ix-text-field>
              <ix-helper-text
                htmlFor="mytest"
                helperText="Helper text"
                invalidText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
              ></ix-helper-text>
            </ix-row>
            <ix-row>
              <ix-date-field
                class={this.validationState}
                label="Date"
                helperText="Helper text"
                invalidText="Error text"
                validText="Valid text"
                warningText="Warning text"
                infoText="Info text"
              ></ix-date-field>
            </ix-row>
            <ix-row>
              <ix-select
                name="select"
                class={this.validationState}
                label="Select"
                required
                helperText="Helper text with super link content 123 123 123 123"
                invalidText="Error text"
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
        </form> */}
      </Host>
    );
  }
}

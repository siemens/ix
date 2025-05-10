/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, Prop, State, h, Element } from '@stencil/core';
import {
  FieldWrapperInterface,
  HookValidationLifecycle,
  IxFormValidationState,
  ValidationResults,
} from '../utils/input';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-custom-field',
  styleUrl: 'custom-field.scss',
  shadow: true,
})
export class CustomField
  implements FieldWrapperInterface, IxFormValidationState, IxComponent
{
  @Element() hostElement!: HTMLIxCustomFieldElement;
  /**
   * A value is required or must be checked for the form to be submittable
   */
  @Prop() required: boolean = false;

  /**
   * Label for the field component
   */
  @Prop() label?: string;

  /**
   * Show text below the field component which show additional information
   */
  @Prop() helperText?: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  /**
   * Error text for the field component
   */
  @Prop() invalidText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  @HookValidationLifecycle({
    includeChildren: true,
  })
  updateValidationState({
    isInvalid,
    isValid,
    isInfo,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid;
    this.isValid = isValid;
    this.isInfo = isInfo;
    this.isWarning = isWarning;
  }

  render() {
    return (
      <Host>
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          infoText={this.infoText}
          warningText={this.warningText}
          invalidText={this.invalidText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          required={this.required}
        >
          <slot></slot>
          <slot name="helper" slot="helper" ></slot>
          <slot name="warning" slot="warning" ></slot>
          <slot name="valid" slot="valid" ></slot>
          <slot name="invalid" slot="invalid"></slot>
          <slot name="info" slot="info"></slot>
        </ix-field-wrapper>
      </Host>
    );
  }
}

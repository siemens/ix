/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, Prop, State, h } from '@stencil/core';
import {
  FieldWrapperInterface,
  HookValidationLifecycle,
  IxFormValidationState,
  ValidationResults,
} from '../utils/field';

@Component({
  tag: 'ix-custom-field',
  styleUrl: 'custom-field.scss',
  shadow: true,
})
export class CustomField
  implements FieldWrapperInterface, IxFormValidationState
{
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
  @Prop() errorText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * Show helper, error, info, warning text behind the component
   */
  @Prop() showTextBehind?: boolean;

  @State() isInvalid: boolean;
  @State() isValid: boolean;
  @State() isInfo: boolean;
  @State() isWarning: boolean;

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
          errorText={this.errorText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          showTextBehind={this.showTextBehind}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
        >
          <slot></slot>
        </ix-field-wrapper>
      </Host>
    );
  }
}

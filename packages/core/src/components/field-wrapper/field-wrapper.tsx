/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Host, Prop, h } from '@stencil/core';
import { FieldWrapperInterface } from '../utils/input';
import { MakeRef, makeRef } from '../utils/make-ref';
import { hasAnyText, renderHelperText } from './helper-text-util';

/** @internal */
@Component({
  tag: 'ix-field-wrapper',
  styleUrl: 'field-wrapper.scss',
  shadow: true,
})
export class FieldWrapper implements FieldWrapperInterface {
  @Element() hostElement!: HTMLIxFieldWrapperElement;

  /**
   * Show text below the field component
   */
  @Prop() helperText?: string;

  /**
   * Label for the field component
   */
  @Prop() label?: string;

  /**
   * Error text for the field component
   */
  @Prop() invalidText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  /**
   * Is the field component invalid
   */
  @Prop() isInvalid: boolean = false;

  /**
   * Is the field component valid
   */
  @Prop() isValid: boolean = false;

  /**
   * Is the field component info
   */
  @Prop() isInfo: boolean = false;

  /**
   * Is the field component warning
   */
  @Prop() isWarning: boolean = false;

  /**
   * Show helper, error, info, warning text as tooltip
   */
  @Prop() showTextAsTooltip: boolean = false;

  /**
   * Show label as required
   */
  @Prop() required: boolean = false;

  /**
   * The id of the form element that the label is associated with
   */
  @Prop() htmlForLabel?: string;

  /**
   * The control element that the label is associated with
   */
  @Prop() controlRef?:
    | MakeRef<HTMLElement>
    | MakeRef<HTMLInputElement>
    | MakeRef<HTMLTextAreaElement>;

  @Prop() hasHelperContent: boolean = false;
  @Prop() hasWarningContent: boolean = false;
  @Prop() hasValidContent: boolean = false;
  @Prop() hasInvalidContent: boolean = false;
  @Prop() hasInfoContent: boolean = false;
  private readonly slotRef = makeRef<HTMLDivElement>();

  render() {
    const textOptions = {
      invalidText: this.invalidText,
      isInvalid: this.isInvalid,
      isValid: this.isValid,
      validText: this.validText,
      isWarning: this.isWarning,
      warningText: this.warningText,
      isInfo: this.isInfo,
      infoText: this.infoText,
      helperText: this.helperText,
    };
    const renderStatusSlot = () => {
      let statusSlot = null;
      if (this.isValid && this.hasValidContent) {
        statusSlot = <slot name="valid"></slot>;
      } else if (this.isInvalid && this.hasInvalidContent) {
        statusSlot = <slot name="invalid"></slot>;
      } else if (this.isWarning && this.hasWarningContent) {
        statusSlot = <slot name="warning"></slot>;
      } else if (this.isInfo && this.hasInfoContent) {
        statusSlot = <slot name="info"></slot>;
      } else if (this.hasHelperContent) {
        statusSlot = <slot name="helper"></slot>;
      }
      return statusSlot;
    };
    return (
      <Host>
        {this.label && (
          <div class="field-top">
            <ix-field-label
              required={this.required}
              htmlFor={this.htmlForLabel}
              controlRef={this.controlRef}
              isInvalid={this.isInvalid}
            >
              {this.label}
            </ix-field-label>
          </div>
        )}
        <div
          class={{
            'slot-wrapper': true,
          }}
          ref={this.slotRef}
        >
          <slot></slot>
        </div>
        <div class={'field-bottom'}>
          <div class="bottom-left">
            {!this.showTextAsTooltip && renderHelperText(textOptions)}
            {!this.showTextAsTooltip && renderStatusSlot()}
          </div>
          <div class="bottom-right">
            <slot name="bottom-right"></slot>
          </div>
        </div>

        {this.showTextAsTooltip === true && hasAnyText(textOptions) && (
          <ix-tooltip
            for={this.slotRef.waitForCurrent()}
            showDelay={500}
            placement="bottom"
          >
            {renderHelperText(textOptions)}
            {renderStatusSlot()}
          </ix-tooltip>
        )}
      </Host>
    );
  }
}

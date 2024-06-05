import { Component, Element, Host, Prop, h } from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import { renderHelperText } from './helper-text-util';
import { FieldWrapperInterface } from '../utils/field';

/** @internal */
@Component({
  tag: 'ix-field-wrapper',
  styleUrl: 'field-wrapper.scss',
  shadow: true,
})
export class FieldWrapper implements FieldWrapperInterface {
  @Element() hostElement: HTMLIxFieldWrapperElement;

  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * Error text for the field component
   */
  @Prop() errorText: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText: string;

  /**
   * Is the field component invalid
   */
  @Prop() isInvalid: boolean;

  /**
   * Is the field component valid
   */
  @Prop() isValid: boolean;

  /**
   * Is the field component info
   */
  @Prop() isInfo: boolean;

  /**
   * Is the field component warning
   */
  @Prop() isWarning: boolean;

  /**
   * Show helper, error, info, warning text as tooltip
   */
  @Prop() showTextAsTooltip: boolean;

  /**
   * Show label as required
   */
  @Prop() required: boolean;

  private slotRef = makeRef<HTMLDivElement>();

  render() {
    const textOptions = {
      errorText: this.errorText,
      isInvalid: this.isInvalid,
      isValid: this.isValid,
      validText: this.validText,
      isWarning: this.isWarning,
      warningText: this.warningText,
      isInfo: this.isInfo,
      infoText: this.infoText,
      helperText: this.helperText,
    };
    return (
      <Host>
        <div class="field-top">
          {this.label && (
            <ix-field-label required={this.required}>
              {this.label}
            </ix-field-label>
          )}
          <slot name="top-right"></slot>
        </div>
        <div
          class={{
            'slot-wrapper': true,
          }}
          ref={this.slotRef}
        >
          <slot></slot>
        </div>
        <div class={'field-bottom'}>
          {!this.showTextAsTooltip && renderHelperText(textOptions)}{' '}
          <div class="bottom-right">
            <slot name="bottom-right"></slot>
          </div>
        </div>
        {this.showTextAsTooltip === true && (
          <ix-tooltip for={this.slotRef.waitForCurrent()} showDelay={500}>
            {renderHelperText(textOptions)}
          </ix-tooltip>
        )}
      </Host>
    );
  }
}

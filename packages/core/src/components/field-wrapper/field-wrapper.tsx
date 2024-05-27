import { Component, Element, Host, Prop, h } from '@stencil/core';
import { FieldWrapperInterface } from '../utils/field';
import { makeRef } from '../utils/make-ref';

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
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

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
  @Prop() isRequired: boolean;

  private slotRef = makeRef<HTMLDivElement>();

  private renderHelperText() {
    if (this.isInvalid && this.errorText) {
      return (
        <ix-typography color="alarm">D: Error {this.errorText}</ix-typography>
      );
    }

    if (this.isWarning && this.warningText) {
      return (
        <ix-typography color="std">D: Warning {this.warningText}</ix-typography>
      );
    }

    if (this.isInfo && this.infoText) {
      return <ix-typography color="std">D: Info {this.infoText}</ix-typography>;
    }

    if (this.isValid && this.validText) {
      return (
        <ix-typography color="std">D: Valid {this.validText}</ix-typography>
      );
    }

    return <ix-typography>D: Help{this.helperText}</ix-typography>;
  }

  render() {
    return (
      <Host>
        {this.label && (
          <ix-label required={this.isRequired}>{this.label}</ix-label>
        )}
        <div class={'slot-wrapper'} ref={this.slotRef}>
          <slot></slot>
        </div>
        {!this.showTextAsTooltip && this.renderHelperText()}
        {this.showTextAsTooltip === true && (
          <ix-tooltip for={this.slotRef.waitForCurrent()}>
            {this.renderHelperText()}
          </ix-tooltip>
        )}
      </Host>
    );
  }
}

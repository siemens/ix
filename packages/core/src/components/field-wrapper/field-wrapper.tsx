import { Component, Element, Host, Prop, h } from '@stencil/core';
import { FieldWrapperInterface } from '../utils/input';
import { MakeRef, makeRef } from '../utils/make-ref';
import { renderHelperText } from './helper-text-util';

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
  @Prop() controlRef?: MakeRef<HTMLElement>;

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
          {!this.showTextAsTooltip && renderHelperText(textOptions)}
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

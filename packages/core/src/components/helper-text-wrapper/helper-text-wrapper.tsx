import { Component, Host, Prop, h } from '@stencil/core';
import { HelperText } from '../utils/field';

@Component({
  tag: 'ix-helper-text-wrapper',
  styleUrl: 'helper-text-wrapper.css',
  shadow: true,
})
export class HelperTextWrapper implements HelperText {
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * Label for the field component
   */
  @Prop() errorText: string;

  /**
   * Is the field component invalid
   */
  @Prop() isInvalid: boolean;

  private renderHelperText() {
    if (this.isInvalid) {
      return <ix-typography color="alarm">{this.errorText}</ix-typography>;
    }

    return <ix-typography>{this.helperText}</ix-typography>;
  }

  render() {
    return (
      <Host>
        <ix-field-label>{this.label}</ix-field-label>
        <slot></slot>
        {this.renderHelperText()}
      </Host>
    );
  }
}

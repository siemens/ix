import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ix-helper-text-wrapper',
  styleUrl: 'helper-text-wrapper.css',
  shadow: true,
})
export class HelperTextWrapper {
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;
  render() {
    return (
      <Host>
        <ix-typography color="soft" format="label">
          {this.label}
        </ix-typography>
        <slot></slot>
        <ix-typography>{this.helperText}</ix-typography>
      </Host>
    );
  }
}

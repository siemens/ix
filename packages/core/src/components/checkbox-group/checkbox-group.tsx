import { Component, Element, Host, Prop, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import { HelperText } from '../utils/field';

@Component({
  tag: 'ix-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
})
export class CheckboxGroup implements IxComponent, HelperText {
  @Element() hostElement: HTMLIxCheckboxGroupElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) errorText: string;

  render() {
    return (
      <Host>
        <ix-custom-field
          label={this.label}
          helperText={this.helperText}
          errorText={this.errorText}
        >
          <slot></slot>
        </ix-custom-field>
      </Host>
    );
  }
}

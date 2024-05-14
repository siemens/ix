import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import {
  ClassFieldMappingResult,
  HelperText,
  OnClassField,
} from '../utils/field';

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

  @State() isInvalid = false;

  @OnClassField({
    includeChildren: true,
  })
  onClassFieldUpdate({ isInvalid }: ClassFieldMappingResult) {
    this.isInvalid = isInvalid;
  }

  render() {
    return (
      <Host>
        <ix-helper-text-wrapper
          label={this.label}
          helperText={this.helperText}
          errorText={this.errorText}
          isInvalid={this.isInvalid}
        >
          <slot></slot>
        </ix-helper-text-wrapper>
      </Host>
    );
  }
}

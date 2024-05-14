import {
  Component,
  Element,
  Host,
  Listen,
  Prop,
  State,
  h,
} from '@stencil/core';
import {
  ClassFieldMappingResult,
  HelperText,
  OnClassField,
} from '../utils/field';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-radiobutton-group',
  styleUrl: 'radiobutton-group.scss',
  shadow: true,
})
export class RadiobuttonGroup implements IxComponent, HelperText {
  @Element() hostElement: HTMLIxRadiobuttonGroupElement;
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

  @State() isInvalid: boolean;

  private get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll('ix-radiobutton'));
  }

  @Listen('checkedChange')
  onCheckedChangeHandler(event: CustomEvent<boolean>) {
    this.radiobuttonElements.forEach((radiobutton) => {
      if (radiobutton !== event.target) {
        radiobutton.checked = false;
        return;
      }
      radiobutton.checked = true;
    });
  }

  @OnClassField({
    includeChildren: true,
  })
  onClassField({ isInvalid }: ClassFieldMappingResult) {
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

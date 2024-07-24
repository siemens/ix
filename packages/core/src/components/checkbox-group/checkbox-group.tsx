import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import {
  FieldWrapperInterface,
  HookValidationLifecycle,
  IxFormValidationState,
  ValidationResults,
} from '../utils/field';
import { IxComponent } from '../utils/internal';

/**
 * @since 2.4.0
 * @form-ready 2.4.0
 */
@Component({
  tag: 'ix-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
})
export class CheckboxGroup
  implements FieldWrapperInterface, IxFormValidationState, IxComponent
{
  @Element() hostElement!: HTMLIxCheckboxGroupElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText?: string;

  /**
   * Label for the field component
   */
  @Prop() label?: string;

  /**
   * Alignment of the check boxes in the group
   */
  @Prop() direction: 'row' | 'column' = 'column';

  /**
   * Error text for the field component
   */
  @Prop() invalidText?: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;
  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;
  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  showTextAsTooltip = false;

  @State() isInvalid = false;
  @State() isInfo = false;
  @State() isValid = false;
  @State() isWarning = false;

  @HookValidationLifecycle({
    includeChildren: true,
  })
  onClassFieldUpdate({
    isInvalid,
    isInvalidByRequired,
    isInfo,
    isValid,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }

  render() {
    return (
      <Host>
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          invalidText={this.invalidText}
          infoText={this.infoText}
          validText={this.validText}
          warningText={this.warningText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isInfo={this.isInfo}
          isValid={this.isValid}
          isWarning={this.isWarning}
        >
          <div
            class={{
              'checkbox-container': true,
              'row-layout': this.direction === 'row',
            }}
          >
            <slot></slot>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  Component,
  Element,
  EventEmitter,
  Host,
  Event,
  Listen,
  Prop,
  State,
  h,
  Watch,
} from '@stencil/core';
import {
  ValidationResults,
  HookValidationLifecycle,
  FieldWrapperInterface,
  IxFormValidationState,
} from '../utils/input';

/**
 * @since 2.5.0
 * @form-ready 2.5.0
 */
@Component({
  tag: 'ix-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true,
})
export class RadiobuttonGroup
  implements FieldWrapperInterface, IxFormValidationState
{
  @Element() hostElement!: HTMLIxRadioGroupElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText?: string;

  /**
   * Label for the field component
   */
  @Prop() label?: string;

  /**
   * Value of the radiobutton group component
   */
  @Prop() value?: string;

  /**
   * Error text for the field component
   */
  @Prop() invalidText?: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * Alignment of the radio buttons in the group
   */
  @Prop() direction: 'column' | 'row' = 'column';

  /**
   * Event emitted when the value of the radiobutton group changes
   */
  @Event() valueChange!: EventEmitter<string>;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  private readonly observer = new MutationObserver(() => {
    this.ensureOnlyLastRadioChecked();
  });

  private get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll('ix-radio'));
  }

  connectedCallback(): void {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked'],
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private selectInitialValue() {
    if (!this.value) {
      return;
    }
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === this.value;
    });
  }

  private ensureOnlyLastRadioChecked() {
    const checkedRadios = this.radiobuttonElements.filter(
      (radio) => radio.checked
    );
    checkedRadios.forEach((radio, index) => {
      if (index === checkedRadios.length - 1) {
        return;
      }
      radio.checked = false;
    });
  }

  @Watch('value')
  onValueChangeHandler(newValue: string) {
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === newValue;
    });
  }

  @Listen('checkedChange')
  onCheckedChangeHandler(event: CustomEvent<boolean>) {
    this.radiobuttonElements.forEach((radiobutton) => {
      if (radiobutton !== event.target) {
        radiobutton.checked = false;
        return;
      }
      radiobutton.checked = true;
      this.valueChange.emit(radiobutton.value);
    });
  }

  @HookValidationLifecycle({
    includeChildren: true,
  })
  onClassField({ isInvalid, isInfo, isValid, isWarning }: ValidationResults) {
    this.isInvalid = isInvalid;
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
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          isInvalid={this.isInvalid}
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

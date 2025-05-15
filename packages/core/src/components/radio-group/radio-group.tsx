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
  Method,
} from '@stencil/core';
import {
  ValidationResults,
  HookValidationLifecycle,
  FieldWrapperInterface,
  IxFormValidationState,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import {renderFormStatusSlots} from '../utils/slot-utils';

/**
 * @form-ready
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
   * Required state of the checkbox component
   *
   * @internal
   */
  @Prop() required?: boolean = false;

  /**
   * Event emitted when the value of the radiobutton group changes
   */
  @Event() valueChange!: EventEmitter<string>;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  private touched = false;
  private readonly groupRef = makeRef<HTMLIxRadioGroupElement>();

  private readonly observer = new MutationObserver(() => {
    this.ensureOnlyLastRadioChecked();
    this.hasNestedRequiredRadio();
  });

  private get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll('ix-radio'));
  }

  connectedCallback(): void {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked', 'required'],
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
    this.hasNestedRequiredRadio();
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

  private hasNestedRequiredRadio() {
    this.required = this.radiobuttonElements.some(
      (radiobutton) => radiobutton.required
    );
  }

  @Watch('value')
  onValueChangeHandler(newValue: string) {
    this.touched = true;
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
  onClassField({
    isInvalid,
    isInfo,
    isValid,
    isWarning,
    isInvalidByRequired,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(
      !!Array.from(this.hostElement.querySelectorAll('ix-radio')).find(
        (radio) => radio.checked
      )
    );
  }

  /** @internal */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  render() {
    return (
      <Host onIxBlur={() => (this.touched = true)} ref={this.groupRef}>
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
          controlRef={this.groupRef}
        >
          <div
            class={{
              'checkbox-container': true,
              'row-layout': this.direction === 'row',
            }}
          >
            <slot></slot>
          </div>
          {renderFormStatusSlots()}
        </ix-field-wrapper>
      </Host>
    );
  }
}

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
import {
  isFormNoValidate,
  setupFormSubmitListener,
  updateRadioValidationClasses,
  clearRadioGroupValidationState,
} from '../radio/radio-validation';
import { makeRef } from '../utils/make-ref';
import { useFieldGroupValidation } from '../utils/field-group-utils';
import { clearInputValue } from '../input/input.util';

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
  private formSubmissionAttempted = false;
  private cleanupFormListener?: () => void;
  private readonly groupRef = makeRef<HTMLElement>();

  private readonly observer = new MutationObserver(() => {
    this.ensureOnlyLastRadioChecked();
    this.hasNestedRequiredRadio();
  });

  private readonly radioValidation =
    useFieldGroupValidation<HTMLIxRadioElement>(this.hostElement, {
      selector: 'ix-radio',
      isChecked: (el) => el.checked,
      isRequired: (el) => el.required,
      updateValidationClasses: updateRadioValidationClasses,
      clearValidationState: this.clearValidationState.bind(this),
    });

  private get radiobuttonElements() {
    return this.radioValidation.getElements();
  }

  private setupFormListener() {
    this.cleanupFormListener = setupFormSubmitListener(this.hostElement, () => {
      this.formSubmissionAttempted = true;
      this.syncValidationClasses();
    });
  }

  connectedCallback(): void {
    this.setupFormListener();
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
    if (this.cleanupFormListener) {
      this.cleanupFormListener();
    }
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

    const hasCheckedRadio = this.isSomeRadioChecked();

    for (const radio of this.radiobuttonElements) {
      radio.tabIndex = radio.checked ? 0 : -1;
    }

    if (!hasCheckedRadio && this.radiobuttonElements.length > 0) {
      this.radiobuttonElements[0].tabIndex = 0;
    }
  }

  private hasNestedRequiredRadio() {
    this.required = this.radiobuttonElements.some(
      (radiobutton) => radiobutton.required
    );
  }

  private isSomeRadioChecked() {
    return this.radiobuttonElements.some((radio) => radio.checked);
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
      this.radiobuttonElements.some((radio) => radio.checked)
    );
  }

  /** @internal */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  /** @internal */
  @Method()
  async setCheckedToNextItem(
    currentRadio: HTMLIxRadioElement,
    forward = true
  ): Promise<void> {
    const { radiobuttonElements } = this;
    const { length } = radiobuttonElements;
    if (length <= 1) {
      return;
    }

    const index = radiobuttonElements.indexOf(currentRadio);
    const step = forward ? 1 : -1;
    let nextIndex = (index + step + length) % length;

    while (radiobuttonElements[nextIndex].disabled) {
      if (nextIndex === index) {
        return;
      }
      nextIndex = (nextIndex + step + length) % length;
    }

    const nextRadio = radiobuttonElements[nextIndex];
    nextRadio.setCheckedState(true);
    nextRadio.focus();
  }

  /**
   * Clear the selected radio button and reset validation state
   */
  @Method()
  async clear(): Promise<void> {
    await clearInputValue(this.hostElement);
  }

  // --- Validation helpers (shared with checkbox-group) ---
  private hasAnyChecked(): boolean {
    return this.radioValidation.hasAnyChecked();
  }

  private clearValidationState() {
    clearRadioGroupValidationState(
      this.hostElement,
      this.radiobuttonElements as HTMLElement[]
    );
  }

  private handleRequiredValidationShared(params: {
    elements: HTMLElement[];
    hasAnyChecked: boolean;
    touched: boolean;
    formSubmissionAttempted: boolean;
    hostElement: HTMLElement;
    clearValidationState: () => void;
    updateValidationClasses: (
      elements: HTMLElement[],
      isChecked: boolean,
      touched: boolean,
      formSubmissionAttempted: boolean
    ) => void;
  }) {
    const {
      elements,
      hasAnyChecked,
      touched,
      formSubmissionAttempted,
      hostElement,
      clearValidationState,
      updateValidationClasses,
    } = params;

    if (isFormNoValidate(hostElement)) {
      clearValidationState();
      return;
    }

    const requiredElements = elements.filter(
      (el) => (el as HTMLIxRadioElement).required
    );
    const isChecked = hasAnyChecked;
    const anyTouched = requiredElements.some(
      (el) =>
        (
          el as HTMLIxRadioElement & {
            touched?: boolean;
            formSubmissionAttempted?: boolean;
          }
        ).touched ||
        (
          el as HTMLIxRadioElement & {
            touched?: boolean;
            formSubmissionAttempted?: boolean;
          }
        ).formSubmissionAttempted
    );
    const isRequiredInvalid =
      !isChecked && (touched || formSubmissionAttempted || anyTouched);

    hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);

    if (isRequiredInvalid) {
      hostElement.classList.add('ix-invalid');
    } else {
      hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
    }

    if (!isFormNoValidate(hostElement)) {
      updateValidationClasses(
        elements,
        isChecked,
        touched,
        formSubmissionAttempted
      );
    }

    if (isChecked) {
      hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
    }
  }

  private handleRequiredValidation() {
    this.handleRequiredValidationShared({
      elements: this.radiobuttonElements,
      hasAnyChecked: this.hasAnyChecked(),
      touched: this.touched,
      formSubmissionAttempted: this.formSubmissionAttempted,
      hostElement: this.hostElement,
      clearValidationState: this.clearValidationState.bind(this),
      updateValidationClasses: updateRadioValidationClasses,
    });
  }

  async syncValidationClasses() {
    if (isFormNoValidate(this.hostElement)) {
      this.clearValidationState();
      return;
    }

    if (this.required) {
      this.handleRequiredValidation();
    } else {
      this.clearValidationState();
    }
  }

  render() {
    return (
      <Host
        onIxBlur={() => {
          if (!this.touched) {
            this.touched = true;
            this.syncValidationClasses();
          }
        }}
        ref={this.groupRef}
        role="radiogroup"
      >
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
          required={this.required}
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
        </ix-field-wrapper>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import {
  ClassMutationObserver,
  createClassMutationObserver,
  HookValidationLifecycle,
  IxFormComponent,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import {
  isFormNoValidate,
  applyCheckboxValidation,
  setupFormSubmitListener,
} from './checkbox-validation';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class Checkbox implements IxFormComponent<string> {
  @Element() hostElement!: HTMLIxCheckboxElement;

  @AttachInternals() formInternals!: ElementInternals;

  /**
   * Name of the checkbox component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the checkbox component
   */
  @Prop({ reflect: true }) value: string = 'on';

  /**
   * Label for the checkbox component
   */
  @Prop() label?: string;

  /**
   * Checked state of the checkbox component
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * Disabled state of the checkbox component
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Indeterminate state of the checkbox component
   */
  @Prop({ reflect: true }) indeterminate: boolean = false;

  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  @Prop({ reflect: true }) required = false;

  /**
   * Event emitted when the checked state of the checkbox changes
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /**
   * Event emitted when the value of the checkbox changes
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the checkbox is blurred
   */
  @Event() ixBlur!: EventEmitter<void>;

  private touched = false;
  private formSubmissionAttempted = false;
  private cleanupFormListener?: () => void;
  private classMutationObserver?: ClassMutationObserver;

  private readonly inputRef = makeRef<HTMLInputElement>((checkboxRef) => {
    checkboxRef.checked = this.checked;
  });

  private setCheckedState(newChecked: boolean) {
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }

  @Watch('checked')
  onCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
    this.syncValidationClasses();
  }

  private syncValidationClasses() {
    if (isFormNoValidate(this.hostElement)) {
      this.hostElement.classList.remove('ix-invalid--required', 'ix-invalid');
      return;
    }

    const checkboxGroup = this.hostElement.closest('ix-checkbox-group');
    let checkboxes: HTMLIxCheckboxElement[];
    let group: Element | null;

    if (checkboxGroup) {
      checkboxes = Array.from(
        checkboxGroup.querySelectorAll<HTMLIxCheckboxElement>('ix-checkbox')
      );
      group = checkboxGroup;
    } else {
      checkboxes = [this.hostElement];
      group = null;
    }

    const hasRequired = checkboxes.some((c) => c.required);
    if (!hasRequired) {
      this.hostElement.classList.remove('ix-invalid--required', 'ix-invalid');
      return;
    }

    applyCheckboxValidation(
      checkboxes,
      group,
      this.touched,
      this.formSubmissionAttempted
    );
  }

  @Watch('value')
  onValueChange() {
    this.valueChange.emit(this.value);
    this.syncValidationClasses();
  }

  connectedCallback(): void {
    const parent = this.hostElement.closest('ix-checkbox-group');
    if (parent) {
      this.classMutationObserver = createClassMutationObserver(parent, () => {
        this.hostElement.classList.toggle(
          'ix-invalid--required',
          parent.classList.contains('ix-invalid--required')
        );
      });
    }
    this.cleanupFormListener = setupFormSubmitListener(this.hostElement, () => {
      this.formSubmissionAttempted = true;
      this.syncValidationClasses();
    });
  }

  disconnectedCallback(): void {
    if (this.classMutationObserver) {
      this.classMutationObserver.destroy();
    }
    if (this.cleanupFormListener) {
      this.cleanupFormListener();
    }
  }

  componentWillLoad() {
    this.updateFormInternalValue();
  }

  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value ?? 'on');
    } else {
      this.formInternals.setFormValue(null);
    }
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(this.checked);
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return Promise.resolve(this.formInternals.form);
  }

  /** @internal */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  @HookValidationLifecycle()
  updateClassMappings() {
    /** This function is intentionally empty */
  }

  /**
   * Resets the checkbox to its initial unchecked state and clears validation.
   */
  @Method()
  async clear(): Promise<void> {
    this.checked = false;
    this.touched = false;
    this.formSubmissionAttempted = false;
    this.updateFormInternalValue();
    this.syncValidationClasses();
  }

  private renderCheckmark() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.indeterminate && (
          <Fragment>
            <rect width="18" height="18" fill="transparent" />
            <rect
              x="3"
              y="8"
              width="12"
              height="2"
              fill="var(--ix-checkbox-check-color)"
            />
          </Fragment>
        )}

        {this.checked && (
          <path
            d="M3.65625 8.15625L8.4375 12.9375L14.625 3.9375"
            stroke="var(--ix-checkbox-check-color)"
            stroke-width="2"
          />
        )}
      </svg>
    );
  }

  render() {
    return (
      <Host
        aria-checked={a11yBoolean(this.checked)}
        aria-disabled={a11yBoolean(this.disabled)}
        role="checkbox"
        class={{
          disabled: this.disabled,
          checked: this.checked,
          indeterminate: this.indeterminate,
        }}
        onFocus={() => (this.touched = true)}
        onBlur={() => {
          this.ixBlur.emit();
          this.touched = true;
          this.syncValidationClasses();
        }}
      >
        <label>
          <input
            aria-checked={a11yBoolean(this.checked)}
            required={this.required}
            disabled={this.disabled}
            checked={this.checked}
            ref={this.inputRef}
            type="checkbox"
            onChange={() => this.setCheckedState(!this.checked)}
          />
          <button
            disabled={this.disabled}
            class={{
              checked: this.checked,
            }}
            onClick={() => this.setCheckedState(!this.checked)}
          >
            {this.renderCheckmark()}
          </button>
          <ix-typography
            format="label"
            textColor={this.disabled ? 'weak' : 'std'}
          >
            {this.label}
            <slot></slot>
          </ix-typography>
        </label>
      </Host>
    );
  }
}

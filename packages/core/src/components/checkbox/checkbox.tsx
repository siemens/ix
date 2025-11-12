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
import { HookValidationLifecycle, IxFormComponent, shouldSuppressInternalValidation } from '../utils/input';
import { makeRef } from '../utils/make-ref';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
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

  private get parentForm(): HTMLFormElement | null {
    return this.hostElement.closest('form');
  }

  private shouldSuppressValidationFallback(): boolean {
    const form = this.parentForm;
    if (!form) return false;
    return (
      form.hasAttribute('novalidate') ||
      form.hasAttribute('data-novalidate')
    );
  }

  private async syncValidationClasses() {
    let suppressValidation = false;
    
    try {
      suppressValidation = await shouldSuppressInternalValidation(this);
    } catch (error) {
      suppressValidation = this.shouldSuppressValidationFallback();
    }

    if (suppressValidation) {
      this.hostElement.classList.remove('ix-invalid--required');
      this.hostElement.classList.remove('ix-invalid');
      return;
    }
    if (this.required) {
      let isChecked = this.checked;
      const checkboxGroup = this.hostElement.closest('ix-checkbox-group');
      if (!checkboxGroup && this.name) {
        const form = this.parentForm;
        const checkboxes: NodeListOf<HTMLElement> = (form
          ? form.querySelectorAll(`ix-checkbox[name="${this.name}"]`)
          : document.querySelectorAll(`ix-checkbox[name="${this.name}"]`));
        isChecked = Array.from(checkboxes).some((el: any) => el.checked);
        Array.from(checkboxes).forEach((el: any) => {
          if (isChecked) {
            el.classList.remove('ix-invalid--required', 'ix-invalid');
          } else {
            const touched = el.touched || el.formSubmissionAttempted || this.touched || this.formSubmissionAttempted;
            el.classList.toggle('ix-invalid--required', touched);
            if (touched) {
              el.classList.add('ix-invalid');
            }
          }
        });

        if (checkboxes.length > 0) {
          const group = checkboxes[0].closest('ix-checkbox-group');
          if (group) {
            if (isChecked) {
              group.classList.remove('ix-invalid', 'ix-invalid--required');
            } else {
              const anyTouched = Array.from(checkboxes).some((el: any) => el.touched || el.formSubmissionAttempted);
              group.classList.toggle('ix-invalid--required', anyTouched);
              if (anyTouched) {
                group.classList.add('ix-invalid');
              }
            }
          }
        }
      } else if (checkboxGroup && this.name) {
        const checkboxes: NodeListOf<HTMLElement> = checkboxGroup.querySelectorAll(`ix-checkbox[name="${this.name}"]`);
        isChecked = Array.from(checkboxes).some((el: any) => el.checked);
        Array.from(checkboxes).forEach((el: any) => {
          if (isChecked) {
            el.classList.remove('ix-invalid--required', 'ix-invalid');
          } else {
            const touched = el.touched || el.formSubmissionAttempted || this.touched || this.formSubmissionAttempted;
            el.classList.toggle('ix-invalid--required', touched);
            if (touched) {
              el.classList.add('ix-invalid');
            }
          }
        });
        if (checkboxGroup) {
          if (isChecked) {
            checkboxGroup.classList.remove('ix-invalid', 'ix-invalid--required');
          } else {
            const anyTouched = Array.from(checkboxes).some((el: any) => el.touched || el.formSubmissionAttempted);
            checkboxGroup.classList.toggle('ix-invalid--required', anyTouched);
            if (anyTouched) {
              checkboxGroup.classList.add('ix-invalid');
            }
          }
        }
      } else {
        const isRequiredInvalid = !isChecked && (this.touched || this.formSubmissionAttempted);
        this.hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);
        if (isChecked) {
          this.hostElement.classList.remove('ix-invalid');
        } else if (isRequiredInvalid) {
          this.hostElement.classList.add('ix-invalid');
        }
      }
    } else {
      this.hostElement.classList.remove('ix-invalid--required');
      this.hostElement.classList.remove('ix-invalid');
    }
  }

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

    if (this.required && this.name) {
      const form = this.parentForm;
      const checkboxes: NodeListOf<HTMLElement> = (form
        ? form.querySelectorAll(`ix-checkbox[name="${this.name}"]`)
        : document.querySelectorAll(`ix-checkbox[name="${this.name}"]`));
      const isChecked = Array.from(checkboxes).some((el: any) => el.checked);
      if (isChecked) {
        Array.from(checkboxes).forEach((el: any) => {
          el.classList.remove('ix-invalid--required', 'ix-invalid');
        });
        if (checkboxes.length > 0) {
          const group = checkboxes[0].closest('ix-checkbox-group');
          if (group) {
            group.classList.remove('ix-invalid', 'ix-invalid--required');
          }
        }
      }
    }
  }

  @Watch('value')
  onValueChange() {
    this.valueChange.emit(this.value);
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
        onFocus={() => {
          if (!this.touched) {
            this.touched = true;
            this.syncValidationClasses();
          }
        }}
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

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
import { HookValidationLifecycle, IxFormComponent } from '../utils/input';
import { makeRef } from '../utils/make-ref';

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
        onFocus={() => (this.touched = true)}
        onBlur={() => this.ixBlur.emit()}
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

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
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
  Method,
  Element,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import {
  ClassMutationObserver,
  createClassMutationObserver,
  IxFormComponent,
} from '../utils/input';
import { a11yBoolean } from '../utils/a11y';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-radio',
  styleUrl: 'radio.scss',
  shadow: true,
  formAssociated: true,
})
export class Radio implements IxFormComponent<string> {
  @Element() hostElement!: HTMLIxRadioElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * Name of the radio component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the radio component
   */
  @Prop({ reflect: true }) value?: string;

  /**
   * Label for the radio component
   */
  @Prop() label?: string;

  /**
   * Disabled state of the radio component
   */
  @Prop() disabled: boolean = false;

  /**
   * Checked state of the radio component
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * Requires the radio component and its group to be checked for the form to be submittable
   *
   * @since 3.0.0
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Event emitted when the checked state of the radio changes
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /**
   * Event emitted when the value of the radio changes
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the radio is blurred
   */
  @Event() ixBlur!: EventEmitter<void>;

  private classMutationObserver?: ClassMutationObserver;

  private readonly inputRef = makeRef<HTMLInputElement>((radiobuttonRef) => {
    radiobuttonRef.checked = this.checked;
  });

  private setCheckedState(newChecked: boolean) {
    if (this.checked) {
      return;
    }
    const result = this.checkedChange.emit(newChecked);
    if (result.defaultPrevented) {
      return;
    }

    this.checked = newChecked;
  }

  @Watch('checked')
  async onCheckedChange() {
    const radiobuttonRef = await this.inputRef.waitForCurrent();
    radiobuttonRef.checked = this.checked;

    this.updateFormInternalValue();
  }

  @Watch('value')
  onValueChange() {
    this.valueChange.emit(this.value);
  }

  connectedCallback(): void {
    const parent = this.hostElement.closest('ix-radio-group');
    if (parent) {
      this.classMutationObserver = createClassMutationObserver(parent, () => {
        this.hostElement.classList.toggle(
          'ix-invalid--required',
          parent.classList.contains('ix-invalid--required')
        );
      });
    }
  }

  disconnectedCallback(): void {
    if (this.classMutationObserver) {
      this.classMutationObserver.destroy();
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

  render() {
    return (
      <Host
        aria-checked={a11yBoolean(this.checked)}
        aria-disabled={a11yBoolean(this.disabled)}
        role="radio"
        class={{
          disabled: this.disabled,
          checked: this.checked,
        }}
        onBlur={() => this.ixBlur.emit()}
      >
        <label>
          <input
            aria-checked={a11yBoolean(this.checked)}
            required={this.required}
            disabled={this.disabled}
            checked={this.checked}
            name={this.name}
            ref={this.inputRef}
            type="radio"
            onChange={() => {
              const ref = this.inputRef.current;
              if (ref) {
                this.setCheckedState(ref.checked);
              }
            }}
          />
          <button
            disabled={this.disabled}
            class={{
              checked: this.checked,
            }}
            onClick={() => this.setCheckedState(!this.checked)}
          >
            <div
              class="checkmark"
              style={{ visibility: this.checked ? 'visible' : 'hidden' }}
            ></div>
          </button>
          {this.label && (
            <ix-typography
              format="label"
              textColor={this.disabled ? 'weak' : 'std'}
            >
              {this.label}
              <slot></slot>
            </ix-typography>
          )}
        </label>
      </Host>
    );
  }
}

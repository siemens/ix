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
  State,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { HookValidationLifecycle, IxFormComponent } from '../utils/input';
import { hasSlottedContent } from '../utils/shadow-dom';

type AriaCheckedValue = 'true' | 'false' | 'mixed';

/**
 * @form-ready
 * @slot default - Checkbox label.
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
  private keyboardActivationPending = false;

  @State() private hasDefaultSlotElements = false;

  private defaultSlotElement?: HTMLSlotElement;

  private setCheckedState(newChecked: boolean) {
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }

  private toggleCheckedState() {
    if (this.disabled) {
      return;
    }

    this.setCheckedState(!this.checked);
  }

  private clearKeyboardActivationPending() {
    this.keyboardActivationPending = false;
  }

  private onKeyDown(event: KeyboardEvent) {
    if (this.disabled) {
      return;
    }

    if (event.code === 'Space') {
      event.preventDefault();
      this.keyboardActivationPending = true;
      this.toggleCheckedState();
    }
  }

  private onKeyUp(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.clearKeyboardActivationPending();
    }
  }

  private onClick() {
    if (this.keyboardActivationPending) {
      this.clearKeyboardActivationPending();
      return;
    }

    this.toggleCheckedState();
  }

  disconnectedCallback() {
    this.clearKeyboardActivationPending();
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

  componentDidLoad() {
    this.updateDefaultSlotElements();
  }

  private updateDefaultSlotElements() {
    this.hasDefaultSlotElements = hasSlottedContent(this.defaultSlotElement);
  }

  private get isLabelLess() {
    return !this.label && !this.hasDefaultSlotElements;
  }

  private get ariaLabel() {
    return (
      this.label ||
      this.hostElement.getAttribute('aria-label') ||
      this.hostElement.textContent?.trim() ||
      undefined
    );
  }

  private get ariaCheckedValue(): AriaCheckedValue {
    if (this.indeterminate) {
      return 'mixed';
    }

    return this.checked ? 'true' : 'false';
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
              fill="var(--ix-checkbox-checkmark--color)"
            />
          </Fragment>
        )}

        {this.checked && (
          <path
            d="M3.65625 8.15625L8.4375 12.9375L14.625 3.9375"
            stroke="var(--ix-checkbox-checkmark--color)"
            stroke-width="2"
          />
        )}
      </svg>
    );
  }

  render() {
    return (
      <Host
        aria-checked={this.ariaCheckedValue}
        aria-label={this.ariaLabel}
        aria-disabled={a11yBoolean(this.disabled)}
        aria-required={a11yBoolean(this.required)}
        role="checkbox"
        tabindex={this.disabled ? -1 : 0}
        class={{
          disabled: this.disabled,
          checked: this.checked,
          indeterminate: this.indeterminate,
          'label-less': this.isLabelLess,
        }}
        onClick={() => this.onClick()}
        onKeyDown={(event: KeyboardEvent) => this.onKeyDown(event)}
        onKeyUp={(event: KeyboardEvent) => this.onKeyUp(event)}
        onFocus={() => (this.touched = true)}
        onBlur={() => this.ixBlur.emit()}
      >
        <div aria-hidden="true">
          <div class="checkbox-button">
            <div
              aria-hidden="true"
              class={{
                'checkbox-box': true,
                checked: this.checked,
              }}
            >
              {this.renderCheckmark()}
            </div>
          </div>
          <ix-typography
            format="label"
            textColor={this.disabled ? 'weak' : 'std'}
          >
            {this.label}
            <slot
              onSlotchange={() => this.updateDefaultSlotElements()}
              ref={(element) =>
                (this.defaultSlotElement = element as HTMLSlotElement)
              }
            ></slot>
          </ix-typography>
        </div>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { HookValidationLifecycle, IxFormComponent } from '../utils/input';

const DEFAULT_TEXT_ON = 'On';
const DEFAULT_TEXT_OFF = 'Off';
const DEFAULT_TEXT_INDETERMINATE = 'Mixed';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
  formAssociated: true,
})
export class Toggle implements IxFormComponent<string> {
  @AttachInternals() formInternals!: ElementInternals;

  @Element() hostElement!: HTMLIxToggleElement;

  /**
   * Name of the checkbox component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the checkbox component
   */
  @Prop({ reflect: true }) value: string = 'on';

  /**
   * Whether the slide-toggle element is checked or not.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * Whether the slide-toggle element is disabled or not.
   */
  @Prop() disabled = false;

  /**
   * If true the control is in indeterminate state
   */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /**
   * Text for on state
   */
  @Prop() textOn = DEFAULT_TEXT_ON;

  /**
   * Text for off state
   */
  @Prop() textOff = DEFAULT_TEXT_OFF;

  /**
   * Text for indeterminate state
   */
  @Prop() textIndeterminate = DEFAULT_TEXT_INDETERMINATE;

  /**
   * Hide `on` and `off` text
   */
  @Prop() hideText = false;

  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  @Prop({ reflect: true }) required = false;

  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /** @internal */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * An event will be dispatched each time the toggle is blurred.
   */
  @Event() ixBlur!: EventEmitter<void>;

  private touched = false;

  private hostA11y: A11yAttributes = {};

  onCheckedChange(newChecked: boolean) {
    if (this.disabled) {
      return;
    }

    const wasIndeterminate = this.indeterminate;
    const oldChecked = this.checked;

    if (this.indeterminate) {
      this.indeterminate = false;
    }

    this.checked = newChecked;

    const { defaultPrevented } = this.checkedChange.emit(this.checked);

    if (defaultPrevented) {
      this.indeterminate = wasIndeterminate;
      this.checked = oldChecked;
    }
  }

  componentWillLoad() {
    this.hostA11y = a11yHostAttributes(this.hostElement);
    this.updateFormInternalValue();
  }

  updateFormInternalValue(): void {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }

  @Watch('checked')
  watchCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
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

  render() {
    let toggleText = this.textOff;

    if (this.checked) {
      toggleText = this.textOn;
    }

    if (this.indeterminate) {
      toggleText = this.textIndeterminate;
    }

    const isDefaultLabels =
      this.textOn === DEFAULT_TEXT_ON &&
      this.textOff === DEFAULT_TEXT_OFF &&
      this.textIndeterminate === DEFAULT_TEXT_INDETERMINATE;
    const useToggleTextAsLabel = this.hideText || isDefaultLabels;
    const ariaLabel =
      this.hostA11y['aria-label'] ??
      (useToggleTextAsLabel ? toggleText : undefined);

    return (
      <Host
        {...this.hostA11y}
        role="switch"
        tabindex={this.disabled ? -1 : 0}
        aria-label={ariaLabel}
        aria-checked={a11yBoolean(this.checked)}
        aria-disabled={a11yBoolean(this.disabled)}
        aria-required={a11yBoolean(this.required)}
        class={{
          disabled: this.disabled,
        }}
        onBlur={() => this.ixBlur.emit()}
        onFocus={() => (this.touched = true)}
        onKeyDown={(e: KeyboardEvent) => {
          if (this.disabled) return;
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.onCheckedChange(!this.checked);
          }
        }}
        onClick={() => {
          if (!this.disabled) {
            this.onCheckedChange(!this.checked);
          }
        }}
      >
        <div class="wrapper">
          <div
            class={{
              switch: true,
              checked: this.checked,
              indeterminate: this.indeterminate,
            }}
            aria-hidden="true"
          >
            <div class="slider"></div>
          </div>
          <input
            type="checkbox"
            aria-hidden="true"
            tabindex={-1}
            disabled={this.disabled}
            indeterminate={this.indeterminate}
            checked={this.checked}
            onFocus={() => this.hostElement.focus()}
            onClick={(e) => e.preventDefault()}
          />
          {!this.hideText && (
            <ix-typography
              class="label"
              aria-hidden={isDefaultLabels ? 'true' : undefined}
            >
              {toggleText}
            </ix-typography>
          )}
        </div>
      </Host>
    );
  }
}

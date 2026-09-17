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
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { HookValidationLifecycle, IxFormComponent } from '../utils/input';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import { makeRef } from '../utils/make-ref';
import { hasSlottedContent } from '../utils/shadow-dom';

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
export class Checkbox
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin)
  implements IxFormComponent<string>, InheritAriaAttributesMixinContract
{
  @Element() override hostElement!: HTMLIxCheckboxElement;

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

  @State() private hasDefaultSlotElements = false;

  private defaultSlotElement?: HTMLSlotElement;

  private readonly inputRef = makeRef<HTMLInputElement>((checkboxRef) => {
    checkboxRef.checked = this.checked;
    checkboxRef.indeterminate = this.indeterminate;
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

  override componentWillLoad() {
    super.componentWillLoad();
    this.updateFormInternalValue();
  }

  override componentDidLoad() {
    this.updateDefaultSlotElements();
  }

  private updateDefaultSlotElements() {
    this.hasDefaultSlotElements = hasSlottedContent(this.defaultSlotElement);
  }

  private get isLabelLess() {
    return !this.label && !this.hasDefaultSlotElements;
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

  override render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
          checked: this.checked,
          indeterminate: this.indeterminate,
          'label-less': this.isLabelLess,
        }}
        onFocus={() => (this.touched = true)}
        onBlur={() => this.ixBlur.emit()}
      >
        <label>
          <input
            {...this.inheritAriaAttributes}
            aria-checked={
              this.indeterminate ? 'mixed' : a11yBoolean(this.checked)
            }
            required={this.required}
            disabled={this.disabled}
            checked={this.checked}
            ref={this.inputRef}
            type="checkbox"
            onChange={(event: Event) =>
              this.setCheckedState(
                (event.currentTarget as HTMLInputElement).checked
              )
            }
          />
          <div class="checkbox-button">
            <div
              aria-hidden="true"
              class={{
                'checkbox-control': true,
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
        </label>
      </Host>
    );
  }
}

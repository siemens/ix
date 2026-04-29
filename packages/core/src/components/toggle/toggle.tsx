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
  Mixin,
  Prop,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { DefaultMixins } from '../utils/internal/component';
import {
  InheritAriaAttributesMixin,
  InheritAriaAttributesMixinContract,
} from '../utils/internal/mixins/accessibility/inherit-aria-attributes.mixin';
import { HookValidationLifecycle, IxFormComponent } from '../utils/input';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-toggle',
  styleUrl: 'toggle.scss',
  shadow: true,
  formAssociated: true,
})
export class Toggle
  extends Mixin(...DefaultMixins, InheritAriaAttributesMixin)
  implements IxFormComponent<string>, InheritAriaAttributesMixinContract
{
  @AttachInternals() formInternals!: ElementInternals;

  @Element() override hostElement!: HTMLIxToggleElement;

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
  @Prop() textOn = 'On';

  /**
   * Text for off state
   */
  @Prop() textOff = 'Off';

  /**
   * Text for indeterminate state
   */
  @Prop() textIndeterminate = 'Mixed';

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

  override componentWillLoad() {
    super.componentWillLoad();
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

  private resolveAriaLabel(): string | undefined {
    if (this.inheritAriaAttributes['aria-labelledby']) {
      return undefined;
    }
    return this.inheritAriaAttributes['aria-label'];
  }

  override render() {
    let toggleText = this.textOff;

    if (this.checked) {
      toggleText = this.textOn;
    }

    if (this.indeterminate) {
      toggleText = this.textIndeterminate;
    }

    const ariaLabel = this.resolveAriaLabel();

    const ariaChecked = this.indeterminate
      ? 'mixed'
      : a11yBoolean(this.checked);

    return (
      <Host
        {...this.inheritAriaAttributes}
        role="switch"
        tabindex={this.disabled ? -1 : 0}
        aria-label={ariaLabel}
        aria-checked={ariaChecked}
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
          {!this.hideText && (
            <ix-typography class="label" aria-hidden="true">
              {toggleText}
            </ix-typography>
          )}
        </div>
      </Host>
    );
  }
}

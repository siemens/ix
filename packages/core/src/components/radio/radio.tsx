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
  IxFormComponent,
} from '../utils/input';
import {
  getParentForm,
  isFormNoValidate,
  handleStandaloneRadioValidation,
  updateRadioValidationClasses,
  updateRadioGroupValidationClasses,
  setupFormSubmitListener,
} from './radio-validation';

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
  private touched = false;
  private formSubmissionAttempted = false;
  private cleanupFormListener?: () => void;

  /** @internal */
  @Method()
  async setCheckedState(newChecked: boolean) {
    if (this.checked) {
      return;
    }
    const result = this.checkedChange.emit(newChecked);
    if (result.defaultPrevented) {
      return;
    }

    this.checked = newChecked;
  }

  private syncValidationClasses() {
    if (isFormNoValidate(this.hostElement) || !this.required) {
      this.hostElement.classList.remove('ix-invalid--required', 'ix-invalid');
      return;
    }

    let isChecked = this.checked;
    const radioGroup = this.hostElement.closest('ix-radio-group');
    const clearRadiosAndGroup = (radios: NodeListOf<HTMLElement>) => {
      Array.from(radios).forEach((el: any) => {
        el.classList.remove('ix-invalid--required', 'ix-invalid');
      });
      if (radios.length > 0) {
        const group = radios[0].closest('ix-radio-group');
        if (group) {
          group.classList.remove('ix-invalid', 'ix-invalid--required');
        }
      }
    };

    const handleNamedRadios = (
      radios: NodeListOf<HTMLElement>,
      group: Element | null
    ) => {
      if (isFormNoValidate(this.hostElement)) {
        clearRadiosAndGroup(radios);
        if (group) {
          updateRadioGroupValidationClasses(group, radios);
        }
        return;
      }

      updateRadioValidationClasses(
        radios,
        this.touched,
        this.formSubmissionAttempted
      );

      if (group) {
        updateRadioGroupValidationClasses(group, radios);
      }
    };

    if (this.name) {
      if (radioGroup) {
        const radios: NodeListOf<HTMLElement> = radioGroup.querySelectorAll(
          `ix-radio[name="${this.name}"]`
        );
        handleNamedRadios(radios, radioGroup);
      } else {
        const form = getParentForm(this.hostElement);
        const radios: NodeListOf<HTMLElement> = form
          ? form.querySelectorAll(`ix-radio[name="${this.name}"]`)
          : document.querySelectorAll(`ix-radio[name="${this.name}"]`);
        handleNamedRadios(
          radios,
          radios.length > 0 ? radios[0].closest('ix-radio-group') : null
        );
      }
    } else {
      handleStandaloneRadioValidation(
        this.hostElement,
        isChecked,
        this.touched,
        this.formSubmissionAttempted
      );
    }
  }

  @Watch('checked')
  async onCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
    this.syncValidationClasses();
  }

  @Watch('value')
  onValueChange() {
    this.valueChange.emit(this.value);
    this.syncValidationClasses();
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

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) {
      return;
    }
    let preventEvent = false;

    if (event.code === 'Space') {
      preventEvent = true;
      this.setCheckedState(true);
    }
    const closestRadioGroup = this.hostElement.closest('ix-radio-group');

    switch (event.code) {
      case 'ArrowUp':
      case 'ArrowLeft':
        preventEvent = true;
        closestRadioGroup?.setCheckedToNextItem(this.hostElement, false);
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        preventEvent = true;
        closestRadioGroup?.setCheckedToNextItem(this.hostElement, true);
        break;
      default:
        break;
    }

    if (preventEvent) {
      event.stopPropagation();
      event.preventDefault();
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
    let tabIndex = 0;

    if (this.disabled) {
      tabIndex = -1;
    }

    return (
      <Host
        aria-checked={a11yBoolean(this.checked)}
        aria-disabled={a11yBoolean(this.disabled)}
        role="radio"
        tabindex={tabIndex}
        class={{
          disabled: this.disabled,
          checked: this.checked,
        }}
        onClick={() => {
          if (this.disabled) return;
          this.setCheckedState(true);
        }}
        onKeyDown={(event: KeyboardEvent) => this.onKeyDown(event)}
        onBlur={() => {
          this.ixBlur.emit();
          this.touched = true;
          this.syncValidationClasses();
        }}
      >
        <label>
          <div class="radio-button">
            <div
              aria-hidden="true"
              class={{
                ['radio-checkmark']: true,
                checked: this.checked,
              }}
            >
              <div
                class="checkmark"
                style={{ visibility: this.checked ? 'visible' : 'hidden' }}
              ></div>
            </div>
          </div>
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

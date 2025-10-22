/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter } from '@stencil/core';
import { IxComponent } from '../internal';

export * from './validation';

/**
 * Sets up HTML5 validation behavior on form submit.
 * When the form does not have noValidate attribute, this ensures
 * the browser's native validation UI is triggered.
 *
 * @param formInternals - The ElementInternals instance of the form-associated custom element
 * @returns Cleanup function to remove the event listener, or undefined if not needed
 */
export function handleFormNoValidateAttribute(
  formInternals: ElementInternals
): (() => void) | undefined {
  const form = formInternals.form;

  // Only set up HTML5 validation if form exists and noValidate is not set
  if (!form || form.noValidate) {
    return undefined;
  }

  const submitHandler = async (event: Event) => {
    const input = await (formInternals as any).getNativeInputElement?.();

    // If input is invalid, prevent submission and show browser validation UI
    if (input && !input.validity.valid) {
      event.preventDefault();
      input.reportValidity();
    }
  };

  form.addEventListener('submit', submitHandler);
  return () => form.removeEventListener('submit', submitHandler);
}

/**
 * Sets up internal JavaScript validation on form submit for security.
 * This always runs to prevent validation bypass through browser DevTools,
 * providing a server-side-like validation layer on the client.
 *
 * @param formInternals - The ElementInternals instance
 * @param component - Component instance with validation properties
 * @returns Cleanup function to remove the event listener, or undefined if no form
 */
export function handleInternalValidationOnSubmit(
  formInternals: ElementInternals,
  component: {
    required?: boolean;
    value?: any;
    touched?: boolean;
    updateFormValidity?: () => void;
    syncValidationClasses?: () => Promise<void>;
  }
): (() => void) | undefined {
  const form = formInternals.form;

  if (!form) {
    return undefined;
  }

  const submitHandler = async (event: Event) => {
    const hasRequiredError = component.required && !component.value;
    const hasFormatError = (component as any).isInputInvalid;

    // No validation errors - allow submission
    if (!hasRequiredError && !hasFormatError) {
      return;
    }

    // Prevent form submission
    event.preventDefault();
    event.stopPropagation();

    // Mark as touched and update validation state for required errors
    if (hasRequiredError) {
      (component as any).touched = true;
      component.updateFormValidity?.();
      await component.syncValidationClasses?.();
    }

    // Focus the invalid field for better UX
    const input = await (formInternals as any).getNativeInputElement?.();
    input?.focus();
  };

  form.addEventListener('submit', submitHandler);
  return () => form.removeEventListener('submit', submitHandler);
}

export interface FieldWrapperInterface {
  /**
   * Label for the field component
   */
  label?: string;
  /**
   * Show text below the field component which show additional information
   */
  helperText?: string;
  /**
   * Info text for the field component
   */
  infoText?: string;
  /**
   * Warning text for the field component
   */
  warningText?: string;
  /**
   * Error text for the field component
   */
  invalidText?: string;
  /**
   * Valid text for the field component
   */
  validText?: string;
  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  showTextAsTooltip?: boolean;
}

export type HTMLIxFormComponentElement<T> = HTMLElement & IxFormComponent<T>;
export type HTMLIxInputFieldComponentElement<T> =
  HTMLIxFormComponentElement<T> & IxInputFieldComponent<T>;

export interface IxFormValidationState {
  // Annotate as @State()
  isInvalid: boolean;
  // Annotate as @State()
  isValid: boolean;
  // Annotate as @State()
  isInfo: boolean;
  // Annotate as @State()
  isWarning: boolean;
}

export interface IxFormComponent<T = string> extends IxComponent {
  // Private internal
  formInternals: ElementInternals;

  // Annotate as @Prop({ reflect: true })
  required?: boolean;
  // Annotate as @Prop({ reflect: true })
  name?: string;
  // Annotate as @Prop()
  value?: T;
  // Annotate as @Prop()
  disabled: boolean;

  valueChange: EventEmitter<T>;
  ixBlur: EventEmitter<void>;

  updateFormInternalValue(value: T): void | Promise<void>;
  hasValidValue(): Promise<boolean>;
  getValidityState?(): Promise<ValidityState>;
  getAssociatedFormElement(): Promise<HTMLFormElement | null>;
  isTouched?(): Promise<boolean>;
}

export interface IxInputFieldComponent<T = string>
  extends IxFormComponent<T>,
    IxFormValidationState,
    FieldWrapperInterface {
  // Annotate as @Prop()
  placeholder?: string;
  // Annotate as @Prop()
  readonly: boolean;

  // Annotate as @Method()
  getNativeInputElement(): Promise<HTMLInputElement | HTMLTextAreaElement>;

  // Annotate as @Method()
  focusInput(): Promise<void>;
}

export function isIxInputFieldComponent<T>(
  obj: HTMLElement | IxFormComponent<T>
): obj is HTMLIxInputFieldComponentElement<T> {
  return (
    obj &&
    'getAssociatedFormElement' in obj &&
    typeof obj.getAssociatedFormElement === 'function' &&
    'getNativeInputElement' in obj &&
    typeof obj.getNativeInputElement === 'function'
  );
}

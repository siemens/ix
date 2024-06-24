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

export interface IxFormComponent<T = any> extends IxComponent {
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
  updateFormInternalValue(value: T): void;
  hasValidValue(): Promise<boolean>;
  getValidityState?(): Promise<ValidityState>;
  getAssociatedFormElement(): Promise<HTMLFormElement | null>;
}

export interface IxInputFieldComponent<T = any>
  extends IxFormComponent<T>,
    IxFormValidationState,
    FieldWrapperInterface {
  // Annotate as @Prop()
  placeholder?: string;
  // Annotate as @Prop()
  readonly: boolean;

  ixBlur: EventEmitter<void>;

  // Annotate as @Method()
  getNativeInputElement(): Promise<HTMLInputElement | HTMLTextAreaElement>;
}

export function isIxFormComponent(
  obj: HTMLElement
): obj is HTMLIxFormComponentElement<unknown> {
  return (
    'getAssociatedFormElement' in obj &&
    typeof obj.getAssociatedFormElement === 'function'
  );
}

export function isIxInputFieldComponent(
  obj: HTMLElement
): obj is HTMLIxInputFieldComponentElement<unknown> {
  return (
    obj &&
    'getAssociatedFormElement' in obj &&
    typeof obj.getAssociatedFormElement === 'function' &&
    'getNativeInputElement' in obj &&
    typeof obj.getNativeInputElement === 'function'
  );
}

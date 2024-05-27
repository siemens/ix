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
  label?: string;
  helperText?: string;
  infoText?: string;
  warningText?: string;
  errorText?: string;
  validText?: string;
  showTextAsTooltip?: boolean;
}

export type HTMLIxFormComponentElement<T> = HTMLElement & IxFormComponent<T>;

export interface IxFormComponent<T = any> {
  // Private internal
  formInternals: ElementInternals;

  // Annotate as @Prop({ reflect: true })
  required?: boolean;
  // Annotate as @Prop({ reflect: true })
  name?: string;
  // Annotate as @Prop()
  value?: T;

  // Annotate as @State()
  isInvalid: boolean;
  // Annotate as @State()
  isValid: boolean;

  valueChange: EventEmitter<T>;
  updateFormInternalValue(value: T): void;
  hasValidValue(): Promise<boolean>;
  getAssociatedFormElement(): Promise<HTMLFormElement>;
}

export interface IxFieldComponent<T = any>
  extends IxComponent,
    FieldWrapperInterface,
    IxFormComponent<T> {
  // Annotate as @Prop()
  placeholder?: string;

  // TODO: Should we add additional input properties here?
}

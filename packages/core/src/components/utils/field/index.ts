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

export interface HelperText {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export interface IxFormComponent<T = any> {
  formInternals: ElementInternals;

  name?: string;
  value?: T;

  valueChange: EventEmitter<T>;
  updateFormInternalValue(value: T): void;
}

export interface IxFieldComponent<T = any>
  extends IxComponent,
    HelperText,
    IxFormComponent<T> {
  placeholder?: string;
  isInvalid: boolean;

  // TODO: Should we add additional input properties here?
}

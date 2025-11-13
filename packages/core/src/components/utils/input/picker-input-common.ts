/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter } from '@stencil/core';
import { syncValidationClasses } from './validation';

export interface PickerInputSyncOptions<T = string | undefined> {
  updateFormInternalValue: (value: T) => void;
  valueChange: EventEmitter<T>;
  value: T;

  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  touched: boolean;
  isInputInvalid: boolean;
}

export function syncPickerInputState<T = string | undefined>(
  options: PickerInputSyncOptions<T>
): void {
  options.updateFormInternalValue(options.value);
  options.valueChange.emit(options.value);

  syncValidationClasses({
    hostElement: options.hostElement,
    suppressValidation: options.suppressValidation,
    required: options.required,
    value: options.value as string | undefined,
    touched: options.touched,
    isInputInvalid: options.isInputInvalid,
  });
}

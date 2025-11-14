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

export interface PickerValueWatcherConfig<T = string> {
  newValue: T;
  isResetting: boolean;
  required?: boolean;
  initialValue?: T;
  onInput: (value: T) => void;
  setTouched?: (touched: boolean) => void;
  setDirty?: (dirty: boolean) => void;
}

export function handlePickerValueWatcher<T = string>(
  config: PickerValueWatcherConfig<T>
): void {
  if (config.isResetting) {
    config.onInput(config.newValue);
    return;
  }

  if (!config.newValue && config.required && config.setTouched) {
    config.setTouched(true);
  }

  if (config.setDirty && config.initialValue !== undefined) {
    config.setDirty(config.newValue !== config.initialValue);
  }

  config.onInput(config.newValue);
}

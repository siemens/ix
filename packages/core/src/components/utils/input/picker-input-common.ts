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

export interface SyncOptions<T = string | undefined> {
  updateFormInternalValue: (value: T) => void;
  valueChange: EventEmitter<T>;
  value: T;

  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  touched: boolean;
  isInputInvalid: boolean;
}

export function syncState<T = string | undefined>(
  options: SyncOptions<T>
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

export interface WatchConfig<T = string> {
  newValue: T;
  isResetting: boolean;
  required?: boolean;
  initialValue?: T;
  onInput: (value: T) => void;
  setTouched?: (touched: boolean) => void;
  setDirty?: (dirty: boolean) => void;
}

export function watchValue<T = string>(config: WatchConfig<T>): void {
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

export interface EventConfig {
  isResetting: boolean;
  show: boolean;
  setTouched: (touched: boolean) => void;
  onInput: (value: string) => void;
  openDropdown: () => void;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  handleInputKeyDown?: (event: KeyboardEvent) => void;
  alwaysSetTouchedOnBlur?: boolean;
}

export function onInput(config: EventConfig) {
  return (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!config.isResetting) {
      config.setTouched(true);
    }
    config.onInput(target.value);
  };
}

export function onClick(config: EventConfig) {
  return (event: Event) => {
    if (config.show) {
      event.stopPropagation();
      event.preventDefault();
    }
  };
}

export function onFocus(config: EventConfig) {
  return async () => {
    await config.openDropdown();
    config.ixFocus.emit();
  };
}

export function onBlur(config: EventConfig) {
  return () => {
    config.ixBlur.emit();
    if (config.alwaysSetTouchedOnBlur || !config.isResetting) {
      config.setTouched(true);
    }
    config.syncValidationClasses();
  };
}

export function onKeyDown(config: EventConfig) {
  return (event: KeyboardEvent) => {
    if (config.handleInputKeyDown) {
      config.handleInputKeyDown(event);
    }
  };
}

export interface ValidationOptions {
  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  value: string | undefined;
  touched: boolean;
  isInputInvalid: boolean;
}

export function syncValidation(options: ValidationOptions): void {
  syncValidationClasses({
    hostElement: options.hostElement,
    suppressValidation: options.suppressValidation,
    required: options.required,
    value: options.value as string | undefined,
    touched: options.touched,
    isInputInvalid: options.isInputInvalid,
  });
}

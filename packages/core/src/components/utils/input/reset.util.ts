/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateTime } from 'luxon';
import { EventEmitter } from '@stencil/core';

export interface ResetConfig {
  initialValue?: string;
  format?: string;
  updateFormInternalValue: (value: string) => void;
  onInput: (value: string) => Promise<void>;
  valueChangeEmitter: EventEmitter<string> | EventEmitter<string | undefined>;
  validateFormat?: (value: string, format: string) => boolean;
  setState: {
    setIsResetting: (value: boolean) => void;
    setTouched: (value: boolean) => void;
    setDirty: (value: boolean) => void;
    setIsInputInvalid: (value: boolean) => void;
    setIsInvalid: (value: boolean) => void;
    setInvalidReason: (value: string | undefined) => void;
    setValue: (value: string) => void;
  };
  componentSpecificCleanup?: () => void;
}

export async function resetInputField(config: ResetConfig): Promise<void> {
  const {
    initialValue = '',
    format,
    updateFormInternalValue,
    onInput,
    valueChangeEmitter,
    validateFormat = defaultDateTimeFormatValidation,
    setState,
    componentSpecificCleanup,
  } = config;

  setState.setIsResetting(true);
  resetComponentState(setState);

  componentSpecificCleanup?.();

  const resetValue = getValidatedResetValue(
    initialValue,
    format,
    validateFormat
  );

  await applyResetValue(resetValue, {
    updateFormInternalValue,
    onInput,
    setState,
    valueChangeEmitter,
  });
}

function resetComponentState(setState: ResetConfig['setState']): void {
  setState.setTouched(false);
  setState.setDirty(false);
  setState.setIsInputInvalid(false);
  setState.setIsInvalid(false);
  setState.setInvalidReason(undefined);
}

function getValidatedResetValue(
  initialValue: string,
  format: string | undefined,
  validateFormat: (value: string, format: string) => boolean
): string {
  if (!initialValue) {
    return '';
  }

  if (!format) {
    return initialValue;
  }

  const isValid = validateFormat(initialValue, format);
  return isValid ? initialValue : '';
}

async function applyResetValue(
  resetValue: string,
  handlers: {
    updateFormInternalValue: (value: string) => void;
    onInput: (value: string) => Promise<void>;
    setState: ResetConfig['setState'];
    valueChangeEmitter: ResetConfig['valueChangeEmitter'];
  }
): Promise<void> {
  const { updateFormInternalValue, onInput, setState, valueChangeEmitter } =
    handlers;

  setState.setValue(resetValue);
  updateFormInternalValue(resetValue);

  await onInput(resetValue);
  setState.setIsResetting(false);
  valueChangeEmitter.emit(resetValue);
}

export function defaultDateTimeFormatValidation(
  value: string,
  format: string
): boolean {
  const parsed = DateTime.fromFormat(value, format);
  return parsed.isValid;
}

/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { dropdownController } from '../../dropdown/dropdown-controller';
import { isValidationSuppressedByForm } from './validation';

export async function openDropdown(dropdownElementRef: any) {
  const dropdownElement = await dropdownElementRef.waitForCurrent();
  const id = dropdownElement.getAttribute('data-ix-dropdown');

  dropdownController.dismissAll();
  if (!id) {
    return;
  }

  const dropdown = dropdownController.getDropdownById(id);
  if (!dropdown) {
    return;
  }
  dropdownController.present(dropdown);
}

export async function closeDropdown(dropdownElementRef: any) {
  const dropdownElement = await dropdownElementRef.waitForCurrent();
  const id = dropdownElement.getAttribute('data-ix-dropdown');

  if (!id) {
    return;
  }

  const dropdown = dropdownController.getDropdownById(id);
  if (!dropdown) {
    return;
  }
  dropdownController.dismiss(dropdown);
}

export function handleIconClick(
  event: Event,
  show: boolean,
  openDropdownFn: () => void,
  inputElementRef: any
) {
  if (!show) {
    event.stopPropagation();
    event.preventDefault();
    openDropdownFn();
  }

  if (inputElementRef.current) {
    inputElementRef.current.focus();
  }
}

/** Parse errors stay reported, but show no feedback in `novalidate` forms */
export function shouldShowInputInvalid(
  isInputInvalid: boolean,
  formInternals: ElementInternals
): boolean {
  return isInputInvalid && !isValidationSuppressedByForm(formInternals.form);
}

export function createValidityState(
  isInputInvalid: boolean,
  required: boolean,
  value: string | undefined
): ValidityState {
  return {
    badInput: false,
    customError: false,
    patternMismatch: isInputInvalid,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: !isInputInvalid,
    valueMissing: !!required && !value,
  };
}

export type PickerInputBlur = {
  /** Call from the focus handler of the text field. */
  onFocus: () => void;
  /** Call from the blur handler of the text field. */
  onBlur: () => void;
  /** Call when the picker dropdown closes. */
  onPickerClosed: () => void;
};

/**
 * Defers the blur of a picker input's text field while its picker is open.
 * Moving focus into the picker does not leave the field, so it must not be
 * marked touched or validated yet. `onLeave` runs once the field is left,
 * either directly or by closing the picker.
 */
export function createPickerInputBlur(options: {
  isPickerOpen: () => boolean;
  onLeave: () => void;
}): PickerInputBlur {
  let isDeferred = false;

  return {
    onFocus: () => {
      isDeferred = false;
    },
    onBlur: () => {
      if (options.isPickerOpen()) {
        isDeferred = true;
        return;
      }
      options.onLeave();
    },
    onPickerClosed: () => {
      if (isDeferred) {
        isDeferred = false;
        options.onLeave();
      }
    },
  };
}

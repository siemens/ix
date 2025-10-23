/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { dropdownController } from '../../dropdown/dropdown-controller';

export async function openDropdown(dropdownElementRef: {
  waitForCurrent: () => Promise<HTMLIxDropdownElement>;
}) {
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

export async function closeDropdown(dropdownElementRef: {
  waitForCurrent: () => Promise<HTMLIxDropdownElement>;
}) {
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
  inputElementRef: { current: HTMLInputElement | null }
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

export function updateFormValidity(
  formInternals: ElementInternals | undefined,
  required: boolean | undefined,
  value: string | undefined,
  isInputInvalid: boolean,
  inputElementRef: { current: HTMLInputElement | null }
): void {
  if (!formInternals) return;

  const valueMissing = required && !value;
  const patternMismatch = isInputInvalid && !!value;

  if (valueMissing || patternMismatch) {
    const inputElement = inputElementRef.current;

    formInternals.setValidity(
      {
        valueMissing,
        patternMismatch,
      },
      ' ',
      inputElement || undefined
    );
  } else {
    formInternals.setValidity({});
  }
}

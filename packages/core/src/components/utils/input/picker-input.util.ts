/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { dropdownController } from '../../dropdown/dropdown-controller';

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

/**
 * Updates the form internal value for form-associated custom elements
 * @param formInternals - ElementInternals instance
 * @param value - The value to set
 * @param componentValueSetter - Callback to set the component's value property
 */
export function updateFormInternalValue(
  formInternals: ElementInternals,
  value: string | undefined,
  componentValueSetter: (val: string | undefined) => void
): void {
  if (value) {
    formInternals.setFormValue(value);
  } else {
    formInternals.setFormValue(null);
  }
  componentValueSetter(value);
}

/**
 * Updates form validity state based on validation flags
 * Delegates message generation to the browser for proper localization and pattern support
 * @param formInternals - ElementInternals instance
 * @param required - Whether the field is required
 * @param value - Current field value
 * @param isInputInvalid - Whether the input has a pattern mismatch or format error
 * @param inputElementRef - Reference to the native input element
 */
export function updateFormValidity(
  formInternals: ElementInternals | undefined,
  required: boolean | undefined,
  value: string | undefined,
  isInputInvalid: boolean,
  inputElementRef: any
): void {
  if (!formInternals) return;

  const valueMissing = required && !value;
  const patternMismatch = isInputInvalid && !!value;

  // Set FormInternals validity for form submission validation
  // BUT use an empty string as message to avoid HTML5 validation popups
  if (valueMissing || patternMismatch) {
    const inputElement = inputElementRef.current;

    // Set validity flags but with empty message to prevent browser popups
    // This allows form submission prevention while avoiding HTML5 validation UI
    formInternals.setValidity(
      {
        valueMissing,
        patternMismatch,
      },
      ' ', // Minimal message to satisfy API but prevent visible popups
      inputElement || undefined
    );
  } else {
    formInternals.setValidity({});
  }
}

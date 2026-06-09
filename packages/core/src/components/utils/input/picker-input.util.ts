/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { dropdownController } from '../../dropdown/dropdown-controller';
import { hasKeyboardMode } from '../internal/mixins/setup.mixin';

export function focusInputIfKeyboardMode(
  inputElement: HTMLInputElement | null | undefined
): void {
  if (hasKeyboardMode()) {
    inputElement?.focus();
  }
}

export function resetPickerValueIfInvalid(
  value: string,
  isValid: (value: string) => boolean,
  resetPickerValue: () => void
): boolean {
  const valid = isValid(value);

  if (!valid) {
    resetPickerValue();
  }

  return valid;
}

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

function isInternalFocusTarget(
  hostElement: HTMLElement,
  relatedTarget: Node | null,
  pickerElement?: HTMLElement | null
): boolean {
  if (!relatedTarget) {
    return false;
  }
  return (
    hostElement.contains(relatedTarget) ||
    (hostElement.shadowRoot?.contains(relatedTarget) ?? false) ||
    (pickerElement?.contains(relatedTarget) ?? false)
  );
}

export function handlePickerInputBlur(
  e: FocusEvent,
  show: boolean,
  hostElement: HTMLElement,
  onBlur: () => void,
  pickerElement?: HTMLElement | null
): void {
  const relatedTarget = e.relatedTarget as Node | null;
  if (
    show &&
    isInternalFocusTarget(hostElement, relatedTarget, pickerElement)
  ) {
    return;
  }
  onBlur();
}

export function handlePickerHostFocusout(
  e: FocusEvent,
  hostElement: HTMLElement,
  onExternalFocusout: (hasRelatedTarget: boolean) => void,
  pickerElement?: HTMLElement | null
): void {
  const relatedTarget = e.relatedTarget as Node | null;

  if (isInternalFocusTarget(hostElement, relatedTarget, pickerElement)) {
    return;
  }

  const isPickerNavigating =
    relatedTarget === null &&
    pickerElement &&
    'show' in pickerElement &&
    pickerElement.show;

  if (isPickerNavigating) {
    return;
  }

  onExternalFocusout(relatedTarget !== null);
}

export function syncCustomInputValidity(
  formInternals: ElementInternals,
  hasInvalidInput: boolean,
  required: boolean | undefined,
  value: string | undefined,
  invalidMessage: string,
  requiredMessage: string = 'Please fill out this field.'
): void {
  if (hasInvalidInput) {
    formInternals.setValidity({ patternMismatch: true }, invalidMessage);
    return;
  }

  if (required && !value) {
    formInternals.setValidity({ valueMissing: true }, requiredMessage);
    return;
  }

  formInternals.setValidity({});
}

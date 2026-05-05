/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface RadioElement extends HTMLElement {
  required: boolean;
  checked: boolean;
}

export function isFormNoValidate(element: HTMLElement): boolean {
  const form = element.closest('form');
  if (!form) return false;
  return (
    form.hasAttribute('novalidate') ||
    form.dataset.novalidate !== undefined ||
    form.hasAttribute('ngnovalidate')
  );
}

export function setupFormSubmitListener(
  element: HTMLElement,
  callback: () => void
): (() => void) | undefined {
  const form = element.closest('form');
  if (!form) return undefined;

  const handler = () => callback();
  form.addEventListener('submit', handler);

  return () => {
    form.removeEventListener('submit', handler);
  };
}

export function applyRadioValidation(
  radios: NodeListOf<RadioElement> | RadioElement[],
  group: Element | null,
  touched: boolean,
  formSubmissionAttempted: boolean
) {
  const radiosArr = Array.from(radios);
  const requiredRadios = radiosArr.filter((el) => el.required);
  const targets = requiredRadios.length > 0 ? requiredRadios : radiosArr;

  const anyChecked = targets.some((el) => el.checked);
  const shouldShowError = !anyChecked && (touched || formSubmissionAttempted);

  targets.forEach((el) => {
    el.classList.toggle('ix-invalid--required', shouldShowError);
    el.classList.toggle('ix-invalid', shouldShowError);
  });

  if (group) {
    group.classList.toggle('ix-invalid--required', shouldShowError);
    group.classList.toggle('ix-invalid', shouldShowError);
  }
}

export function clearRadioGroupValidationState(
  group: HTMLElement,
  radios: RadioElement[] | NodeListOf<RadioElement>
) {
  const radiosArr = Array.from(radios);
  group.classList.remove('ix-invalid--required', 'ix-invalid');
  radiosArr.forEach((el) => {
    el.classList.remove('ix-invalid', 'ix-invalid--required');
  });
}

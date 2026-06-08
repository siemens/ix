/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface CheckboxElement extends HTMLElement {
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

export function applyCheckboxValidation(
  checkboxes: NodeListOf<CheckboxElement> | CheckboxElement[],
  group: Element | null,
  touched: boolean,
  formSubmissionAttempted: boolean
) {
  const checkboxArr = Array.from(checkboxes);
  const requiredCheckboxes = checkboxArr.filter((el) => el.required);
  const targets =
    requiredCheckboxes.length > 0 ? requiredCheckboxes : checkboxArr;

  const anyChecked = targets.some((el) => el.checked);
  const shouldShowError = !anyChecked && (touched || formSubmissionAttempted);

  checkboxArr.forEach((el) => {
    const isTarget = targets.includes(el);
    el.classList.toggle('ix-invalid--required', isTarget && shouldShowError);
    el.classList.toggle('ix-invalid', isTarget && shouldShowError);
  });

  if (group) {
    group.classList.toggle('ix-invalid--required', shouldShowError);
    group.classList.toggle('ix-invalid', shouldShowError);
  }
}

export function clearCheckboxGroupValidationState(
  group: HTMLElement,
  checkboxes: CheckboxElement[] | NodeListOf<CheckboxElement>
) {
  const checkboxArr = Array.from(checkboxes);
  group.classList.remove('ix-invalid--required', 'ix-invalid');
  checkboxArr.forEach((el) => {
    el.classList.remove('ix-invalid', 'ix-invalid--required');
  });
}

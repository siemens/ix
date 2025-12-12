/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function isFormNoValidate(element: HTMLElement): boolean {
  const form = element.closest('form');
  if (!form) return false;
  return (
    form.hasAttribute('novalidate') ||
    form.getAttribute('novalidate') === '' ||
    form.dataset.novalidate !== undefined ||
    form.hasAttribute('ngnovalidate')
  );
}

export function getParentForm(element: HTMLElement): HTMLFormElement | null {
  return element.closest('form');
}

export function hasAnyCheckboxChecked(
  checkboxes: NodeListOf<HTMLElement> | HTMLElement[]
): boolean {
  return Array.from(checkboxes).some((el: any) => el.checked);
}

export function setupFormSubmitListener(
  element: HTMLElement,
  callback: () => void
): (() => void) | undefined {
  const form = getParentForm(element);
  if (!form) return undefined;

  const handler = () => callback();
  form.addEventListener('submit', handler);

  return () => {
    form.removeEventListener('submit', handler);
  };
}

function shouldShowValidationError(
  el: any,
  touched: boolean,
  formSubmissionAttempted: boolean
): boolean {
  return el.touched || el.formSubmissionAttempted || touched || formSubmissionAttempted;
}

export function updateCheckboxValidationClasses(
  checkboxes: NodeListOf<HTMLElement> | HTMLElement[],
  isChecked: boolean,
  touched: boolean,
  formSubmissionAttempted: boolean
) {
  Array.from(checkboxes).forEach((el: any) => {
    if (isChecked) {
      el.classList.remove('ix-invalid--required', 'ix-invalid');
      return;
    }

    const isTouched = shouldShowValidationError(el, touched, formSubmissionAttempted);
    el.classList.toggle('ix-invalid--required', isTouched);
    if (isTouched) {
      el.classList.add('ix-invalid');
    }
  });
}

export function updateGroupValidationClasses(
  group: Element | null,
  checkboxes: NodeListOf<HTMLElement> | HTMLElement[],
  isChecked: boolean
) {
  if (!group) return;

  if (isChecked) {
    group.classList.remove('ix-invalid', 'ix-invalid--required');
    return;
  }

  const anyTouched = Array.from(checkboxes).some(
    (el: any) => el.touched || el.formSubmissionAttempted
  );
  group.classList.toggle('ix-invalid--required', anyTouched);
  if (anyTouched) {
    group.classList.add('ix-invalid');
  }
}

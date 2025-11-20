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
  return Array.from(checkboxes)
    .filter((el: any) => el.required)
    .some((el: any) => el.checked);
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

function shouldSkipValidationAndClear(checkboxes: NodeListOf<HTMLElement> | HTMLElement[]): boolean {
  if (checkboxes.length > 0) {
    const form = checkboxes[0].closest('form');
    if (
      form &&
      (form.hasAttribute('novalidate') ||
        form.getAttribute('novalidate') === '' ||
        form.dataset.novalidate !== undefined ||
        form.hasAttribute('ngnovalidate'))
    ) {
      Array.from(checkboxes).forEach((el: any) => {
        el.classList.remove('ix-invalid--required', 'ix-invalid');
      });
      return true;
    }
  }
  return false;
}

export function updateCheckboxValidationClasses(
  checkboxes: NodeListOf<HTMLElement> | HTMLElement[],
  isChecked: boolean,
  touched: boolean,
  formSubmissionAttempted: boolean
) {
  if (shouldSkipValidationAndClear(checkboxes)) {
    return;
  }

  const requiredCheckboxes = Array.from(checkboxes).filter((el: any) => el.required);

  requiredCheckboxes.forEach((el: any) => {
    if (el.checked) {
      el.classList.remove('ix-invalid--required', 'ix-invalid');
    }
  });

  if (isChecked) {
    // Do not remove classes from all, only from checked ones above
    return;
  }

  const shouldShow = touched || formSubmissionAttempted;
  requiredCheckboxes.forEach((el: any) => {
    if (!el.checked && shouldShow) {
      el.classList.add('ix-invalid--required', 'ix-invalid');
    } else if (!el.checked) {
      el.classList.remove('ix-invalid--required', 'ix-invalid');
    }
  });
}

export function updateGroupValidationClasses(
  group: Element | null,
  checkboxes: NodeListOf<HTMLElement> | HTMLElement[],
  isChecked: boolean
) {
  if (!group) return;

  if (shouldSkipValidationAndClear(checkboxes)) {
    group.classList.remove('ix-invalid', 'ix-invalid--required');
    return;
  }

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

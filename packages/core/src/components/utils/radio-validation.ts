/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
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

export function hasAnyRadioChecked(
  radios: NodeListOf<HTMLElement> | HTMLElement[]
): boolean {
  const requiredRadios = Array.from(radios).filter(
    (el: any) => (el as any).required
  );
  if (requiredRadios.length === 0) {
    return Array.from(radios).some((el: any) => (el as any).checked);
  }
  return requiredRadios.some((el: any) => (el as any).checked);
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

function shouldSkipValidationAndClear(
  radios: NodeListOf<HTMLElement> | HTMLElement[]
): boolean {
  if (radios.length > 0) {
    const form = radios[0].closest('form');
    if (
      form &&
      (form.hasAttribute('novalidate') ||
        form.getAttribute('novalidate') === '' ||
        form.dataset.novalidate !== undefined ||
        form.hasAttribute('ngnovalidate'))
    ) {
      Array.from(radios).forEach((el: any) => {
        el.classList.remove('ix-invalid--required', 'ix-invalid');
      });
      return true;
    }
  }
  return false;
}

export function updateRadioValidationClasses(
  radios: NodeListOf<HTMLElement> | HTMLElement[],
  touched: boolean,
  formSubmissionAttempted: boolean
) {
  if (shouldSkipValidationAndClear(radios)) {
    return;
  }

  const requiredRadios = Array.from(radios).filter((el: any) => el.required);

  if (requiredRadios.some((el: any) => el.checked)) {
    requiredRadios.forEach((el: any) => {
      el.classList.remove('ix-invalid--required', 'ix-invalid');
    });
    return;
  }

  const radiosToValidate =
    requiredRadios.length > 0 ? requiredRadios : Array.from(radios);

  const shouldShow = touched || formSubmissionAttempted;
  radiosToValidate.forEach((el: any) => {
    if (!el.checked && shouldShow) {
      el.classList.add('ix-invalid--required', 'ix-invalid');
    } else if (!el.checked) {
      el.classList.remove('ix-invalid--required', 'ix-invalid');
    }
  });
}

export function updateRadioGroupValidationClasses(
  group: Element | null,
  radios: NodeListOf<HTMLElement> | HTMLElement[]
) {
  if (!group) return;

  if (shouldSkipValidationAndClear(radios)) {
    group.classList.remove('ix-invalid', 'ix-invalid--required');
    return;
  }

  const requiredRadios = Array.from(radios).filter((el: any) => el.required);
  if (requiredRadios.some((el: any) => el.checked)) {
    group.classList.remove('ix-invalid', 'ix-invalid--required');
    return;
  }

  const anyTouched =
    requiredRadios.length > 0
      ? requiredRadios.some(
          (el: any) => el.touched || el.formSubmissionAttempted
        )
      : Array.from(radios).some(
          (el: any) => el.touched || el.formSubmissionAttempted
        );

  group.classList.toggle('ix-invalid--required', anyTouched);
  if (anyTouched) {
    group.classList.add('ix-invalid');
  } else {
    group.classList.remove('ix-invalid');
  }
}

export function hasAnyCheckedRadios(
  radios: HTMLElement[] | NodeListOf<HTMLElement>
): boolean {
  const radiosArr = Array.from(radios);
  const requiredRadios = radiosArr.filter((el: any) => el.required);
  if (
    requiredRadios.length > 0 &&
    typeof (requiredRadios[0] as HTMLIxRadioElement).name === 'string'
  ) {
    const name = (requiredRadios[0] as HTMLIxRadioElement).name;
    const form = radiosArr[0]?.closest?.('form');
    const allWithSameName: NodeListOf<HTMLElement> = form
      ? form.querySelectorAll(`ix-radio[name="${name}"]`)
      : document.querySelectorAll(`ix-radio[name="${name}"]`);
    return hasAnyRadioChecked(
      Array.from(allWithSameName).filter((el: any) => el.required)
    );
  }

  return requiredRadios.some(
    (radio) => 'checked' in radio && (radio as any).checked
  );
}

export function clearRadioGroupValidationState(
  group: HTMLElement,
  radios: HTMLElement[] | NodeListOf<HTMLElement>,
  invalidText?: string
) {
  const radiosArr = Array.from(radios);
  group.classList.remove('ix-invalid--required', 'ix-invalid');
  if (invalidText) {
    if (invalidText === 'Please select the required field.') {
      (group as any).invalidText = '';
    }
  }
  radiosArr.forEach((el: any) => {
    el.classList.remove('ix-invalid', 'ix-invalid--required');
  });
}

export function handleStandaloneRadioValidation(
  hostElement: HTMLElement,
  isChecked: boolean,
  touched: boolean,
  formSubmissionAttempted: boolean
) {
  const isRequiredInvalid = !isChecked && (touched || formSubmissionAttempted);
  hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);
  if (isChecked) {
    hostElement.classList.remove('ix-invalid');
  } else if (isRequiredInvalid) {
    hostElement.classList.add('ix-invalid');
  }
}

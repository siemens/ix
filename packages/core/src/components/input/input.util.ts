/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { A11yAttributes, a11yBoolean } from '../utils/a11y';
import {
  IxFormComponent,
  IxInputFieldComponent,
  ValidationResults,
  shouldSuppressInternalValidation,
} from '../utils/input';
import { createMutationObserver } from '../utils/mutation-observer';
import { convertToRemString } from '../utils/rwd.util';
import { generateUUID } from '../utils/uuid';
import { shakeInput } from './input.animation';

export function createIdIfNotExists(
  element: IxFormComponent,
  idPrefix: string = 'input'
) {
  return element.hasAttribute('id')
    ? element.getAttribute('id')
    : `${idPrefix}-${generateUUID()}`;
}

export function mapValidationResult<T>(
  ref: IxInputFieldComponent<T>,
  result: ValidationResults
) {
  ref.isInvalid = result.isInvalid || result.isInvalidByRequired;
  ref.isValid = result.isValid;
  ref.isInfo = result.isInfo;
  ref.isWarning = result.isWarning;
}

export function checkAllowedKeys<T>(
  comp: IxInputFieldComponent<T>,
  event: KeyboardEvent
) {
  if (comp.allowedCharactersPattern) {
    const regex = new RegExp(comp.allowedCharactersPattern);
    if (!regex.test(event.key)) {
      event.preventDefault();
      shakeInput(comp.inputRef.current);
    }
  }
}

export async function checkInternalValidity<T>(
  comp: IxFormComponent<T>,
  input: HTMLInputElement | HTMLTextAreaElement
) {
  const validityState = input.validity;

  const eventResult = comp.validityStateChange.emit(validityState);

  if (eventResult.defaultPrevented) {
    return;
  }

  if (comp.value === null || comp.value === undefined) {
    return;
  }

  const skipValidation = await shouldSuppressInternalValidation(comp);
  if (skipValidation) {
    return;
  }

  const { valid } = validityState;

  const hasValue = input.value !== '';
  const touched = !!input.dataset.ixTouched;
  const dirty = (await (comp as any).isDirty?.()) || false;
  const shouldShowValidation = touched || dirty;

  const isRequiredInvalid =
    (comp as any).required && !hasValue && shouldShowValidation;
  comp.hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);

  const shouldShowNativeInvalid =
    !valid && shouldShowValidation && !isRequiredInvalid;
  comp.hostElement.classList.toggle(
    'ix-invalid--validity-invalid',
    shouldShowNativeInvalid
  );
}

export function onInputBlur<T>(
  comp: IxFormComponent<T>,
  input?: HTMLInputElement | HTMLTextAreaElement | null
) {
  comp.ixBlur.emit();

  if (!input) {
    throw new Error('Input element is not available');
  }

  input.setAttribute('data-ix-touched', 'true');
  checkInternalValidity(comp, input);
}

export async function syncValidationClasses<T>(comp: IxInputFieldComponent<T>) {
  const [hasValue, touched, dirty] = await Promise.all([
    comp.hasValidValue(),
    comp.isTouched?.() || Promise.resolve(false),
    comp.isDirty?.() || Promise.resolve(false),
  ]);

  const shouldShowValidation = touched || dirty;

  if (comp.required) {
    const isRequiredInvalid = !hasValue && shouldShowValidation;
    comp.hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);
  } else {
    comp.hostElement.classList.remove('ix-invalid--required');
  }

  const validityState = await comp.getValidityState?.();
  if (validityState) {
    const isRequiredInvalid = comp.required && !hasValue && shouldShowValidation;
    const shouldShowNativeInvalid = !validityState.valid && shouldShowValidation && !isRequiredInvalid;
    comp.hostElement.classList.toggle('ix-invalid--validity-invalid', shouldShowNativeInvalid);
  }
}

export async function resetInputComponent<T>(
  comp: IxInputFieldComponent<T>, 
  initialValue: T, 
  defaultValue: T,
  elementRef: HTMLInputElement | HTMLTextAreaElement | null
) {
  (comp as any).isResetting = true;
  (comp as any).touched = false;
  (comp as any).dirty = false;

  const resetValue = initialValue || defaultValue;
  comp.value = resetValue;
  (comp as any).updateFormInternalValue(resetValue);

  if (elementRef) {
    elementRef.value = String(resetValue);
    delete elementRef.dataset.ixTouched;
  }

  comp.hostElement.classList.remove(
    'ix-invalid--validity-invalid',
    'ix-invalid--required',
    'ix-invalid',
    'ix-valid',
    'ix-info',
    'ix-warning'
  );

  comp.isInvalid = false;
  comp.isValid = false;
  comp.isInfo = false;
  comp.isWarning = false;
  comp.isInvalidByRequired = false;

  await syncValidationClasses(comp);
  (comp as any).isResetting = false;
  comp.valueChange.emit(resetValue);
}

export function isTouchedUtil(touched: boolean): Promise<boolean> {
  return Promise.resolve(touched);
}

export function isDirtyUtil(dirty: boolean): Promise<boolean> {
  return Promise.resolve(dirty);
}

export function getAssociatedFormElementUtil(formInternals: ElementInternals): Promise<HTMLFormElement | null> {
  return Promise.resolve(formInternals.form);
}

export function applyPaddingEnd(
  inputElement: HTMLElement | null,
  width: number,
  options: {
    slotEnd: boolean;
    additionalPaddingRight?: string;
  }
) {
  if (!inputElement) {
    return;
  }

  const remInPixels = 16;
  const padding = convertToRemString(width + remInPixels / 2);

  if (options.slotEnd) {
    inputElement.style.paddingRight = `calc(${padding} + ${
      options.additionalPaddingRight ?? '0rem'
    })`;
  } else {
    inputElement.style.paddingLeft = padding;
  }
}

export function adjustPaddingForStartAndEnd(
  startElement: HTMLElement | null,
  endElement: HTMLElement | null,
  inputElement: HTMLElement | null
) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (startElement) {
        const startBoundingRect = startElement.getBoundingClientRect();
        if (startBoundingRect) {
          applyPaddingEnd(inputElement, startBoundingRect.width, {
            slotEnd: false,
          });
        }
      }

      if (endElement) {
        const endBoundingRect = endElement.getBoundingClientRect();
        if (endBoundingRect) {
          applyPaddingEnd(inputElement, endBoundingRect.width, {
            slotEnd: true,
          });
        }
      }
    });
  });
}

export function getAriaAttributesForInput(
  component: IxInputFieldComponent
): A11yAttributes {
  const inputAria: A11yAttributes = {
    'aria-invalid': `${a11yBoolean(component.isInvalid)}`,
    'aria-required': `${a11yBoolean(component.required)}`,
  };

  if (component.isInvalid && component.invalidText) {
    inputAria['aria-errormessage'] = component.invalidText;
  }
  return inputAria;
}

export type DisposableChangesAndVisibilityObservers = () => void;

export const addDisposableChangesAndVisibilityObservers = (
  element: HTMLElement,
  callback: () => void
): DisposableChangesAndVisibilityObservers => {
  const intersectionObserver = observeElementUntilVisible(element, callback);
  const mutationObserver = createMutationObserver(callback);

  mutationObserver.observe(element, {
    subtree: true,
    attributes: true,
  });

  return () => {
    intersectionObserver.disconnect();
    mutationObserver.disconnect();
  };
};

function observeElementUntilVisible(
  hostElement: HTMLElement,
  updateCallback: () => void
): IntersectionObserver {
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCallback();
      }
    });
  });

  intersectionObserver.observe(hostElement);
  return intersectionObserver;
}

export function handleSubmitOnEnterKeydown(
  event: KeyboardEvent,
  suppressSubmitOnEnter: boolean,
  form: HTMLFormElement | null | undefined
) {
  if (suppressSubmitOnEnter || event.key !== 'Enter' || !form) {
    return;
  }

  event.preventDefault();
  const submitButton = form.querySelector<HTMLElement>(
    'button[type="submit"], ix-button[type="submit"]'
  );

  if (submitButton) {
    form.requestSubmit(submitButton);
  }

  if (form.length === 1) {
    form.requestSubmit();
  }
}

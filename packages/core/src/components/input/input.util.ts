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

  if (!comp.value) {
    return;
  }

  const skipValidation = await shouldSuppressInternalValidation(comp);
  if (skipValidation) {
    return;
  }

  const { valid } = validityState;
  comp.hostElement.classList.toggle('ix-invalid--validity-invalid', !valid);
}

export function onInputBlur<T>(
  comp: IxInputFieldComponent<T>,
  input?: HTMLInputElement | HTMLTextAreaElement | null
) {
  comp.ixBlur.emit();

  if (!input) {
    throw new Error('Input element is not available');
  }
  checkInternalValidity(comp, input);
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

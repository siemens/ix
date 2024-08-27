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
} from '../utils/field';
import { generateUUID } from '../utils/uuid';
import { shakeInput } from './text-field.animation';

export function createIdIfNotExists(
  element: IxFormComponent,
  idPrefix: string = 'field'
) {
  return element.hasAttribute('id')
    ? element.getAttribute('id')
    : `${idPrefix}-${generateUUID()}`;
}

export function mapValidationResult(
  ref: IxInputFieldComponent<unknown>,
  result: ValidationResults
) {
  ref.isInvalid = result.isInvalid || result.isInvalidByRequired;
  ref.isValid = result.isValid;
  ref.isInfo = result.isInfo;
  ref.isWarning = result.isWarning;
}

export function checkAllowedKeys(
  comp: IxInputFieldComponent<unknown>,
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

export async function checkInternalValidity(
  comp: IxFormComponent<unknown>,
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
  comp.hostElement.classList.toggle('ix-invalid', !valid);
}

export function onInputBlur(
  comp: IxInputFieldComponent<unknown>,
  input: HTMLInputElement | HTMLTextAreaElement
) {
  comp.ixBlur.emit();
  checkInternalValidity(comp, input);
}

export function applyPaddingEnd(
  inputElement: HTMLElement,
  width: number,
  options: {
    slotEnd: boolean;
    additionalPaddingRight?: string;
  }
) {
  if (!inputElement) {
    return;
  }

  if (width === 0) {
    return;
  }

  const padding = `${(width + 12) / 16}rem`;

  if (options.slotEnd) {
    inputElement.style.paddingRight = `calc(${padding} + ${
      options.additionalPaddingRight ?? '0rem'
    })`;
  } else {
    inputElement.style.paddingLeft = padding;
  }
}

export function adjustPaddingForStartAndEnd(
  startElement: HTMLElement,
  endElement: HTMLElement,
  inputElement: HTMLElement
) {
  const startBoundingRect = startElement.getBoundingClientRect();
  const endBoundingRect = endElement.getBoundingClientRect();

  if (startBoundingRect) {
    applyPaddingEnd(inputElement, startBoundingRect.width, {
      slotEnd: false,
    });
  }

  if (endBoundingRect) {
    applyPaddingEnd(inputElement, endBoundingRect.width, {
      slotEnd: true,
    });
  }
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

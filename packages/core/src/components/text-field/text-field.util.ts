import { IxInputFieldComponent, ValidationResults } from '../utils/field';
import { shakeInput } from './text-field.animation';

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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

export function checkInternalValidity(
  comp: IxInputFieldComponent<unknown>,
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

export function applyPostfixPadding(
  inputElement: HTMLInputElement,
  width: number,
  options: {
    postfix: boolean;
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

  if (options.postfix) {
    inputElement.style.paddingRight = `calc(${padding} + ${
      options.additionalPaddingRight ?? '0rem'
    })`;
  } else {
    inputElement.style.paddingLeft = padding;
  }
}

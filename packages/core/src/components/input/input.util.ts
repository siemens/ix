/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventEmitter } from '@stencil/core';
import { A11yAttributes, a11yBoolean } from '../utils/a11y';
import {
  IxFormComponent,
  IxInputFieldComponent,
  ValidationResults,
  clearInternalValidationClasses,
  revalidate,
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

// Last tracked validity, kept across `novalidate` toggles since the class is cleared there
const lastValidityStates = new WeakMap<HTMLElement, boolean>();

export async function checkInternalValidity<T>(
  comp: IxFormComponent<T>,
  input: HTMLInputElement | HTMLTextAreaElement
) {
  const skipValidation = await shouldSuppressInternalValidation(comp);
  const validityState = input.validity;
  const currentValidityState =
    lastValidityStates.get(comp.hostElement) ??
    !comp.hostElement.classList.contains('ix-invalid--validity-invalid');
  const newValidityState = validityState.valid;
  const validityChanged = currentValidityState !== newValidityState;

  // `novalidate`: track before emitting so a prevented event isn't re-emitted next check
  if (skipValidation) {
    lastValidityStates.set(comp.hostElement, newValidityState);
  }

  if (validityChanged) {
    const eventResult = comp.validityStateChange.emit(validityState);
    if (eventResult.defaultPrevented) {
      return;
    }
  }

  lastValidityStates.set(comp.hostElement, newValidityState);

  // `novalidate`: still emit the event, but skip visual feedback
  if (skipValidation) {
    clearInternalValidationClasses(comp.hostElement);
    return;
  }

  if (validityChanged || (comp.value !== null && comp.value !== undefined)) {
    comp.hostElement.classList.toggle(
      'ix-invalid--validity-invalid',
      !newValidityState
    );
  }
}

// Revalidates after a prop like `required` changed; call after rendering
export async function revalidateAfterPropChange<T>(
  comp: IxFormComponent<T>,
  input: HTMLInputElement | HTMLTextAreaElement | null | undefined,
  touched: boolean
) {
  // Must run first: it only emits if the class doesn't match yet
  if (input && touched) {
    await checkInternalValidity(comp, input);
  }
  await revalidate(comp);
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

  const padding = convertToRemString(width);
  const basePadding = 'var(--si-sys-sizing-spacing-x-40, 0.5rem)';

  if (options.slotEnd) {
    inputElement.style.paddingRight = `calc(${padding} + ${basePadding} + ${
      options.additionalPaddingRight ?? '0rem'
    })`;
  } else {
    inputElement.style.paddingLeft = `calc(${padding} + ${basePadding})`;
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

  const submitButton = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  );

  if (submitButton) {
    form.requestSubmit(submitButton);
  } else if (form.length === 1) {
    form.requestSubmit();
  }
}

export function onInputFocus<T>(comp: { initialValue?: T }, currentValue: T) {
  comp.initialValue = currentValue;
}

export function onInputBlurWithChange<T>(
  comp: IxFormComponent<T> & {
    initialValue?: T;
    ixChange: EventEmitter<T>;
  },
  input?: HTMLInputElement | HTMLTextAreaElement | null,
  currentValue?: T
) {
  onInputBlur(comp, input);

  if (comp.initialValue !== currentValue) {
    if (currentValue === undefined) {
      comp.ixChange.emit();
    } else {
      comp.ixChange.emit(currentValue);
    }
    comp.initialValue = currentValue;
  }
}

export function onEnterKeyChangeEmit<T>(
  event: KeyboardEvent,
  comp: { initialValue?: T; ixChange: { emit: (value: T) => void } },
  currentValue: T
) {
  if (event.key === 'Enter' && comp.initialValue !== currentValue) {
    comp.ixChange.emit(currentValue);
    comp.initialValue = currentValue;
  }
}

export interface PickerValidityStateTracker {
  lastEmittedPatternMismatch?: boolean;
  lastEmittedValueMissing?: boolean;
}

export function createPickerValidityStateTracker(): PickerValidityStateTracker {
  return {
    lastEmittedPatternMismatch: false,
    lastEmittedValueMissing: false,
  };
}

export interface PickerValidityContext {
  touched: boolean;
  invalidReason?: string;
  getValidityState: () => Promise<ValidityState>;
  emit: (state: {
    patternMismatch: boolean;
    valueMissing: boolean;
    invalidReason?: string;
  }) => void;
}

export interface PickerInputComponent<T> {
  validityTracker: PickerValidityStateTracker;
  touched: boolean;
  invalidReason?: string;
  getValidityState(): Promise<ValidityState>;
  validityStateChange: { emit: (state: T) => void };
}

export function emitPickerValidityState<T>(component: PickerInputComponent<T>) {
  return emitPickerValidityStateChangeIfChanged(component.validityTracker, {
    touched: component.touched,
    invalidReason: component.invalidReason,
    getValidityState: () => component.getValidityState(),
    emit: (state) => component.validityStateChange.emit(state as T),
  });
}

export async function emitPickerValidityStateChangeIfChanged(
  tracker: PickerValidityStateTracker,
  context: PickerValidityContext
): Promise<void> {
  if (!context.touched) {
    return;
  }

  const state = await context.getValidityState();
  const currentPatternMismatch = state.patternMismatch;
  const currentValueMissing = state.valueMissing;

  if (
    tracker.lastEmittedPatternMismatch === currentPatternMismatch &&
    tracker.lastEmittedValueMissing === currentValueMissing
  ) {
    return;
  }

  tracker.lastEmittedPatternMismatch = currentPatternMismatch;
  tracker.lastEmittedValueMissing = currentValueMissing;

  context.emit({
    patternMismatch: currentPatternMismatch,
    valueMissing: currentValueMissing,
    invalidReason: context.invalidReason,
  });
}

export function resetInputValidation<T>(
  comp: IxInputFieldComponent<T>,
  input: HTMLInputElement | HTMLTextAreaElement
): void {
  input.value = '';
  input.removeAttribute('data-ix-touched');
  lastValidityStates.delete(comp.hostElement);
  clearInternalValidationClasses(comp.hostElement);
}

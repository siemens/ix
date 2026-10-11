/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getElement } from '@stencil/core';
import {
  HTMLIxFormComponentElement,
  isIxInputFieldComponent,
  IxFormComponent,
} from '.';
import { IxComponentInterface } from '../internal';

export type ClassMutationObserver = {
  destroy: () => void;
};

export async function isTouched<T>(host: IxFormComponent<T>) {
  if (typeof host.isTouched === 'function') {
    return host.isTouched();
  }
}

export async function shouldSuppressInternalValidation<T>(
  host: IxFormComponent<T>
) {
  if (
    host.getAssociatedFormElement &&
    typeof host.getAssociatedFormElement === 'function'
  ) {
    const form = await host.getAssociatedFormElement();

    if (!form) {
      return false;
    }

    return form.noValidate;
  }

  return false;
}

export function createClassMutationObserver(
  element: HTMLElement,
  callback: () => void,
  options?: {
    includeChildren?: boolean;
  }
): ClassMutationObserver {
  const observer = new MutationObserver(callback);
  observer.observe(element, {
    subtree: options?.includeChildren,
    childList: options?.includeChildren,
    attributes: true,
    attributeFilter: ['class'],
  });

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

export type ValidationResultProperty =
  | 'isInvalid'
  | 'isInvalidByRequired'
  | 'isValid'
  | 'isInfo'
  | 'isWarning';
export type ValidationResults = Record<ValidationResultProperty, boolean>;

function classListContains(
  hostElement: HTMLElement,
  className: string,
  includeChildren: boolean
) {
  return (
    hostElement.classList.contains(`${className}`) ||
    (includeChildren ? !!hostElement.querySelector(`.${className}`) : false)
  );
}

export function checkFieldClasses(
  hostElement: HTMLElement,
  includeChildren = false
): ValidationResults {
  return {
    isInvalid:
      classListContains(hostElement, 'ix-invalid', includeChildren) ||
      classListContains(
        hostElement,
        'ix-invalid--validity-invalid',
        includeChildren
      ),
    isInvalidByRequired: classListContains(
      hostElement,
      'ix-invalid--required',
      includeChildren
    ),
    isValid: classListContains(hostElement, 'ix-valid', includeChildren),
    isInfo: classListContains(hostElement, 'ix-info', includeChildren),
    isWarning: classListContains(hostElement, 'ix-warning', includeChildren),
  };
}

/**
 * Thrown when a form control’s native input is not available yet (or already gone).
 */
export class NativeInputNotFoundError extends Error {
  constructor(message = 'Input element not found') {
    super(message);
    this.name = 'NativeInputNotFoundError';
  }
}

function isMissingNativeInputError(error: unknown): boolean {
  return (
    error instanceof NativeInputNotFoundError ||
    // Cross-bundle / duplicated class copies still carry the stable name.
    (error instanceof Error && error.name === 'NativeInputNotFoundError')
  );
}

type ValidationLifecycleState = {
  checkIfRequiredFunction: (() => Promise<void>) | null;
  classMutationObserver: ClassMutationObserver | null;
  checkTimeoutId: ReturnType<typeof setTimeout> | null;
};

const validationLifecycleStates = new WeakMap<
  object,
  ValidationLifecycleState
>();

function getValidationLifecycleState(
  instance: object
): ValidationLifecycleState {
  let state = validationLifecycleStates.get(instance);
  if (!state) {
    state = {
      checkIfRequiredFunction: null,
      classMutationObserver: null,
      checkTimeoutId: null,
    };
    validationLifecycleStates.set(instance, state);
  }
  return state;
}

/**
 * Re-runs the internal validation of a component decorated with
 * `@HookValidationLifecycle`, e.g. after a validation-relevant prop changed.
 */
export async function revalidate(instance: object) {
  const checkIfRequiredFunction =
    validationLifecycleStates.get(instance)?.checkIfRequiredFunction;
  if (!checkIfRequiredFunction) {
    return;
  }

  try {
    await checkIfRequiredFunction();
  } catch (error) {
    if (!isMissingNativeInputError(error)) {
      console.error(error);
    }
  }
}

export function HookValidationLifecycle(options?: {
  includeChildren?: boolean;
}) {
  return (proto: IxComponentInterface, methodName: string) => {
    const { componentWillLoad, disconnectedCallback, connectedCallback } =
      proto;

    proto.connectedCallback = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      const state = getValidationLifecycleState(this);

      if (state.checkTimeoutId != null) {
        clearTimeout(state.checkTimeoutId);
        state.checkTimeoutId = null;
      }

      const checkIfRequiredFunction = async () => {
        const skipValidation = await shouldSuppressInternalValidation(host);
        if (skipValidation || !host.isConnected) {
          return;
        }

        if (!isIxInputFieldComponent(host)) {
          return;
        }

        let validationElement:
          | HTMLInputElement
          | HTMLTextAreaElement
          | undefined;
        try {
          validationElement = await host.getNativeInputElement?.();
        } catch (error) {
          // Expected during connect/teardown when the native input is unset (e.g. ix-select).
          if (!isMissingNativeInputError(error)) {
            throw error;
          }
          validationElement = undefined;
        }

        if (!host.isConnected) {
          return;
        }

        if (host.hasValidValue && typeof host.hasValidValue === 'function') {
          const hasValue = await host.hasValidValue();
          const touched = await isTouched(host);

          if (!host.isConnected) {
            return;
          }

          if (host.required) {
            host.classList.toggle('ix-invalid--required', !hasValue && touched);
          } else {
            host.classList.remove('ix-invalid--required');
          }
        }

        if (
          host.getValidityState &&
          typeof host.getValidityState === 'function'
        ) {
          const validityState = await host.getValidityState();
          const touched = await isTouched(host);

          if (!host.isConnected) {
            return;
          }

          host.classList.toggle(
            `ix-invalid--validity-patternMismatch`,
            validityState.patternMismatch
          );

          host.classList.toggle(
            'ix-invalid--validity-invalid',
            !validityState.valid && touched
          );

          const fieldWrapper =
            host.shadowRoot?.querySelector('ix-field-wrapper');

          if (validationElement && fieldWrapper) {
            const ariaErrorMessageElement =
              await fieldWrapper.getAriaErrorMessageElement();

            const ariaHelperMessageElement =
              await fieldWrapper.getAriaHelperMessageElement();

            if (!host.isConnected) {
              return;
            }

            if (ariaHelperMessageElement) {
              validationElement.setAttribute(
                'aria-describedby',
                `${ariaHelperMessageElement.id}`
              );
            }

            if (!validityState.valid) {
              validationElement?.setAttribute('aria-invalid', 'true');

              if (ariaErrorMessageElement && !validityState.valid) {
                validationElement.setAttribute(
                  'aria-errormessage',
                  `${ariaErrorMessageElement.id}`
                );
                validationElement.setAttribute(
                  'aria-describedby',
                  `${ariaErrorMessageElement.id}`
                );
              }
            } else {
              validationElement?.removeAttribute('aria-invalid');
            }
          }
        }
      };

      state.checkIfRequiredFunction = checkIfRequiredFunction;
      host.addEventListener('checkedChange', checkIfRequiredFunction);
      host.addEventListener('valueChange', checkIfRequiredFunction);
      host.addEventListener('ixBlur', checkIfRequiredFunction);
      state.checkTimeoutId = setTimeout(() => {
        state.checkTimeoutId = null;
        void revalidate(this);
      });
      return connectedCallback?.call(this);
    };

    proto.componentWillLoad = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      getValidationLifecycleState(this).classMutationObserver =
        createClassMutationObserver(
          host,
          () => {
            const result = checkFieldClasses(host, options?.includeChildren);
            proto[methodName].call(this, result);
          },
          options
        );
      const result = checkFieldClasses(host, options?.includeChildren);
      proto[methodName].call(this, result);
      return componentWillLoad?.call(this);
    };

    proto.disconnectedCallback = function () {
      const host = getElement(this);
      const state = getValidationLifecycleState(this);

      if (state.checkTimeoutId != null) {
        clearTimeout(state.checkTimeoutId);
        state.checkTimeoutId = null;
      }

      if (host && state.classMutationObserver) {
        state.classMutationObserver.destroy();
        state.classMutationObserver = null;
      }

      if (host && state.checkIfRequiredFunction) {
        host.removeEventListener(
          'checkedChange',
          state.checkIfRequiredFunction
        );
        host.removeEventListener('valueChange', state.checkIfRequiredFunction);
        host.removeEventListener('ixBlur', state.checkIfRequiredFunction);
        state.checkIfRequiredFunction = null;
      }

      return disconnectedCallback?.call(this);
    };
  };
}

export function getValidationText(
  isInputInvalid: boolean,
  customInvalidText: string | undefined,
  i18nFallbackText: string
): string | undefined {
  if (isInputInvalid) {
    return customInvalidText ?? i18nFallbackText;
  }
  return customInvalidText;
}

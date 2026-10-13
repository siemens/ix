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

/** Whether the form opts out of built-in validation feedback */
export function isValidationSuppressedByForm(
  form: HTMLFormElement | null | undefined
): boolean {
  return !!form?.noValidate;
}

export async function shouldSuppressInternalValidation<T>(
  host: IxFormComponent<T>
) {
  if (
    host.getAssociatedFormElement &&
    typeof host.getAssociatedFormElement === 'function'
  ) {
    return isValidationSuppressedByForm(await host.getAssociatedFormElement());
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

const internalValidationClasses = [
  'ix-invalid--required',
  'ix-invalid--validity-invalid',
  'ix-invalid--validity-patternMismatch',
];

/** Removes built-in validation classes; consumer classes stay untouched */
export function clearInternalValidationClasses(host: HTMLElement) {
  if (internalValidationClasses.some((c) => host.classList.contains(c))) {
    host.classList.remove(...internalValidationClasses);
  }
}

function syncAriaInvalid(
  validationElement: HTMLInputElement | HTMLTextAreaElement,
  valid: boolean
) {
  if (valid) {
    validationElement.removeAttribute('aria-invalid');
  } else {
    validationElement.setAttribute('aria-invalid', 'true');
  }
}

type ValidationLifecycleState = {
  checkIfRequiredFunction: (() => Promise<void>) | null;
  classMutationObserver: ClassMutationObserver | null;
  checkTimeoutId: ReturnType<typeof setTimeout> | null;
  hasLoaded: boolean;
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
      hasLoaded: false,
    };
    validationLifecycleStates.set(instance, state);
  }
  return state;
}

/** Re-runs the validation of a `@HookValidationLifecycle` component */
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

    const observeFieldClasses = function (this: object, host: HTMLElement) {
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
    };

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
        if (!host.isConnected) {
          return;
        }

        if (skipValidation) {
          // Clear feedback from before `novalidate` was set
          clearInternalValidationClasses(host);
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

        if (skipValidation) {
          // Suppress visual feedback only, screen readers still follow validity
          if (
            validationElement &&
            host.getValidityState &&
            typeof host.getValidityState === 'function'
          ) {
            const { valid } = await host.getValidityState();
            if (host.isConnected) {
              syncAriaInvalid(validationElement, valid);
            }
          }
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

            syncAriaInvalid(validationElement, validityState.valid);

            if (!validityState.valid && ariaErrorMessageElement) {
              validationElement.setAttribute(
                'aria-errormessage',
                `${ariaErrorMessageElement.id}`
              );
              validationElement.setAttribute(
                'aria-describedby',
                `${ariaErrorMessageElement.id}`
              );
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

      const result = connectedCallback?.call(this);

      // Restore after a DOM move, after the component's own class observers
      if (state.hasLoaded && !state.classMutationObserver) {
        observeFieldClasses.call(this, host);
      }
      return result;
    };

    proto.componentWillLoad = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      observeFieldClasses.call(this, host);
      getValidationLifecycleState(this).hasLoaded = true;
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

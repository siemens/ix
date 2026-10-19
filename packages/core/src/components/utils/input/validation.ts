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
  hostElement: HTMLIxFormComponentElement<unknown>,
  className: string,
  includeChildren: boolean
) {
  return (
    hostElement.classList.contains(`${className}`) ||
    (includeChildren ? !!hostElement.querySelector(`.${className}`) : false)
  );
}

export function checkFieldClasses(
  hostElement: HTMLIxFormComponentElement<unknown>,
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

function runValidationCheck(checkFunction: () => Promise<void>) {
  void checkFunction().catch((error) => {
    if (isMissingNativeInputError(error)) {
      return;
    }
    console.error(error);
  });
}

function removeIdReference(
  element: Element,
  attributeName: string,
  id: string
) {
  const ids = (element.getAttribute(attributeName) ?? '')
    .split(/\s+/)
    .filter((reference) => reference && reference !== id);

  if (ids.length > 0) {
    element.setAttribute(attributeName, ids.join(' '));
  } else {
    element.removeAttribute(attributeName);
  }
}

export function HookValidationLifecycle(options?: {
  includeChildren?: boolean;
}) {
  return (proto: IxComponentInterface, methodName: string) => {
    // The decorator runs once per component class, so the state of each
    // instance is kept per host instead of in variables shared by all instances.
    const hostStates = new WeakMap<
      HTMLElement,
      {
        checkFunction?: () => Promise<void>;
        checkTimeoutId?: ReturnType<typeof setTimeout>;
        classMutationObserver?: ClassMutationObserver;
      }
    >();
    const getHostState = (host: HTMLElement) => {
      let state = hostStates.get(host);
      if (!state) {
        state = {};
        hostStates.set(host, state);
      }
      return state;
    };
    const { componentWillLoad, disconnectedCallback, connectedCallback } =
      proto;

    proto.connectedCallback = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      const state = getHostState(host);

      if (state.checkTimeoutId !== undefined) {
        clearTimeout(state.checkTimeoutId);
        state.checkTimeoutId = undefined;
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

            // `ix-invalid` is set by the application for custom validation,
            // so the native validity state alone does not tell the whole story.
            const isInvalid =
              !validityState.valid || host.classList.contains('ix-invalid');

            if (isInvalid) {
              validationElement.setAttribute('aria-invalid', 'true');

              if (ariaErrorMessageElement) {
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
              const errorMessageId =
                validationElement.getAttribute('aria-errormessage') ??
                ariaErrorMessageElement?.id;
              validationElement.removeAttribute('aria-invalid');
              validationElement.removeAttribute('aria-errormessage');
              if (errorMessageId) {
                removeIdReference(
                  validationElement,
                  'aria-describedby',
                  errorMessageId
                );
              }
            }
          }
        }
      };

      state.checkFunction = checkIfRequiredFunction;
      host.addEventListener('checkedChange', checkIfRequiredFunction);
      host.addEventListener('valueChange', checkIfRequiredFunction);
      host.addEventListener('ixBlur', checkIfRequiredFunction);
      state.checkTimeoutId = setTimeout(() => {
        state.checkTimeoutId = undefined;
        runValidationCheck(checkIfRequiredFunction);
      });
      return connectedCallback?.call(this);
    };

    proto.componentWillLoad = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      const state = getHostState(host);
      let hasInvalidClass = host.classList.contains('ix-invalid');
      state.classMutationObserver = createClassMutationObserver(
        host,
        () => {
          const result = checkFieldClasses(host, options?.includeChildren);
          proto[methodName].call(this, result);

          // Applications toggle `ix-invalid` for custom validation without a
          // value change or blur, so the native ARIA attributes are updated here.
          // Other classes are ignored, the check itself toggles `ix-invalid--*`.
          const previousHasInvalidClass = hasInvalidClass;
          hasInvalidClass = host.classList.contains('ix-invalid');
          if (
            hasInvalidClass !== previousHasInvalidClass &&
            state.checkFunction
          ) {
            runValidationCheck(state.checkFunction);
          }
        },
        options
      );
      const result = checkFieldClasses(host, options?.includeChildren);
      proto[methodName].call(this, result);
      return componentWillLoad?.call(this);
    };

    proto.disconnectedCallback = function () {
      const host = getElement(this);
      const state = host ? hostStates.get(host) : undefined;

      if (state?.checkTimeoutId !== undefined) {
        clearTimeout(state.checkTimeoutId);
        state.checkTimeoutId = undefined;
      }

      if (state?.classMutationObserver) {
        state.classMutationObserver.destroy();
        state.classMutationObserver = undefined;
      }

      if (state?.checkFunction) {
        host.removeEventListener('checkedChange', state.checkFunction);
        host.removeEventListener('valueChange', state.checkFunction);
        host.removeEventListener('ixBlur', state.checkFunction);
        state.checkFunction = undefined;
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

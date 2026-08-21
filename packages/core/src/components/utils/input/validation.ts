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

export interface HasAssociatedForm {
  getAssociatedFormElement(): Promise<HTMLFormElement | null>;
}

export async function shouldSuppressInternalValidation<T>(
  host: IxFormComponent<T> | HasAssociatedForm
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

export function HookValidationLifecycle(options?: {
  includeChildren?: boolean;
}) {
  return (proto: IxComponentInterface, methodName: string) => {
    let checkIfRequiredFunction: (() => Promise<void>) | null;
    let classMutationObserver: ClassMutationObserver | null;
    let checkTimeoutId: ReturnType<typeof setTimeout> | null = null;
    const { componentWillLoad, disconnectedCallback, connectedCallback } =
      proto;

    proto.connectedCallback = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;

      if (checkTimeoutId != null) {
        clearTimeout(checkTimeoutId);
        checkTimeoutId = null;
      }

      checkIfRequiredFunction = async () => {
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

      host.addEventListener('checkedChange', checkIfRequiredFunction);
      host.addEventListener('valueChange', checkIfRequiredFunction);
      host.addEventListener('ixBlur', checkIfRequiredFunction);
      checkTimeoutId = setTimeout(() => {
        checkTimeoutId = null;
        if (checkIfRequiredFunction) {
          void checkIfRequiredFunction().catch((error) => {
            if (isMissingNativeInputError(error)) {
              return;
            }
            console.error(error);
          });
        }
      });
      return connectedCallback?.call(this);
    };

    proto.componentWillLoad = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      classMutationObserver = createClassMutationObserver(
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

      if (checkTimeoutId != null) {
        clearTimeout(checkTimeoutId);
        checkTimeoutId = null;
      }

      if (host && classMutationObserver) {
        classMutationObserver.destroy();
        classMutationObserver = null;
      }

      if (host && checkIfRequiredFunction) {
        host.removeEventListener('checkedChange', checkIfRequiredFunction);
        host.removeEventListener('valueChange', checkIfRequiredFunction);
        host.removeEventListener('ixBlur', checkIfRequiredFunction);
        checkIfRequiredFunction = null;
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

export function reportFieldValidity<T>(
  comp: IxFormComponent<T> & {
    touched: boolean;
    isInputInvalid?: boolean;
    hostElement: HTMLElement;
  },
  hasInvalidInput: boolean
): boolean {
  comp.touched = true;

  if ('isInputInvalid' in comp) {
    comp.isInputInvalid = hasInvalidInput;
  }

  comp.hostElement.classList.toggle(
    'ix-invalid--validity-invalid',
    hasInvalidInput
  );

  const isRequiredMissing =
    !!comp.required && (comp.value == null || comp.value === '');
  comp.hostElement.classList.toggle('ix-invalid--required', isRequiredMissing);

  return !hasInvalidInput && !isRequiredMissing;
}

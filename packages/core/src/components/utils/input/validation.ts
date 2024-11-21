/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getElement } from '@stencil/core';
import { HTMLIxFormComponentElement, IxFormComponent } from '.';
import { IxComponent } from '../internal';

export type ClassMutationObserver = {
  destroy: () => void;
};

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

function containsClass(
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
    isInvalid: containsClass(hostElement, 'ix-invalid', includeChildren),
    isInvalidByRequired: containsClass(
      hostElement,
      'ix-invalid--required',
      includeChildren
    ),
    isValid: containsClass(hostElement, 'ix-valid', includeChildren),
    isInfo: containsClass(hostElement, 'ix-info', includeChildren),
    isWarning: containsClass(hostElement, 'ix-warning', includeChildren),
  };
}

export function HookValidationLifecycle(options?: {
  includeChildren?: boolean;
}) {
  return (proto: IxComponent, methodName: string) => {
    let checkIfRequiredFunction: () => Promise<void>;
    let classMutationObserver: ClassMutationObserver | null;
    const { componentWillLoad, disconnectedCallback, connectedCallback } =
      proto;

    proto.connectedCallback = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;

      checkIfRequiredFunction = async () => {
        const skipValidation = await shouldSuppressInternalValidation(host);
        if (skipValidation) {
          return;
        }

        if (host.hasValidValue && typeof host.hasValidValue === 'function') {
          const hasValue = await host.hasValidValue();
          if (host.required) {
            host.classList.toggle('ix-invalid--required', !hasValue);
          } else {
            host.classList.remove('ix-invalid--required');
          }
        }

        if (
          host.getValidityState &&
          typeof host.getValidityState === 'function'
        ) {
          const validityState = await host.getValidityState();
          Object.keys(validityState)
            // Use only the keys that are relevant for the validation state
            // patternMismatch used for `ix-date-input`
            .filter((key) => ['patternMismatch'].includes(key))
            .forEach((key) => {
              host.classList.toggle(
                `ix-invalid--${key}`,
                validityState[key as keyof ValidityState]
              );
            });
        }
      };

      host.addEventListener('valueChange', checkIfRequiredFunction);
      setTimeout(checkIfRequiredFunction);
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

      if (host && classMutationObserver) {
        classMutationObserver.destroy();
        classMutationObserver = null;
      }

      if (host && checkIfRequiredFunction) {
        host.removeEventListener('valueChange', checkIfRequiredFunction);
      }

      return disconnectedCallback?.call(this);
    };
  };
}

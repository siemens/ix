/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getElement } from '@stencil/core';
import { HTMLIxFormComponentElement } from '.';

export type ClassMutationObserver = {
  destroy: () => void;
};

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
  hostElement.getAssociatedFormElement().then((associatedFormElement) => {
    let suppressValidState = hostElement.hasAttribute('data-ix-disable-valid');
    if (!suppressValidState && associatedFormElement) {
      suppressValidState = associatedFormElement.hasAttribute(
        'data-ix-disable-valid'
      );
    }

    if (suppressValidState) {
      hostElement.classList.toggle('ix-suppress-valid', suppressValidState);
    }
  });

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
  return (proto: any, methodName: string) => {
    let checkIfRequiredFunction: () => void;
    let classMutationObserver: ClassMutationObserver;
    const { componentWillLoad, disconnectedCallback, connectedCallback } =
      proto;

    proto.connectedCallback = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;

      checkIfRequiredFunction = async () => {
        const hasValue = await host.hasValidValue();
        if (host.required) {
          host.classList.toggle('ix-invalid--required', !hasValue);
        } else {
          host.classList.remove('ix-invalid--required');
        }
      };

      host.addEventListener('valueChange', checkIfRequiredFunction);
      checkIfRequiredFunction();
      return connectedCallback && connectedCallback.call(this);
    };

    proto.componentWillLoad = function () {
      const host = getElement(
        this
      ) as unknown as HTMLIxFormComponentElement<unknown>;
      classMutationObserver = createClassMutationObserver(
        host,
        () => {
          proto[methodName].call(
            this,
            checkFieldClasses(host, options?.includeChildren)
          );
        },
        options
      );
      proto[methodName].call(
        this,
        checkFieldClasses(host, options?.includeChildren)
      );
      return componentWillLoad && componentWillLoad.call(this);
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

      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

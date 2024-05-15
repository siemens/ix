/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getElement } from '@stencil/core';

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

export type ValidationResultProperty = 'isInvalid';
export type ValidationResults = Record<ValidationResultProperty, boolean>;

export function checkFieldClasses(
  hostElement: HTMLElement,
  includeChildren = false
): ValidationResults {
  return {
    isInvalid:
      hostElement.classList.contains('ix-invalid') ||
      (includeChildren ? !!hostElement.querySelector('.ix-invalid') : false),
  };
}

export function ListenOnValidation(options?: { includeChildren?: boolean }) {
  return (proto: any, methodName: string) => {
    let classMutationObserver: ClassMutationObserver;
    const { componentWillLoad, disconnectedCallback } = proto;

    proto.componentWillLoad = function () {
      const host = getElement(this);
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

      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

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
  callback: () => void
): ClassMutationObserver {
  const observer = new MutationObserver(callback);
  observer.observe(element, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

const fieldMappingValues = 'isInvalid' as const;
export type ClassFieldMapping = typeof fieldMappingValues;
export type ClassFieldMappingResult = Record<ClassFieldMapping, boolean>;

export function checkFieldClasses(
  hostElement: HTMLElement
): ClassFieldMappingResult {
  return {
    isInvalid: hostElement.classList.contains('ix-invalid'),
  };
}

export function OnClassField() {
  return (proto: any, methodName: string) => {
    let classMutationObserver: ClassMutationObserver;
    const { componentWillLoad, disconnectedCallback } = proto;

    proto.componentWillLoad = function () {
      const host = getElement(this);
      classMutationObserver = createClassMutationObserver(host, () => {
        proto[methodName].call(this, checkFieldClasses(host));
      });
      proto[methodName].call(this, checkFieldClasses(host));
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

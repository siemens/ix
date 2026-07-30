/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { A11yAttributeName, isA11yAttributeName } from './../../../a11y';

export interface AriaAttributeInterceptorOptions {
  /**
   * Attributes which are not forwarded and therefore must not be intercepted.
   */
  isIgnored: (attributeName: A11yAttributeName) => boolean;
  /**
   * Whether the attribute is currently held by the component instead of the host.
   */
  isInherited: (attributeName: A11yAttributeName) => boolean;
  /**
   * Called whenever a forwarded attribute got removed on the host.
   */
  onAttributeRemoved: (attributeName: A11yAttributeName) => void;
}

const isInterceptedAttribute = (
  attributeName: string,
  options: Pick<AriaAttributeInterceptorOptions, 'isIgnored'>
): attributeName is A11yAttributeName =>
  isA11yAttributeName(attributeName) && !options.isIgnored(attributeName);

/**
 * Forwarded attributes are absent on the host, so explicit removals have to be
 * intercepted to keep the internal target in sync.
 *
 * @returns the unpatched `removeAttribute` of the host element
 */
export const interceptHostAttributeRemovals = (
  hostElement: HTMLElement,
  options: AriaAttributeInterceptorOptions
): HTMLElement['removeAttribute'] => {
  const removeAttribute = hostElement.removeAttribute.bind(hostElement);
  const removeAttributeNS = hostElement.removeAttributeNS.bind(hostElement);
  const toggleAttribute = hostElement.toggleAttribute.bind(hostElement);

  hostElement.removeAttribute = (qualifiedName: string) => {
    const attributeName = qualifiedName.toLowerCase();
    const wasPresent = hostElement.hasAttribute(qualifiedName);
    removeAttribute(qualifiedName);

    if (!wasPresent && isInterceptedAttribute(attributeName, options)) {
      options.onAttributeRemoved(attributeName);
    }
  };

  hostElement.removeAttributeNS = (
    namespace: string | null,
    localName: string
  ) => {
    const attributeName = localName.toLowerCase();
    const wasPresent = hostElement.hasAttributeNS(namespace, localName);
    removeAttributeNS(namespace, localName);

    if (
      namespace === null &&
      !wasPresent &&
      isInterceptedAttribute(attributeName, options)
    ) {
      options.onAttributeRemoved(attributeName);
    }
  };

  hostElement.toggleAttribute = (qualifiedName: string, force?: boolean) => {
    const attributeName = qualifiedName.toLowerCase();

    if (!isInterceptedAttribute(attributeName, options)) {
      return toggleAttribute(qualifiedName, force);
    }

    const isPresent =
      hostElement.hasAttribute(qualifiedName) ||
      options.isInherited(attributeName);
    const shouldBePresent = force ?? !isPresent;

    if (shouldBePresent) {
      if (!isPresent) {
        toggleAttribute(qualifiedName, true);
      }
      return true;
    }

    toggleAttribute(qualifiedName, false);
    if (isPresent) {
      options.onAttributeRemoved(attributeName);
    }

    return false;
  };

  return removeAttribute;
};

const getAriaReflectionPropertyNames = (hostElement: HTMLElement) => {
  const propertyNames = new Set<string>();
  let prototype = Object.getPrototypeOf(hostElement);

  while (prototype && prototype !== Object.prototype) {
    Object.getOwnPropertyNames(prototype).forEach((propertyName) => {
      if (propertyName === 'role' || propertyName.startsWith('aria')) {
        propertyNames.add(propertyName);
      }
    });
    prototype = Object.getPrototypeOf(prototype);
  }

  return propertyNames;
};

/**
 * ARIA reflection properties (e.g. `ariaLabel`) bypass the patched attribute
 * methods, so they get redirected to the host attributes and the removal
 * callback.
 */
export const interceptAriaReflectionRemovals = (
  hostElement: HTMLElement,
  attributeNames: Iterable<A11yAttributeName>,
  options: Pick<AriaAttributeInterceptorOptions, 'onAttributeRemoved'> & {
    removeHostAttribute: HTMLElement['removeAttribute'];
  }
) => {
  const propertyNames = Array.from(getAriaReflectionPropertyNames(hostElement));

  for (const attributeName of attributeNames) {
    const normalizedAttributeName = attributeName.replaceAll('-', '');
    const propertyName = propertyNames.find(
      (name) => name.toLowerCase() === normalizedAttributeName
    );

    if (!propertyName) {
      continue;
    }

    Object.defineProperty(hostElement, propertyName, {
      configurable: true,
      get: () => hostElement.getAttribute(attributeName),
      set: (value: string | null) => {
        if (value === null) {
          options.onAttributeRemoved(attributeName);
          options.removeHostAttribute(attributeName);
          return;
        }

        hostElement.setAttribute(attributeName, value);
      },
    });
  }
};

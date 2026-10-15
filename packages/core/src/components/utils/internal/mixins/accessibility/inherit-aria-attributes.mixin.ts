/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MixedInCtor, State } from '@stencil/core';
import { StencilLifecycle } from '../../component';
import {
  A11yAttributeName,
  A11yAttributes,
  a11yAttributes,
  a11yHostAttributes,
} from './../../../a11y';
import {
  flushAriaAttributeMutations,
  observeAriaAttributes,
  runWithoutAriaAttributeObservation,
  unobserveAriaAttributes,
} from './aria-attribute-observer';

export interface InheritAriaAttributesMixinContract {
  inheritAriaAttributes: A11yAttributes;
  getIgnoredAriaAttributes?(): A11yAttributeName[];
  readAriaAttributesFromHost(): A11yAttributes;
}

export interface LifecycleWithInheritAriaAttributesMixin {
  connectedCallback(): void;
  componentWillLoad(): Promise<void> | void;
  disconnectedCallback(): void;
}

export const InheritAriaAttributesMixin = <
  B extends MixedInCtor<StencilLifecycle>,
>(
  Base: B
): B &
  MixedInCtor<
    InheritAriaAttributesMixinContract & LifecycleWithInheritAriaAttributesMixin
  > => {
  class InheritAriaAttributesMixinCtor
    extends Base
    implements InheritAriaAttributesMixinContract
  {
    @State() inheritAriaAttributes: A11yAttributes = {};

    #ariaObserverInitialized = false;
    #ariaObservationActive = false;
    #ariaInitializationPending = false;
    #disconnected = false;
    #ariaAttributesBeforeDisconnect?: Map<A11yAttributeName, string>;
    #ariaAttributesChangedWhileDisconnected = new Set<A11yAttributeName>();
    #ariaAttributeRemovalPatched = false;
    #readingAriaAttributes = false;

    #handleAriaMutations(changedAttributes: ReadonlySet<A11yAttributeName>) {
      const hostElement = this.#getHostElement();
      const ignoredAttributes = this.getIgnoredAriaAttributes();
      let updatedAttributes = this.inheritAriaAttributes;

      changedAttributes.forEach((attributeName) => {
        if (ignoredAttributes.includes(attributeName)) {
          return;
        }

        const newValue = hostElement.getAttribute(attributeName);
        const currentValue = updatedAttributes[attributeName] ?? null;
        if (newValue === currentValue) {
          return;
        }

        if (updatedAttributes === this.inheritAriaAttributes) {
          updatedAttributes = { ...updatedAttributes };
        }

        if (newValue === null) {
          delete updatedAttributes[attributeName];
        } else {
          updatedAttributes[attributeName] = newValue;
        }
      });

      if (updatedAttributes !== this.inheritAriaAttributes) {
        this.inheritAriaAttributes = updatedAttributes;
      }
    }

    getIgnoredAriaAttributes(): A11yAttributeName[] {
      return [];
    }

    readAriaAttributesFromHost(): A11yAttributes {
      const hostElement = this.#getHostElement();
      return runWithoutAriaAttributeObservation(hostElement, () => {
        this.#readingAriaAttributes = true;

        try {
          return a11yHostAttributes(
            hostElement,
            this.getIgnoredAriaAttributes()
          );
        } finally {
          this.#readingAriaAttributes = false;
        }
      });
    }

    #getHostElement(): HTMLElement {
      if (!this.hostElement) {
        throw new Error(
          'Host element is not defined. Make sure to apply the InheritAriaAttributesMixin to a Stencil component.'
        );
      }

      return this.hostElement;
    }

    #getAriaAttributesFromHost() {
      const hostElement = this.#getHostElement();
      const attributes = new Map<A11yAttributeName, string>();

      a11yAttributes.forEach((attributeName) => {
        const value = hostElement.getAttribute(attributeName);
        if (value !== null) {
          attributes.set(attributeName, value);
        }
      });

      return attributes;
    }

    #patchAriaAttributeRemoval() {
      if (
        this.#ariaAttributeRemovalPatched ||
        typeof MutationObserver === 'undefined'
      ) {
        return;
      }

      const hostElement = this.#getHostElement();
      const removeAttribute = hostElement.removeAttribute.bind(hostElement);

      // ARIA attributes are moved from the host to the internal element during
      // initialization. When Angular later calls removeAttribute(), the host
      // attribute is already absent, so no MutationObserver record is created.
      // Intercept the call to also clear the forwarded internal attribute.
      hostElement.removeAttribute = (attributeName) => {
        removeAttribute(attributeName);

        if (a11yAttributes.includes(attributeName as A11yAttributeName)) {
          if (this.#readingAriaAttributes) {
            return;
          }

          if (!this.#ariaObservationActive) {
            this.#ariaAttributesChangedWhileDisconnected.add(
              attributeName as A11yAttributeName
            );
          }

          this.#updateInheritedAriaAttribute(
            null,
            attributeName as A11yAttributeName
          );
        }
      };
      this.#ariaAttributeRemovalPatched = true;
    }

    #observeAriaAttributes() {
      this.#ariaObservationActive = observeAriaAttributes(
        this.#getHostElement(),
        (attributeNames) => this.#handleAriaMutations(attributeNames)
      );
    }

    override connectedCallback(): void {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      this.#disconnected = false;
      if (this.#ariaInitializationPending && !this.#ariaObserverInitialized) {
        this.#ariaInitializationPending = false;
        this.#initializeAriaAttributes();
        return;
      }

      if (this.#ariaObserverInitialized) {
        const hostElement = this.#getHostElement();
        this.#observeAriaAttributes();

        if (this.#ariaAttributesBeforeDisconnect) {
          const inheritedAttributes = this.readAriaAttributesFromHost();

          a11yAttributes.forEach((attributeName) => {
            const oldValue =
              this.#ariaAttributesBeforeDisconnect?.get(attributeName) ?? null;
            const newValue =
              inheritedAttributes[attributeName] ??
              hostElement.getAttribute(attributeName);
            if (
              newValue !== oldValue ||
              this.#ariaAttributesChangedWhileDisconnected.has(attributeName)
            ) {
              this.#updateInheritedAriaAttribute(
                newValue ?? null,
                attributeName
              );
            }
          });
        }
      }
      this.#ariaAttributesBeforeDisconnect = undefined;
      this.#ariaAttributesChangedWhileDisconnected.clear();
    }

    override componentWillLoad(): Promise<void> | void {
      if (super.componentWillLoad) {
        const baseLoad = super.componentWillLoad();
        if (baseLoad) {
          return baseLoad.then(() =>
            this.#initializeAriaAttributesIfConnected()
          );
        }
      }

      this.#initializeAriaAttributesIfConnected();
    }

    #initializeAriaAttributesIfConnected() {
      if (this.#disconnected) {
        this.#ariaInitializationPending = true;
        return;
      }

      this.#initializeAriaAttributes();
    }

    #initializeAriaAttributes() {
      this.inheritAriaAttributes = this.readAriaAttributesFromHost();

      this.#patchAriaAttributeRemoval();
      this.#ariaObserverInitialized = true;
      this.#observeAriaAttributes();
    }

    #updateInheritedAriaAttribute(
      newValue: string | null,
      propName: A11yAttributeName
    ) {
      const ignoredAttributes = this.getIgnoredAriaAttributes();
      if (ignoredAttributes.includes(propName)) {
        return;
      }

      const currentValue = this.inheritAriaAttributes[propName] ?? null;
      if (newValue === currentValue) {
        return;
      }

      const updatedAttributes = {
        ...this.inheritAriaAttributes,
      };

      if (newValue === null) {
        delete updatedAttributes[propName];
      } else {
        updatedAttributes[propName] = newValue;
      }

      this.inheritAriaAttributes = updatedAttributes;
    }

    override disconnectedCallback(): void {
      this.#disconnected = true;
      this.#ariaAttributesChangedWhileDisconnected.clear();

      if (this.#ariaObserverInitialized) {
        flushAriaAttributeMutations();
        this.#ariaAttributesBeforeDisconnect =
          this.#getAriaAttributesFromHost();
        unobserveAriaAttributes(this.#getHostElement());
        this.#ariaObservationActive = false;
      } else {
        this.#ariaAttributesBeforeDisconnect = undefined;
      }

      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  }

  return InheritAriaAttributesMixinCtor;
};

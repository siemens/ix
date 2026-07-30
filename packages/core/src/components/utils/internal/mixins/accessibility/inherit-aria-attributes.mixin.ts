/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MixedInCtor, State, Watch } from '@stencil/core';
import { StencilLifecycle } from '../../component';
import {
  A11yAttributeName,
  A11yAttributes,
  a11yHostAttributes,
  getA11yAttributeNames,
} from './../../../a11y';
import {
  interceptAriaReflectionRemovals,
  interceptHostAttributeRemovals,
} from './aria-attribute-interceptors';

export interface InheritAriaAttributesMixinContract {
  inheritAriaAttributes: A11yAttributes;
  getIgnoredAriaAttributes?(): A11yAttributeName[];
}

export const InheritAriaAttributesMixin = <
  B extends MixedInCtor<StencilLifecycle>,
>(
  Base: B
) => {
  class InheritAriaAttributesMixinCtor
    extends Base
    implements InheritAriaAttributesMixinContract
  {
    @State() inheritAriaAttributes: A11yAttributes = {};

    // Distinguish mixin cleanup from attributes removed by consumers.
    forwardedAriaAttributeRemovals = new Set<A11yAttributeName>();
    forwardedAriaAttributes = new Set<A11yAttributeName>();
    removeHostAttribute?: HTMLElement['removeAttribute'];

    ignoredAriaAttributes?: Set<A11yAttributeName>;

    constructor(...args: any[]) {
      super(...args);
    }

    getIgnoredAriaAttributes(): A11yAttributeName[] {
      return [];
    }

    isIgnoredAriaAttribute = (attributeName: A11yAttributeName) => {
      this.ignoredAriaAttributes ??= new Set(this.getIgnoredAriaAttributes());
      return this.ignoredAriaAttributes.has(attributeName);
    };

    override componentWillLoad(): Promise<void> | void {
      if (!this.hostElement) {
        return;
      }

      this.ignoredAriaAttributes = new Set(this.getIgnoredAriaAttributes());
      this.inheritAriaAttributes = a11yHostAttributes(
        this.hostElement,
        this.getIgnoredAriaAttributes()
      );
      this.forwardedAriaAttributes = new Set(
        getA11yAttributeNames().filter(
          (attributeName) => !this.isIgnoredAriaAttribute(attributeName)
        )
      );

      this.removeHostAttribute = interceptHostAttributeRemovals(
        this.hostElement,
        {
          isIgnored: this.isIgnoredAriaAttribute,
          isInherited: (attributeName) =>
            attributeName in this.inheritAriaAttributes,
          onAttributeRemoved: (attributeName) =>
            this.removeInheritedAriaAttribute(attributeName),
        }
      );

      interceptAriaReflectionRemovals(
        this.hostElement,
        this.forwardedAriaAttributes,
        {
          onAttributeRemoved: (attributeName) =>
            this.removeInheritedAriaAttribute(attributeName),
          removeHostAttribute: (attributeName) =>
            this.removeHostAttribute?.(attributeName),
        }
      );
    }

    removeInheritedAriaAttribute(attributeName: A11yAttributeName) {
      if (!(attributeName in this.inheritAriaAttributes)) {
        return;
      }

      const updatedAttributes = { ...this.inheritAriaAttributes };
      delete updatedAttributes[attributeName];
      this.inheritAriaAttributes = updatedAttributes;
    }

    @Watch('role')
    @Watch('aria-activedescendant')
    @Watch('aria-atomic')
    @Watch('aria-autocomplete')
    @Watch('aria-braillelabel')
    @Watch('aria-brailleroledescription')
    @Watch('aria-busy')
    @Watch('aria-checked')
    @Watch('aria-colcount')
    @Watch('aria-colindex')
    @Watch('aria-colindextext')
    @Watch('aria-colspan')
    @Watch('aria-controls')
    @Watch('aria-current')
    @Watch('aria-describedby')
    @Watch('aria-description')
    @Watch('aria-details')
    @Watch('aria-disabled')
    @Watch('aria-errormessage')
    @Watch('aria-expanded')
    @Watch('aria-flowto')
    @Watch('aria-haspopup')
    @Watch('aria-hidden')
    @Watch('aria-invalid')
    @Watch('aria-keyshortcuts')
    @Watch('aria-label')
    @Watch('aria-labelledby')
    @Watch('aria-level')
    @Watch('aria-live')
    @Watch('aria-multiline')
    @Watch('aria-multiselectable')
    @Watch('aria-orientation')
    @Watch('aria-owns')
    @Watch('aria-placeholder')
    @Watch('aria-posinset')
    @Watch('aria-pressed')
    @Watch('aria-readonly')
    @Watch('aria-relevant')
    @Watch('aria-required')
    @Watch('aria-roledescription')
    @Watch('aria-rowcount')
    @Watch('aria-rowindex')
    @Watch('aria-rowindextext')
    @Watch('aria-rowspan')
    @Watch('aria-selected')
    @Watch('aria-setsize')
    @Watch('aria-sort')
    @Watch('aria-valuemax')
    @Watch('aria-valuemin')
    @Watch('aria-valuenow')
    @Watch('aria-valuetext')
    ariaAttributeChanged(
      newValue: string | null,
      _: string | null,
      propName: string
    ) {
      const attributeName = propName as A11yAttributeName;

      if (this.isIgnoredAriaAttribute(attributeName)) {
        return;
      }

      if (newValue === null) {
        if (this.forwardedAriaAttributeRemovals.delete(attributeName)) {
          return;
        }

        this.removeInheritedAriaAttribute(attributeName);
        return;
      }

      this.inheritAriaAttributes = {
        ...this.inheritAriaAttributes,
        [attributeName]: newValue,
      };
      this.forwardedAriaAttributes.add(attributeName);

      if (this.hostElement) {
        this.forwardedAriaAttributeRemovals.add(attributeName);
        this.removeHostAttribute?.(attributeName);
        queueMicrotask(() => {
          this.forwardedAriaAttributeRemovals.delete(attributeName);
        });
      }
    }
  }

  return InheritAriaAttributesMixinCtor;
};

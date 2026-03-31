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
} from './../../../a11y';

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

    constructor(...args: any[]) {
      super(...args);
    }

    getIgnoredAriaAttributes(): A11yAttributeName[] {
      return [];
    }

    override componentWillLoad(): Promise<void> | void {
      this.inheritAriaAttributes = a11yHostAttributes(
        this.hostElement!,
        this.getIgnoredAriaAttributes ? this.getIgnoredAriaAttributes() : []
      );
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
      const ignoredAttributes = this.getIgnoredAriaAttributes();
      if (ignoredAttributes.includes(propName as A11yAttributeName)) {
        return;
      }

      const updateAttribute = {
        [propName]: newValue,
      };
      this.inheritAriaAttributes = {
        ...this.inheritAriaAttributes,
        ...updateAttribute,
      };
    }
  }

  return InheritAriaAttributesMixinCtor;
};

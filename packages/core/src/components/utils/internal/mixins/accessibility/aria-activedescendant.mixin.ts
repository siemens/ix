/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Build, Listen, MixedInCtor } from '@stencil/core';
import { StencilLifecycle } from '../../component';
import { IxFocusVisibleChangeEvent } from '../setup.mixin';

export interface AriaActiveDescendantMixinContract {
  isAriaActiveDescendantActive(): boolean;
  getControllingAriaElement(): Promise<HTMLElement> | HTMLElement | null;
  getAriaActiveDescendantProxyItemId?(): string | boolean;

  suppressAriaActiveDescendant?: boolean;
}

export const AriaActiveDescendantMixin = <
  B extends MixedInCtor<StencilLifecycle>,
>(
  Base: B
) => {
  class AriaActiveDescendantMixinCtor
    extends Base
    implements AriaActiveDescendantMixinContract
  {
    suppressAriaActiveDescendant = false;

    isAriaActiveDescendantActive() {
      return false;
    }

    getControllingAriaElement(): Promise<HTMLElement> | HTMLElement | null {
      return null;
    }

    getAriaActiveDescendantProxyItemId(): string | boolean {
      return false;
    }

    async clearActiveDescendant() {
      if (this.suppressAriaActiveDescendant) {
        return;
      }

      const controllingElement = await this.getControllingAriaElement();
      if (!controllingElement) {
        return;
      }

      if ('ariaActiveDescendantElement' in Element.prototype) {
        //@ts-ignore
        controllingElement.ariaActiveDescendantElement = null;
      }
      controllingElement.removeAttribute('aria-activedescendant');
    }

    @Listen(IxFocusVisibleChangeEvent.eventName, { target: 'document' })
    async $internal_onActiveDescendantChange(event: IxFocusVisibleChangeEvent) {
      if (this.suppressAriaActiveDescendant) {
        return;
      }

      if (!this.isAriaActiveDescendantActive()) {
        this.clearActiveDescendant();
        return;
      }

      const controllingElement = await this.getControllingAriaElement();
      if (!controllingElement) {
        return;
      }

      if (event.detail.currentFocus.length > 0) {
        const item =
          event.detail.currentFocus[event.detail.currentFocus.length - 1];

        if (!item.id) {
          Build.isDev &&
            console.warn('aria-activedescendant item has no id', item);
          return;
        }

        if ('ariaActiveDescendantElement' in Element.prototype) {
          //@ts-ignore
          controllingElement.ariaActiveDescendantElement = item;
        }

        const proxyId = this.getAriaActiveDescendantProxyItemId();
        if (typeof proxyId === 'string' && proxyId) {
          controllingElement.setAttribute(
            'aria-activedescendant',
            item.id + '-' + proxyId
          );
        } else {
          controllingElement.setAttribute('aria-activedescendant', item.id);
        }

        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  return AriaActiveDescendantMixinCtor;
};

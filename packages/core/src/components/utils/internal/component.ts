/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  HTMLStencilElement,
  ComponentInterface,
  Mixin,
} from '@stencil/core/internal';
import type { MixedInCtor } from '@stencil/core';
import { addFocusVisibleListener } from '../focus-visible-listener';

let focusVisibleListenerStarted = false;

export interface IxComponentInterface extends ComponentInterface {
  hostElement: HTMLStencilElement;
}

export const WithFocusVisibleListener = <
  B extends MixedInCtor<ComponentInterface>,
>(
  Base: B
) => {
  class FocusListenerMixin extends Base {
    override connectedCallback(): void {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      if (!focusVisibleListenerStarted) {
        focusVisibleListenerStarted = true;
        addFocusVisibleListener();
      }
    }
  }

  return FocusListenerMixin;
};

export function IxComponent<T extends ComponentInterface = ComponentInterface>(
  ...mixins: Array<(base: MixedInCtor<ComponentInterface>) => MixedInCtor<T>>
): MixedInCtor<T & ComponentInterface> {
  if (mixins.length === 0) {
    return Mixin(WithFocusVisibleListener) as any;
  }
  return Mixin(WithFocusVisibleListener, ...mixins) as any;
}

/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { MixedInCtor } from '@stencil/core';
import {
  addFocusVisibleListener,
  FocusVisibleUtility,
} from '../../focus/focus-visible-listener';
import { StencilLifecycle } from '../component';
import { patchFocusMethod } from '../polyfill';

let focusVisibleUtility: FocusVisibleUtility | null = null;

export const getFocusUtilities = () => {
  return focusVisibleUtility;
};

/**
 * Mixin to add global focus visible handling to a component. Mixin will be used via base class IxComponent().
 * Not necessary to use this mixin directly in components.
 */
export const WithGlobalFocusVisibleListenerMixin = <
  B extends MixedInCtor<StencilLifecycle>,
>(
  Base: B
) => {
  class FocusListenerMixin extends Base {
    override connectedCallback(): void {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      patchFocusMethod();
      if (!focusVisibleUtility) {
        focusVisibleUtility = addFocusVisibleListener();
      }
    }
  }

  return FocusListenerMixin;
};

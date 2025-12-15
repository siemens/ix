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
} from '../../focus-visible-listener';
import { StencilLifecycle } from '../component';
import { patchFocusMethod } from '../polyfill';

let focusVisibleUtility: FocusVisibleUtility | null = null;

export const getFocusUtilities = () => {
  return focusVisibleUtility;
};

export const WithFocusVisibleListener = <
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

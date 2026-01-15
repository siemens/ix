/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { type MixedInCtor } from '@stencil/core';
import { StencilLifecycle } from '../component';
import {
  addFocusVisibleListener,
  FocusVisibleConfig,
  FocusVisibleUtility,
} from '../../focus/focus-visible-listener';

export const WithFocusHandlingMixin =
  (config?: FocusVisibleConfig) =>
  <B extends MixedInCtor<StencilLifecycle>>(Base: B) => {
    class FocusListenerMixin extends Base {
      focusVisibleUtility?: FocusVisibleUtility;

      override componentDidLoad(): void {
        if (super.componentDidLoad) {
          super.componentDidLoad();
        }

        // this.focusVisibleUtility = addFocusVisibleListener(
        //   this.hostElement,
        //   config
        // );
      }

      override disconnectedCallback(): void {
        if (super.disconnectedCallback) {
          super.disconnectedCallback();
        }

        this.focusVisibleUtility?.destroy();
      }
    }

    return FocusListenerMixin;
  };

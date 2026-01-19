/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { MixedInCtor } from '@stencil/core';
import { StencilLifecycle } from '../component';
import {
  detectKeyboardMode,
  KeyboardModeDetector,
} from '../../focus/detect-keyboard-mode';

let globalKeyboardDetectionInitialized = false;

let keyboardMode: KeyboardModeDetector | null = null;

export function hasKeyboardMode() {
  return keyboardMode?.hasKeyboardMode() ?? false;
}

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
    override componentDidLoad(): void {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }

      if (globalKeyboardDetectionInitialized) {
        return;
      }

      globalKeyboardDetectionInitialized = true;
      keyboardMode = detectKeyboardMode();
    }

    override disconnectedCallback(): void {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  }

  return FocusListenerMixin;
};

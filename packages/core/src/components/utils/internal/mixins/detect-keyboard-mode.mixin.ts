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
  detectKeyboardMode,
  KeyboardModeDetector,
} from '../../focus/detect-keyboard-mode';
import { getComposedPath } from '../../shadow-dom';
import {
  IX_VISIBLE_FOCUSABLE,
  IX_FOCUS_VISIBLE_ACTIVE,
} from '../../focus/focus-utilities';

let originalFocus: typeof HTMLElement.prototype.focus | null = null;

let globalKeyboardDetectionInitialized = false;
let keyboardMode: KeyboardModeDetector | null = null;

export function hasKeyboardMode() {
  return keyboardMode?.hasKeyboardMode() ?? false;
}

let currentFocus: Element[] = [];

function updateFocusState(target: HTMLElement) {
  const composedPath = getComposedPath(target);
  const focusableElements = composedPath.filter((el) =>
    el.classList.contains(IX_VISIBLE_FOCUSABLE)
  );

  // Clear previous focus
  currentFocus.forEach((el) => {
    el.classList.remove(IX_FOCUS_VISIBLE_ACTIVE);
    (el as any).ixFocusVisible = false;
  });

  // Set new focus if keyboard mode is active
  if (hasKeyboardMode()) {
    focusableElements.forEach((el) => {
      el.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
      (el as any).ixFocusVisible = true;
    });
    currentFocus = focusableElements;
  } else {
    currentFocus = [];
  }
}

function applyFocusPatch() {
  if (typeof HTMLElement !== 'undefined' && !originalFocus) {
    console.log('Patching focus method for focus-visible handling');
    originalFocus = HTMLElement.prototype.focus;

    // Patch programmatic focus()
    HTMLElement.prototype.focus = function (
      this: HTMLElement,
      options?: FocusOptions & { focusVisible?: boolean }
    ) {
      originalFocus?.call(this, options);
      updateFocusState(this);
    };

    // Listen for actual user focus events
    document.addEventListener(
      'focusin',
      (event) => {
        const target = event.target;
        if (target instanceof HTMLElement) {
          updateFocusState(target);
        }
      },
      true
    );
  }
}

// Apply patch immediately at module load
applyFocusPatch();

/**
 * Mixin to add global focus visible handling to a component. Mixin will be used via base class IxComponent().
 * Not necessary to use this mixin directly in components.
 */
export const FocusHandlingMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class FocusListenerMixin extends Base {
    override componentDidLoad(): void {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }

      if (!globalKeyboardDetectionInitialized) {
        globalKeyboardDetectionInitialized = true;
        keyboardMode = detectKeyboardMode();
      }

      applyFocusPatch();
    }

    override disconnectedCallback(): void {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  }

  return FocusListenerMixin;
};

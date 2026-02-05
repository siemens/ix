/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Build, type MixedInCtor } from '@stencil/core';
import { StencilLifecycle } from '../component';
import {
  detectKeyboardMode,
  KeyboardModeDetector,
} from '../../focus/detect-keyboard-mode';
import { getComposedPath } from '../../shadow-dom';
import {
  IX_FOCUS_VISIBLE,
  IX_FOCUS_VISIBLE_ACTIVE,
} from '../../focus/focus-utilities';
import { FocusVisibleMixinPublicInterface } from './focus-visible.mixin';

let originalFocus: typeof HTMLElement.prototype.focus | null = null;

let globalKeyboardDetectionInitialized = false;
let keyboardMode: KeyboardModeDetector | null = null;

export function hasKeyboardMode() {
  return keyboardMode?.hasKeyboardMode() ?? false;
}

let currentFocus: Element[] = [];

export function removeVisibleFocus() {
  currentFocus.forEach((el) => {
    el.classList.remove(IX_FOCUS_VISIBLE_ACTIVE);
    (el as unknown as FocusVisibleMixinPublicInterface).ixFocusVisible = false;
  });
}

export type IxFocusVisibleChangeEventDetail = {
  currentFocus: Element[];
};
export class IxFocusVisibleChangeEvent extends CustomEvent<IxFocusVisibleChangeEventDetail> {
  static eventName = 'ixFocusVisibleChange' as const;

  constructor(detail: IxFocusVisibleChangeEventDetail) {
    super(IxFocusVisibleChangeEvent.eventName, {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}

export function updateFocusState(target: HTMLElement) {
  const composedPath = getComposedPath(target);
  const focusableElements = composedPath.filter((el) =>
    el.classList.contains(IX_FOCUS_VISIBLE)
  );

  // Clear previous focus
  removeVisibleFocus();

  // Set new focus if keyboard mode is active
  if (hasKeyboardMode()) {
    focusableElements.forEach((el) => {
      el.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
      (el as unknown as FocusVisibleMixinPublicInterface).ixFocusVisible = true;
    });
    currentFocus = focusableElements;
  } else {
    currentFocus = [];
  }
  target.dispatchEvent(new IxFocusVisibleChangeEvent({ currentFocus }));
}

function applyFocusPatch() {
  if (typeof HTMLElement !== 'undefined' && !originalFocus) {
    originalFocus = HTMLElement.prototype.focus;

    HTMLElement.prototype.focus = function (
      this: HTMLElement,
      options?: FocusOptions
    ) {
      if (Build.isDev) {
        const composedPath = getComposedPath(this);
        const hasFocusableClass = composedPath.some((el) =>
          el.classList.contains(IX_FOCUS_VISIBLE)
        );
        if (!hasFocusableClass && this.tabIndex === -1) {
          console.warn(
            `Calling focus() on an element that is not focus-visible aware, or has tabIndex -1:`,
            this,
            composedPath
          );
        }
      }

      originalFocus?.call(this, options);
      updateFocusState(this);
    };

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

    document.addEventListener('keyboardmodechange', (event: Event) => {
      const customEvent = event as CustomEvent;
      const isKeyboardMode = customEvent.detail.keyboardMode;

      if (!isKeyboardMode) {
        removeVisibleFocus();
        return;
      }
    });

    document.addEventListener('focusout', (event: FocusEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement) {
        updateFocusState(target);
      }
    });
  }
}

/**
 * Mixin to add global focus visible handling to a component. Mixin will be used via base class IxComponent().
 * Not necessary to use this mixin directly in components.
 */
export const SetupMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class FocusListenerMixin extends Base {
    override componentDidLoad(): void {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }

      if (!originalFocus) {
        applyFocusPatch();
      }

      if (!globalKeyboardDetectionInitialized) {
        if (Build.isDev) {
          console.info('Initializing global keyboard mode detection');
        }

        globalKeyboardDetectionInitialized = true;
        keyboardMode = detectKeyboardMode();
      }
    }

    override disconnectedCallback(): void {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  }

  return FocusListenerMixin;
};

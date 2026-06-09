/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IX_FOCUS_VISIBLE_ACTIVE } from './focus-utilities';
import { hasKeyboardMode } from '../internal/mixins/setup.mixin';

export type FocusVisibleController = {
  /**
   * Destroy all event listeners. Call in disconnectedCallback().
   */
  destroy: () => void;

  /**
   * Programmatically focus a native element while correctly
   * applying focus-visible state — as if the user had tabbed into it.
   */
  setFocus: (target?: HTMLElement | null) => void;
};

/**
 * Attaches unified focus-visible behaviour to a host element.
 *
 * Uses the global hasKeyboardMode() (tracked on document by SetupMixin) so
 * that Tab-key presses fired on *any* element before focus lands here are
 * correctly detected.
 *
 * Covers all three cases:
 *  - HTMLElement.focus()  → setFocus() marks next focusin as keyboard-like
 *  - Tab-key              → global hasKeyboardMode() returns true on focusin
 *  - focus-visible class  → applied via IX_FOCUS_VISIBLE_ACTIVE on focusin
 */
export function startFocusVisible(hostEl: HTMLElement): FocusVisibleController {
  // ── Track whether next focus() call should be treated as keyboard ─────────
  let programmaticFocusPending = false;

  const onFocusin = () => {
    if (hasKeyboardMode() || programmaticFocusPending) {
      hostEl.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
    }
    programmaticFocusPending = false;
  };

  const onFocusout = () => {
    hostEl.classList.remove(IX_FOCUS_VISIBLE_ACTIVE);
  };

  hostEl.addEventListener('focusin', onFocusin);
  hostEl.addEventListener('focusout', onFocusout);

  // ── Cleanup ───────────────────────────────────────────────────────────────
  const destroy = () => {
    hostEl.removeEventListener('focusin', onFocusin);
    hostEl.removeEventListener('focusout', onFocusout);
  };

  // ── Programmatic focus ────────────────────────────────────────────────────
  const setFocus = (target?: HTMLElement | null) => {
    // Flag the next focusin as keyboard-like so IX_FOCUS_VISIBLE_ACTIVE
    // is applied even though no key was pressed.
    programmaticFocusPending = true;
    target?.focus();
  };

  return { destroy, setFocus };
}

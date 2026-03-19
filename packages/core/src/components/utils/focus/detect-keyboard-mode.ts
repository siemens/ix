import { FOCUS_KEYS } from './focus-utilities';

/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type KeyboardModeDetector = {
  destroy: () => void;
  hasKeyboardMode: () => boolean;
};

export function detectKeyboardMode(
  element?: HTMLElement
): KeyboardModeDetector {
  let keyboardMode = false;

  const ref = element ?? document;

  const onKeydown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;
    if (!FOCUS_KEYS.has(keyboardEvent.key)) {
      return;
    }

    keyboardMode = true;

    ref.dispatchEvent(
      new CustomEvent('keyboardmodechange', { detail: { keyboardMode } })
    );
  };

  const pointerDown = () => {
    keyboardMode = false;

    ref.dispatchEvent(
      new CustomEvent('keyboardmodechange', { detail: { keyboardMode } })
    );
  };

  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('touchstart', pointerDown, {
    passive: true,
  });
  ref.addEventListener('mousedown', pointerDown);

  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };

  return { destroy, hasKeyboardMode: () => keyboardMode };
}

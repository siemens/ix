/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  FocusVisibleController,
  startFocusVisible,
} from './focus-visible-controller';

/**
 * Base class for all IX components requiring unified focus handling.
 *
 * Extend this class and call:
 *  - initFocusable(hostEl)      in connectedCallback()
 *  - destroyFocusable()         in disconnectedCallback()
 *  - focusNativeElement(el)     inside your @Method() focusInput()
 */
export class IxFocusableComponent {
  protected focusVisibleController?: FocusVisibleController;

  /**
   * Call in connectedCallback().
   * hostEl is the Stencil @Element() reference.
   */
  protected initFocusable(hostEl: HTMLElement): void {
    this.focusVisibleController = startFocusVisible(hostEl);
  }

  /**
   * Call in disconnectedCallback().
   * Cleans up all event listeners attached by startFocusVisible.
   */
  protected destroyFocusable(): void {
    this.focusVisibleController?.destroy();
    this.focusVisibleController = undefined;
  }

  /**
   * Delegates focus to the native element with correct focus-visible state.
   * Pass the resolved native element (e.g. the inner <input>) to this method.
   * Call this inside your @Method() focusInput() after resolving the ref.
   */
  protected focusNativeElement(element?: HTMLElement | null): void {
    this.focusVisibleController?.setFocus(element);
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default abstract class Animation {
  static get shortTime() {
    return this.prefersReducedMotion() ? 0 : 0;
  }

  static get defaultTime() {
    return this.prefersReducedMotion() ? 0 : 150;
  }

  static get mediumTime() {
    return this.prefersReducedMotion() ? 0 : 300;
  }

  static get slowTime() {
    return this.prefersReducedMotion() ? 0 : 500;
  }

  static get xSlowTime() {
    return this.prefersReducedMotion() ? 0 : 1000;
  }

  static prefersReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare const __zone_symbol__requestAnimationFrame: any;

/**
 * Prevents angular from change detection when requesting an animation frame
 *
 * Credits goes to:
 * https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/helpers.ts
 */
export const requestAnimationFrameNoNgZone = (
  callback: (...args: any[]) => void
) => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(callback);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(callback);
  }
  return setTimeout(callback);
};

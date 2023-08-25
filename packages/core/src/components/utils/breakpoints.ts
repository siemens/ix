/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const mediaQueries = {
  sm: '(min-width: 36em)',
  md: '(min-width: 48em)',
  lg: '(min-width: 62em)',
} as const;

export type Breakpoint = keyof typeof mediaQueries;

export const matchBreakpoint = (breakpoint: Breakpoint) => {
  if (typeof window !== 'undefined' && (window as any).matchMedia) {
    const mediaQuery = mediaQueries[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

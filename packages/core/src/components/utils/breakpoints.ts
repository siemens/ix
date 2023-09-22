/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Implementation of scss breakpoints mixins/_break-points.scss
const mediaQueries = {
  sm: '(max-width: 48em)',
  md: '(min-width: 48.0625em) and (max-width: 80em)',
  lg: '(min-width: 80.0625em)',
} as const;

export type Breakpoint = keyof typeof mediaQueries;

export const matchBreakpoint = (breakpoint: Breakpoint) => {
  if (typeof window !== 'undefined' && (window as any).matchMedia) {
    const mediaQuery = mediaQueries[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};

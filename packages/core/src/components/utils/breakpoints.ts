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

/**
 * Listen to viewport changes for a breakpoint even when the shared layout bus
 * has detection disabled (e.g. while an application sets forceBreakpoint).
 */
export const addBreakpointMediaListener = (
  breakpoint: Breakpoint,
  listener: () => void
): (() => void) => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return () => undefined;
  }

  const mediaQueryList = window.matchMedia(mediaQueries[breakpoint]);
  const onChange = () => listener();
  mediaQueryList.addEventListener('change', onChange);
  return () => mediaQueryList.removeEventListener('change', onChange);
};

export const getCurrentBreakpoint = (): Breakpoint => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'lg';
  }

  if (matchBreakpoint('lg')) {
    return 'lg';
  }
  if (matchBreakpoint('md')) {
    return 'md';
  }
  if (matchBreakpoint('sm')) {
    return 'sm';
  }

  return 'lg';
};

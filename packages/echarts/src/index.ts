/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export { default as registerTheme } from './register';
export { default as getComputedCSSProperty } from './computecss';
export { default as brandDark } from './themes/brand-dark';
export { default as brandLight } from './themes/brand-light';
export { default as classicDark } from './themes/classic-dark';
export { default as classicLight } from './themes/classic-light';

export function convertThemeName(conventionalName: string) {
  return conventionalName.replace('theme-', '');
}

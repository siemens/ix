/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


export default function getComputedCSSProperty(cssProperty: string) {
  return getComputedStyle(document.body).getPropertyValue(`--theme-${cssProperty}`);
}
